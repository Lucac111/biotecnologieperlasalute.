const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

const exitBtn = document.querySelector('.exit-btn');
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    } else {
        showResultBox();
    }
}

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
                    <div class="option"><span>${questions[index].options[1]}</span></div>
                    <div class="option"><span>${questions[index].options[2]}</span></div>
                    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent.trim().toLowerCase();
    let correctAnswer = questions[questionCount].answer.trim().toLowerCase();
    let allOptions = optionList.children.length;

    if (answer.classList.contains('disabled')) return;

    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {
        answer.classList.add('incorrect');
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent.trim().toLowerCase() === correctAnswer) {
                optionList.children[i].classList.add('correct');
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
        optionList.children[i].removeAttribute('onclick');
    }

    nextBtn.classList.add('active');
}

nextBtn.classList.remove('active'); // Disable next button initially

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active'); // Rende visibile la casella dei risultati

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Punteggio: ${userScore} di ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = 0;  // Assicurati che parta da 0
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;  // Velocità dell'animazione
    let increment = (progressEndValue / 100); // Incremento in base alla percentuale finale

    // Usa il setInterval per creare un'animazione della progressione
    let progress = setInterval(() => {
        // Se il valore è uguale o maggiore di progressEndValue, ferma l'animazione
        if (progressStartValue >= progressEndValue) {
            progressStartValue = progressEndValue; // Assicurati che raggiunga esattamente la percentuale finale
            clearInterval(progress);  // Ferma l'animazione
        } else {
            progressStartValue += increment; // Incremento costante basato sulla percentuale finale
        }

        progressValue.textContent = `${Math.round(progressStartValue)} %`;  // Arrotondamento per evitare decimali
        circularProgress.style.background = `conic-gradient(#150734 ${progressStartValue * 3.6}deg, #E0E5EB 0deg)`;
    }, speed);
}


tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
}

// Seleziona gli elementi del DOM
const btnLeggi1 = document.querySelector('.btn-leggi1');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

// Apre la finestra modale quando si preme "Leggi di più"
btnLeggi1.addEventListener('click', function(event) {
  event.preventDefault();  // Evita il comportamento di default del link
  modal.style.display = 'block';
  document.body.classList.add('modal-open');  // Aggiunge la classe per bloccare lo scroll
});

// Chiude la finestra modale quando si clicca sulla "X"
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');  // Rimuove la classe per sbloccare lo scroll
});

// Chiude la finestra modale se si clicca fuori dal contenuto
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});
