const vocabData = [
    { q: "이상해씨", a: "Bulbasaur" }, { q: "이상해풀", a: "Ivysaur" }, { q: "이상해꽃", a: "Venusaur" },
    { q: "파이리", a: "Charmander" }, { q: "리자드", a: "Charmeleon" }, { q: "리자몽", a: "Charizard" },
    { q: "꼬부기", a: "Squirtle" }, { q: "어니부기", a: "Wartortle" }, { q: "거북왕", a: "Blastoise" },
    { q: "캐터피", a: "Caterpie" }, { q: "단데기", a: "Metapod" }, { q: "버터플", a: "Butterfree" },
    { q: "뿔충이", a: "Weedle" }, { q: "딱충이", a: "Kakuna" }, { q: "독침붕", a: "Beedrill" },
    { q: "구구", a: "Pidgey" }, { q: "피죤", a: "Pidgeotto" }, { q: "피죤투", a: "Pidgeot" },
    { q: "꼬렛", a: "Rattata" }, { q: "레트라", a: "Raticate" }, { q: "깨비참", a: "Spearow" },
    { q: "깨비드릴조", a: "Fearow" }, { q: "아보", a: "Ekans" }, { q: "아보크", a: "Arbok" },
    { q: "피카츄", a: "Pikachu" }, { q: "라이츄", a: "Raichu" }, { q: "모래두지", a: "Sandshrew" },
    { q: "모래고지", a: "Sandslash" }, { q: "니드런♀", a: "Nidoran F" }, { q: "니드런♂", a: "Nidoran M" },
    { q: "식스테일", a: "Vulpix" }, { q: "나인테일", a: "Ninetales" }, { q: "푸린", a: "Jigglypuff" },
    { q: "푸크린", a: "Wigglytuff" }, { q: "주뱃", a: "Zubat" }, { q: "골뱃", a: "Golbat" },
    { q: "뚜벅초", a: "Oddish" }, { q: "냄새꼬", a: "Gloom" }, { q: "라플레시아", a: "Vileplume" },
    { q: "파라스", a: "Paras" }, { q: "파라섹트", a: "Parasect" }, { q: "콘팡", a: "Venonat" },
    { q: "도나리", a: "Venomoth" }, { q: "디그다", a: "Diglett" }, { q: "닥트리오", a: "Dugtrio" },
    { q: "나옹", a: "Meowth" }, { q: "페르시온", a: "Persian" }, { q: "고라파덕", a: "Psyduck" },
    { q: "골덕", a: "Golduck" }, { q: "망키", a: "Mankey" }, { q: "성원숭", a: "Primeape" },
    { q: "가디", a: "Growlithe" }, { q: "윈디", a: "Arcanine" }, { q: "발챙이", a: "Poliwag" },
    { q: "수륙챙이", a: "Poliwhirl" }, { q: "강챙이", a: "Poliwrath" }, { q: "케이시", a: "Abra" },
    { q: "윤겔라", a: "Kadabra" }, { q: "후딘", a: "Alakazam" }, { q: "알통몬", a: "Machop" },
    { q: "근육몬", a: "Machoke" }, { q: "괴력몬", a: "Machamp" }, { q: "모다피", a: "Bellsprout" },
    { q: "우츠동", a: "Weepinbell" }, { q: "우츠보트", a: "Victreebel" }, { q: "왕눈해", a: "Tentacool" },
    { q: "독파리", a: "Tentacruel" }, { q: "꼬마돌", a: "Geodude" }, { q: "데구리", a: "Graveler" },
    { q: "딱구리", a: "Golem" }, { q: "포니타", a: "Ponyta" }, { q: "날쌩마", a: "Rapidash" },
    { q: "야돈", a: "Slowpoke" }, { q: "야도란", a: "Slowbro" }, { q: "코일", a: "Magnemite" },
    { q: "레어코일", a: "Magneton" }, { q: "파오리", a: "Farfetch'd" }, { q: "두두", a: "Doduo" },
    { q: "두트리오", a: "Dodrio" }, { q: "쥬쥬", a: "Seel" }, { q: "쥬레곤", a: "Dewgong" },
    { q: "질퍽이", a: "Grimer" }, { q: "질뻐기", a: "Muk" }, { q: "셀러", a: "Shellder" },
    { q: "파르셀", a: "Cloyster" }, { q: "고스", a: "Gastly" }, { q: "고우스트", a: "Haunter" },
    { q: "팬텀", a: "Gengar" }, { q: "롱스톤", a: "Onix" }, { q: "슬리프", a: "Drowzee" },
    { q: "슬리퍼", a: "Hypno" }, { q: "크랩", a: "Krabby" }, { q: "킹크랩", a: "Kingler" },
    { q: "찌리리공", a: "Voltorb" }, { q: "붐볼", a: "Electrode" }, { q: "텅구리", a: "Marowak" },
    { q: "시라소몬", a: "Hitmonlee" }, { q: "홍수몬", a: "Hitmonchan" }, { q: "내루미", a: "Lickitung" },
    { q: "또가스", a: "Koffing" }, { q: "또도가스", a: "Weezing" }, { q: "뿔카노", a: "Rhyhorn" },
    { q: "코뿌리", a: "Rhydon" }, { q: "럭키", a: "Chansey" }, { q: "덩쿠리", a: "Tangela" },
    { q: "캥카", a: "Kangaskhan" }, { q: "쏘드라", a: "Horsea" }, { q: "시드라", a: "Seadra" },
    { q: "콘치", a: "Goldeen" }, { q: "왕콘치", a: "Seaking" }, { q: "별가사리", a: "Staryu" },
    { q: "아쿠스타", a: "Starmie" }, { q: "마임맨", a: "Mr. Mime" }, { q: "스라크", a: "Scyther" },
    { q: "루주라", a: "Jynx" }, { q: "에레브", a: "Electabuzz" }, { q: "마그마", a: "Magmar" },
    { q: "쁘사이저", a: "Pinsir" }, { q: "켄타로스", a: "Tauros" }, { q: "잉어킹", a: "Magikarp" },
    { q: "갸라도스", a: "Gyarados" }, { q: "라프라스", a: "Lapras" }, { q: "메타몽", a: "Ditto" },
    { q: "이브이", a: "Eevee" }, { q: "샤미드", a: "Vaporeon" }, { q: "쥬피썬더", a: "Jolteon" },
    { q: "부스터", a: "Flareon" }, { q: "폴리곤", a: "Porygon" }, { q: "암나이트", a: "Omanyte" },
    { q: "암스타", a: "Omastar" }, { q: "투구", a: "Kabuto" }, { q: "투구푸스", a: "Kabutops" },
    { q: "프테라", a: "Aerodactyl" }, { q: "잠만보", a: "Snorlax" }, { q: "프리져", a: "Articuno" },
    { q: "썬더", a: "Zapdos" }, { q: "파이어", a: "Moltres" }, { q: "미뇽", a: "Dratini" },
    { q: "신뇽", a: "Dragonair" }, { q: "망나뇽", a: "Dragonite" }, { q: "뮤츠", a: "Mewtwo" },
    { q: "뮤", a: "Mew" }
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
