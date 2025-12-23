const vocabData = [
    { q: "Bulbasaur", a: "이상해씨" }, { q: "Ivysaur", a: "이상해풀" }, { q: "Venusaur", a: "이상해꽃" },
    { q: "Charmander", a: "파이리" }, { q: "Charmeleon", a: "리자드" }, { q: "Charizard", a: "리자몽" },
    { q: "Squirtle", a: "꼬부기" }, { q: "Wartortle", a: "어니부기" }, { q: "Blastoise", a: "거북왕" },
    { q: "Caterpie", a: "캐터피" }, { q: "Metapod", a: "단데기" }, { q: "Butterfree", a: "버터플" },
    { q: "Weedle", a: "뿔충이" }, { q: "Kakuna", a: "딱충이" }, { q: "Beedrill", a: "독침붕" },
    { q: "Pidgey", a: "구구" }, { q: "Pidgeotto", a: "피죤" }, { q: "Pidgeot", a: "피죤투" },
    { q: "Rattata", a: "꼬렛" }, { q: "Raticate", a: "레트라" }, { q: "Spearow", a: "깨비참" },
    { q: "Fearow", a: "깨비드릴조" }, { q: "Ekans", a: "아보" }, { q: "Arbok", a: "아보크" },
    { q: "Pikachu", a: "피카츄" }, { q: "Raichu", a: "라이츄" }, { q: "Sandshrew", a: "모래두지" },
    { q: "Sandslash", a: "모래고지" }, { q: "Nidoran F", a: "니드런" }, { q: "Nidoran M", a: "니드런" },
    { q: "Vulpix", a: "식스테일" }, { q: "Ninetales", a: "나인테일" }, { q: "Jigglypuff", a: "푸린" },
    { q: "Wigglytuff", a: "푸크린" }, { q: "Zubat", a: "주뱃" }, { q: "Golbat", a: "골뱃" },
    { q: "Oddish", a: "뚜벅초" }, { q: "Gloom", a: "냄새꼬" }, { q: "Vileplume", a: "라플레시아" },
    { q: "Paras", a: "파라스" }, { q: "Parasect", a: "파라섹트" }, { q: "Venonat", a: "콘팡" },
    { q: "Venomoth", a: "도나리" }, { q: "Diglett", a: "디그다" }, { q: "Dugtrio", a: "닥트리오" },
    { q: "Meowth", a: "나옹" }, { q: "Persian", a: "페르시온" }, { q: "Psyduck", a: "고라파덕" },
    { q: "Golduck", a: "골덕" }, { q: "Mankey", a: "망키" }, { q: "Primeape", a: "성원숭" },
    { q: "Growlithe", a: "가디" }, { q: "Arcanine", a: "윈디" }, { q: "Poliwag", a: "발챙이" },
    { q: "Poliwhirl", a: "수륙챙이" }, { q: "Poliwrath", a: "강챙이" }, { q: "Abra", a: "케이시" },
    { q: "Kadabra", a: "윤겔라" }, { q: "Alakazam", a: "후딘" }, { q: "Machop", a: "알통몬" },
    { q: "Machoke", a: "근육몬" }, { q: "Machamp", a: "괴력몬" }, { q: "Bellsprout", a: "모다피" },
    { q: "Weepinbell", a: "우츠동" }, { q: "Victreebel", a: "우츠보트" }, { q: "Tentacool", a: "왕눈해" },
    { q: "Tentacruel", a: "독파리" }, { q: "Geodude", a: "꼬마돌" }, { q: "Graveler", a: "데구리" },
    { q: "Golem", a: "딱구리" }, { q: "Ponyta", a: "포니타" }, { q: "Rapidash", a: "날쌩마" },
    { q: "Slowpoke", a: "야돈" }, { q: "Slowbro", a: "야도란" }, { q: "Magnemite", a: "코일" },
    { q: "Magneton", a: "레어코일" }, { q: "Farfetch'd", a: "파오리" }, { q: "Doduo", a: "두두" },
    { q: "Dodrio", a: "두트리오" }, { q: "Seel", a: "쥬쥬" }, { q: "Dewgong", a: "쥬레곤" },
    { q: "Grimer", a: "질퍽이" }, { q: "Muk", a: "질뻐기" }, { q: "Shellder", a: "셀러" },
    { q: "Cloyster", a: "파르셀" }, { q: "Gastly", a: "고스" }, { q: "Haunter", a: "고우스트" },
    { q: "Gengar", a: "팬텀" }, { q: "Onix", a: "롱스톤" }, { q: "Drowzee", a: "슬리프" },
    { q: "Hypno", a: "슬리퍼" }, { q: "Krabby", a: "크랩" }, { q: "Kingler", a: "킹크랩" },
    { q: "Voltorb", a: "찌리리공" }, { q: "Electrode", a: "붐볼" }, { q: "Marowak", a: "텅구리" },
    { q: "Hitmonlee", a: "시라소몬" }, { q: "Hitmonchan", a: "홍수몬" }, { q: "Lickitung", a: "내루미" },
    { q: "Koffing", a: "또가스" }, { q: "Weezing", a: "또도가스" }, { q: "Rhyhorn", a: "뿔카노" },
    { q: "Rhydon", a: "코뿌리" }, { q: "Chansey", a: "럭키" }, { q: "Tangela", a: "덩쿠리" },
    { q: "Kangaskhan", a: "캥카" }, { q: "Horsea", a: "쏘드라" }, { q: "Seadra", a: "시드라" },
    { q: "Goldeen", a: "콘치" }, { q: "Seaking", a: "왕콘치" }, { q: "Staryu", a: "별가사리" },
    { q: "Starmie", a: "아쿠스타" }, { q: "Mr. Mime", a: "마임맨" }, { q: "Scyther", a: "스라크" },
    { q: "Jynx", a: "루주라" }, { q: "Electabuzz", a: "에레브" }, { q: "Magmar", a: "마그마" },
    { q: "Pinsir", a: "쁘사이저" }, { q: "Tauros", a: "켄타로스" }, { q: "Magikarp", a: "잉어킹" },
    { q: "Gyarados", a: "갸라도스" }, { q: "Lapras", a: "라프라스" }, { q: "Ditto", a: "메타몽" },
    { q: "Eevee", a: "이브이" }, { q: "Vaporeon", a: "샤미드" }, { q: "Jolteon", a: "쥬피썬더" },
    { q: "Flareon", a: "부스터" }, { q: "Porygon", a: "폴리곤" }, { q: "Omanyte", a: "암나이트" },
    { q: "Omastar", a: "암스타" }, { q: "Kabuto", a: "투구" }, { q: "Kabutops", a: "투구푸스" },
    { q: "Aerodactyl", a: "프테라" }, { q: "Snorlax", a: "잠만보" }, { q: "Articuno", a: "프리져" },
    { q: "Zapdos", a: "썬더" }, { q: "Moltres", a: "파이어" }, { q: "Dratini", a: "미뇽" },
    { q: "Dragonair", a: "신뇽" }, { q: "Dragonite", a: "망나뇽" }, { q: "Mewtwo", a: "뮤츠" },
    { q: "Mew", a: "뮤" }
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
