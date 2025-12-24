const vocabData = [
    { q: "자이언트 펀치", a: "동키콩" }, { q: "회전 베기", a: "링크" }, { q: "차지 샷", a: "사무스" },
    { q: "알 낳기", a: "요시" }, { q: "스톤 변신", a: "커비" }, { q: "폭스 일루전", a: "폭스" },
    { q: "번개 구체", a: "피카츄" }, { q: "루이지 로켓", a: "루이지" }, { q: "PK 파이어", a: "네스" },
    { q: "팔콘 펀치", a: "캡틴 팔콘" }, { q: "잠자기", a: "푸린" }, { q: "피치 봄", a: "피치" },
    { q: "쿠파 클러치", a: "쿠파" }, { q: "고무줄 점프", a: "아이스클라이머" }, { q: "넬의 사랑", a: "젤다" },
    { q: "침바늘", a: "시크" }, { q: "알 부화", a: "닥터마리오" }, { q: "섀도볼", a: "뮤츠" },
    { q: "익스플로전", a: "로이" }, { q: "저지", a: "미스터 게임&워치" }, { q: "셔틀 루프", a: "메타 나이트" },
    { q: "팔루테나의 활", a: "피트" }, { q: "파이 가", a: "소라" }, { q: "채굴 / 제작", a: "스티브" },
    { q: "천입", a: "세피로스" }, { q: "데빌 블래스터", a: "카즈야" }, { q: "흉자베기", a: "클라우드" },
    { q: "스플래시 밤", a: "잉클링" }, { q: "나무 심기", a: "마을 주민" }, { q: "낚싯대", a: "여울" },
    { q: "DD래리어트", a: "어흥염" }, { q: "독뿜기", a: "뻐끔플라워" }, { q: "에이하", a: "조커" },
    { q: "메라", a: "용사" }, { q: "원더윙", a: "반조 & 카주이" }, { q: "파워 가이저", a: "테리" },
    { q: "천장지폐", a: "벨레트" }, { q: "암 잽", a: "미엔미엔" }, { q: "플레임 노바", a: "호무라" },
    { q: "포토닉 엣지", a: "히카리" }, { q: "메가톤 펀치", a: "디디콩" }, { q: "에어 슬래시", a: "슈르크" },
    { q: "가드 캔슬", a: "리틀 맥" }, { q: "블루 윈드", a: "소닉" }, { q: "파동탄", a: "루카리오" },
    { q: "전술서", a: "러플레" }, { q: "태양 예배", a: "Wii Fit 트레이너" }, { q: "메탈 블레이드", a: "메가맨" },
    { q: "보너스 과일", a: "팩맨" }, { q: "슈퍼 점프 펀치", a: "마리오" }, { q: "플레임 노바", a: "호무라" },
    { q: "레이닝 애로우", a: "히카리" }, { q: "엘풍", a: "러플레" }, { q: "PK 프리즈", a: "류카" },
    { q: "데스 가드", a: "리틀 맥" }, { q: "하이드로 펌프", a: "개굴닌자" }, { q: "플라이트", a: "피트" },
    { q: "슈퍼 데데데 점프", a: "데데데 대왕" }, { q: "드래곤 런지", a: "카무이" }, { q: "버스터 울프", a: "테리" },
    { q: "파동권", a: "류" }, { q: "승룡권", a: "켄" }, { q: "슈퍼 터보 점프", a: "와리오" },
    { q: "오렌지 샷", a: "잉클링" }, { q: "프로스트 아치", a: "젤다" }, { q: "다이너마이트", a: "스티브" },
    { q: "매직 암", a: "미엔미엔" }, { q: "플래시 테일", a: "피츄" }, { q: "물대포", a: "꼬부기" },
    { q: "잎날가르기", a: "이상해풀" }, { q: "플레어드라이브", a: "리자몽" }, { q: "오일 패닉", a: "미스터 게임&워치" },
    { q: "버스터 슬래시", a: "클라우드" }, { q: "라이더 킥", a: "조커" }, { q: "드래곤 레이저", a: "카무이" },
    { q: "블래스터", a: "울프" }, { q: "리플렉터", a: "팔코" }, { q: "오라 구체", a: "루카리오" },
    { q: "스핀 해머", a: "디디디 대왕" }, { q: "플라잉 보디 프레스", a: "어흥염" }, { q: "해머", a: "마리오" },
    { q: "슬라이딩", a: "록맨" }, { q: "슈팅 스타", a: "로젤리나&치코" }, { q: "위치 타임", a: "베요네타" },
    { q: "불꽃 바퀴", a: "가오가엔" }, { q: "화염방사", a: "쿠파" }, { q: "알 굴리기", a: "요시" },
    { q: "폭탄 던지기", a: "영 링크" }, { q: "부메랑 던지기", a: "툰 링크" }, { q: "빛의 화살", a: "팔루테나" },
    { q: "블랙홀", a: "뮤츠" }, { q: "최속풍신권", a: "카즈야" }, { q: "섬전 다리", a: "제로 슈트 사무스" },
    { q: "패럴라이저", a: "제로 슈트 사무스" }, { q: "불꽃의 춤", a: "심판" }, { q: "에이하", a: "조커" },
    { q: "기간틱 레인", a: "세피로스" }, { q: "파이어 가", a: "소라" }, { q: "폭발 샷", a: "킹크루루" },
    { q: "대포알", a: "킹크루루" }, { q: "크루루 콥터", a: "킹크루루" }
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
