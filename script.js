const vocabData = [
    { q: "가람", a: "강" }, { q: "가온", a: "가운데" }, { q: "그린나래", a: "그린 듯이 아름다운 날개" },
    { q: "꼬리별", a: "혜성" }, { q: "나르샤", a: "날아오르다" }, { q: "너울", a: "바다의 크고 무거운 물결" },
    { q: "노을", a: "해 질 녘의 붉은 빛" }, { q: "누리", a: "세상" }, { q: "다솜", a: "사랑" },
    { q: "도담도담", a: "어린아이가 탈 없이 잘 자라는 모양" }, { q: "도둑눈", a: "밤사이에 몰래 내린 눈" },
    { q: "돌개바람", a: "회오리바람" }, { q: "띠앗머리", a: "형제자매 사이의 우애" }, { q: "마루", a: "하늘" },
    { q: "마파람", a: "남풍" }, { q: "먼지잼", a: "먼지만 잠재울 정도로 아주 조금 내리는 비" },
    { q: "미립", a: "경험을 통해 얻은 묘한 이치나 요령" }, { q: "미르", a: "용" },
    { q: "바람꽃", a: "큰 바람이 일 때 먼 산에 구름같이 보이는 현상" }, { q: "별똥별", a: "유성" },
    { q: "볼우물", a: "보조개" }, { q: "비나리", a: "앞길의 행복을 빌어주는 말" },
    { q: "산돌림", a: "이곳저곳 옮겨 다니며 내리는 소나기" }, { q: "새벽별", a: "샛별" },
    { q: "시나브로", a: "모르는 사이에 조금씩 조금씩" }, { q: "아람", a: "충분히 익어 저절로 떨어진 열매" },
    { q: "아리아", a: "요정" }, { q: "아사녀", a: "예쁜 여자" }, { q: "아사달", a: "아침 땅" },
    { q: "아스라이", a: "기억이 희미하거나 멀리 보이는 모양" }, { q: "안다미로", a: "그릇에 담은 것이 넘치도록 많이" },
    { q: "애오라지", a: "오로지" }, { q: "여우비", a: "볕이 나 있는 날 잠깐 내리는 비" },
    { q: "여우별", a: "궂은 날 잠깐 났다 사라지는 별" }, { q: "온새미로", a: "생김새 그대로 자연스럽게" },
    { q: "우람하다", a: "크고 위엄 있다" }, { q: "우렁차다", a: "소리가 매우 크고 힘차다" },
    { q: "윤슬", a: "햇빛이나 달빛에 비쳐 반짝이는 잔물결" }, { q: "은가람", a: "은은하게 흐르는 강" },
    { q: "이든", a: "착하고 어진" }, { q: "잎새", a: "잎사귀" }, { q: "잔별", a: "작은 별" },
    { q: "조은", a: "좋은" }, { q: "지음", a: "마음을 아는 벗" }, { q: "진이", a: "진한 보라색" },
    { q: "초아", a: "초처럼 자신을 태워 세상을 비추는 사람" }, { q: "코보라", a: "코가 높은 모양" },
    { q: "타래", a: "실이나 노끈을 사려 뭉친 것" }, { q: "토리", a: "실을 감아 놓은 뭉치" },
    { q: "푸르미", a: "푸른 아이" }, { q: "풀내음", a: "풀 냄새" }, { q: "하랑", a: "함께 높이 날다" },
    { q: "한울", a: "큰 울타리" }, { q: "해거름", a: "해가 질 무렵" }, { q: "해그림자", a: "해 그림자" },
    { q: "해나", a: "해가 나다" }, { q: "해찬나래", a: "햇빛이 가득 찬 날개" },
    { q: "흐노니", a: "누군가를 몹시 그리워하는 것" }, { q: "흰가람", a: "깨끗한 강" },
    { q: "가시버시", a: "부부의 낮은 말" }, { q: "감풀", a: "썰물 때 드러나는 넓고 평평한 모래톱" },
    { q: "개밥바라기", a: "저녁에 서쪽 하늘에 보이는 금성" }, { q: "고수련", a: "아픈 사람을 정성껏 돌보는 일" },
    { q: "곰비임비", a: "물건이 거듭 쌓이거나 일이 계속 일어나는 모양" }, { q: "그루잠", a: "깨었다가 다시 드는 잠" },
    { q: "깜냥", a: "일을 해낼 만한 능력" }, { q: "꽃잠", a: "결혼한 신랑 신부가 처음으로 함께 자는 잠" },
    { q: "나비잠", a: "갓난아이가 두 팔을 머리 위로 올리고 자는 잠" }, { q: "난이", a: "나비" },
    { q: "내남없이", a: "너나 나나 할 것 없이 누구나" }, { q: "너나들이", a: "허물없이 말을 주고받는 사이" },
    { q: "노고지리", a: "종다리" }, { q: "늘해랑", a: "밝고 강한 사람" }, { q: "단미", a: "달콤하고 사랑스러운 여자" },
    { q: "달보드레", a: "맛이 달고 부드러운" }, { q: "닻별", a: "카시오페아 자리" },
    { q: "돋을볕", a: "처음으로 솟아오르는 햇볕" }, { q: "듀렝", a: "오래오래" }, { q: "띠앗", a: "형제나 자매 사이의 우애" },
    { q: "마소", a: "말과 소" }, { q: "모꼬지", a: "여러 사람이 모이는 일" }, { q: "미리내", a: "은하수" },
    { q: "바림", a: "그라데이션" }, { q: "보람", a: "어떤 일을 한 뒤의 결과나 보람" },
    { q: "비설거지", a: "비가 오려 할 때 물건을 치우는 일" }, { q: "산돌이", a: "산에 사는 사람" },
    { q: "살랑살랑", a: "바람이 가볍게 부는 모양" }, { q: "생채기", a: "작은 상처" },
    { q: "소소리바람", a: "이른 봄의 삭풍" }, { q: "숯비", a: "장대비" }, { q: "아리수", a: "한강" },
    { q: "영글다", a: "열매가 익다" }, { q: "예그리나", a: "사랑하는 우리 사이" },
    { q: "웃비", a: "비가 다 그치지는 않았으나 세차게 내리다 그친 비" },
    { q: "함초롬하다", a: "가지런하고 곱다" }, { q: "소담하다", a: "생김새가 탐스럽다" },
    { q: "어련하다", a: "짐작한 대로 틀림없다" }, { q: "푸실", a: "풀이 우거진 마을" },
    { q: "꼬들꼬들", a: "물기가 빠져 조금 딱딱한 모양" }, { q: "몽글몽글", a: "덩어리가 작고 말랑말랑한 모양" }
];

let quizQueue = [];
let currentIndex = 0;
let score = 0;
let wrongList = [];
let isWaitingNext = false;

// DOM 요소 참조 (안전을 위해 초기값 null)
let dom = {};

window.onload = () => {
    // 요소가 확실히 로드된 후 참조를 가져옵니다.
    dom = {
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

    // 데이터 섞고 시작
    quizQueue = [...vocabData].sort(() => Math.random() - 0.5);
    showQuestion();
};

function showQuestion() {
    if (!quizQueue.length) return;
    
    isWaitingNext = false;
    const currentData = quizQueue[currentIndex];
    
    // 텍스트 업데이트
    dom.remainNum.innerText = `${quizQueue.length - currentIndex}문제 남음`;
    dom.progress.style.width = `${(currentIndex / quizQueue.length) * 100}%`;
    dom.question.innerText = currentData.q;
    
    dom.feedback.innerText = '';
    dom.input.value = '';
    dom.input.disabled = false;
    dom.input.classList.remove('correct', 'wrong');
    dom.input.focus();
    dom.btn.innerText = '제출하기 (Enter)';
    dom.btn.style.background = '#6366f1'; // 기본 색상으로 복구
}

function handleAction() {
    if (isWaitingNext) nextQuestion();
    else checkAnswer();
}

function checkAnswer() {
    const inputVal = dom.input.value.trim();
    if (!inputVal) return;

    const currentData = quizQueue[currentIndex];
    // 정답 비교 시 공백 제거
    const cleanInput = inputVal.replace(/\s+/g, '');
    const cleanAns = currentData.a.replace(/\s+/g, '');
    
    const isCorrect = (cleanInput === cleanAns);

    isWaitingNext = true;
    dom.input.disabled = true;

    if (isCorrect) {
        score++;
        dom.input.classList.add('correct');
        dom.feedback.innerHTML = '<span style="color:#10b981">정답입니다! 🎉</span>';
        dom.btn.style.background = '#10b981';
    } else {
        dom.input.classList.add('wrong');
        dom.feedback.innerHTML = `<span style="color:#ef4444">오답! 정답: [${currentData.a}]</span>`;
        dom.btn.style.background = '#ef4444';
        wrongList.push({ q: currentData.q, a: currentData.a, u: inputVal });
    }
    dom.btn.innerText = '다음 문제 (Enter ↵)';
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
            <div style="padding:10px; border-bottom:1px solid #eee; text-align:left;">
                <div style="font-weight:bold; color:#ef4444;">${item.q}</div>
                <div style="font-size:0.85rem;">정답: ${item.a} / 내 답: ${item.u}</div>
            </div>
        `).join('');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (dom.screenQuiz && dom.screenQuiz.style.display !== 'none') handleAction();
    }
});
