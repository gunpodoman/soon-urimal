let quizQueue = [];
let currentIndex = 0;
let score = 0;
let wrongList = [];
let isWaitingNext = false;

const dom = {
    screenQuiz: document.getElementById('quiz-screen'),
    screenResult: document.getElementById('result-screen'),
    progress: document.getElementById('progress-bar'),
    remainNum: document.getElementById('remain-num'),
    question: document.getElementById('question-text'),
    input: document.getElementById('answer-input'),
    feedback: document.getElementById('feedback'),
    btn: document.getElementById('action-btn'),
    finalScore: document.getElementById('final-score'),
    correctCnt: document.getElementById('correct-cnt'),
    totalCnt: document.getElementById('total-cnt'),
    wrongBox: document.getElementById('wrong-box'),
    wrongList: document.getElementById('wrong-list')
};

// 시작 시 자동 실행
window.onload = () => {
    quizQueue = [...vocabData].sort(() => Math.random() - 0.5);
    showQuestion();
};

function showQuestion() {
    isWaitingNext = false;
    const currentData = quizQueue[currentIndex];
    
    dom.remainNum.innerText = `${quizQueue.length - currentIndex}문제 남음`;
    dom.progress.style.width = `${(currentIndex / quizQueue.length) * 100}%`;
    dom.question.innerText = currentData.q;
    
    dom.feedback.innerText = '';
    dom.input.value = '';
    dom.input.disabled = false;
    dom.input.classList.remove('correct', 'wrong');
    dom.input.focus();
    dom.btn.innerText = '제출하기 (Enter)';
    dom.btn.style.background = 'var(--primary)';
}

function handleAction() {
    if (isWaitingNext) nextQuestion();
    else checkAnswer();
}

function checkAnswer() {
    const inputVal = dom.input.value.trim();
    if (!inputVal) return;

    const currentData = quizQueue[currentIndex];
    const isCorrect = (inputVal.replace(/\s+/g, '') === currentData.a.replace(/\s+/g, ''));

    isWaitingNext = true;
    dom.input.disabled = true;

    if (isCorrect) {
        score++;
        dom.input.classList.add('correct');
        dom.feedback.innerHTML = '<span class="msg-success">정답입니다!</span>';
        dom.btn.style.background = 'var(--success)';
    } else {
        dom.input.classList.add('wrong');
        dom.feedback.innerHTML = `<span class="msg-error">오답! 정답: ${currentData.a}</span>`;
        dom.btn.style.background = 'var(--error)';
        wrongList.push({ q: currentData.q, a: currentData.a, u: inputVal });
    }
    dom.btn.innerText = '다음 문제 (Enter)';
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= quizQueue.length) finishQuiz();
    else showQuestion();
}

function finishQuiz() {
    dom.screenQuiz.style.display = 'none';
    dom.screenResult.style.display = 'block';
    dom.finalScore.innerText = Math.round((score / quizQueue.length) * 100);
    dom.correctCnt.innerText = score;
    dom.totalCnt.innerText = quizQueue.length;

    if (wrongList.length > 0) {
        dom.wrongBox.style.display = 'block';
        dom.wrongList.innerHTML = wrongList.map(item => `
            <div class="wrong-item">
                <strong>Q: ${item.q}</strong><br>
                정답: ${item.a} / 내 답: <span style="color:red">${item.u}</span>
            </div>
        `).join('');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && dom.screenQuiz.style.display !== 'none') handleAction();
});
