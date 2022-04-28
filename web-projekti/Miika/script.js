const QUESTIONS_ARRAY = [
    {
    question: "16 : 2",
    rightAnswer:"8",
    wrongAnswerA:"6",
    wrongAnswerB:"4"
    },
    {
    question: "10 : 2",
    rightAnswer:"5",
    wrongAnswerA:"4",
    wrongAnswerB:"3"
    },
    {
    question: "12 : 3",
    rightAnswer:"4",
    wrongAnswerA:"6",
    wrongAnswerB:"3",
    },
    {
    question: "3 : 3",
    rightAnswer:"1",
    wrongAnswerA:"3",
    wrongAnswerB:"2",
    },
    {
    question: "Montako kuukautta on 4 vuotta?",
    rightAnswer:"48kk",
    wrongAnswerA:"36kK",
    wrongAnswerB:"40kk"
    },
    {
    question: "Montako vuotta on 24kk?",
    rightAnswer:"2v",
    wrongAnswerA:"3v",
    wrongAnswerB:"4v"
    },
    {
    question: "Montako sekuntia on 2min?",
    rightAnswer:"120s",
    wrongAnswerA:"100s",
    wrongAnswerB:"200s"
    },
    {
    question: "5 x 7",
    rightAnswer:"35",
    wrongAnswerA:"30",
    wrongAnswerB:"40"
    },
    {
    question: "6 x 3",
    rightAnswer:"18",
    wrongAnswerA:"16",
    wrongAnswerB:"14"
    },
    {
    question: "9 x 4",
    rightAnswer:"36",
    wrongAnswerA:"32",
    wrongAnswerB:"43"
    }
]
let copyOfQuestionArray = [];
const FRAME = document.querySelector("#frame");
let startBtn = document.querySelector("#startTheGame");
let goBackBtn = document.querySelector("#goBackBtn");
let bulbArea = document.querySelector("#bulbArea");
let resultArea = document.querySelector("#resultTxtArea");

let answer;
let indexOfQuestion;
let indexOfBulb = 0;
let pointCounter = 0;

/**
 * Funktio valitsee random numeron 0-9 väliltä, jota käytetään indeksinumerona copyOfQuestionsArrayssa, jotta saadaan randomisti kysymysolio vastauksineen.
 * @param {number} min 0
 * @param {number} max 9
 * @returns random number
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * AnswersArray sekoitetaan, jotta vastausnappien järjestys on satunnainen
 * 
 * @param {array} array 
 * @returns Sekoitettu answersArray
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));
                    
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
}
/**
 * Funktio aloittaa pelin ja alustaa FRAMEN ja lamppu-ikonit, sekä täyttää QUESTIONS_ARRAYN kopiotaulukkoon
 */
function startTheGame() {
    pointCounter = 0;
    
    while (FRAME.lastChild != goBackBtn) {
        FRAME.lastChild.remove();
    }

    indexOfBulb = 0;        

    for(let i = 0; i < bulbArea.childElementCount; i++){
        bulbArea.children[i].style.color = "#d62ad1";
    }

    QUESTIONS_ARRAY.forEach(element => {
        copyOfQuestionArray.push(element)
    })

    startBtn.style.display ="none";
    goBackBtn.style.display ="none";
    bulbArea.style.display = "block";

    makeQuestions();
}
/**
 * Funktiossa luodaan vastausnapit ja kysymys valitun olionpropertyjen perusteella. vastausnappeihin lisätään atribuutti onclick="checkAnswer(value)"
 */
function makeQuestions() {
    indexOfQuestion = getRandomIntInclusive(0,copyOfQuestionArray.length-1);
    let newQuestion = document.createElement("h2");
    newQuestion.innerHTML = copyOfQuestionArray[indexOfQuestion].question;
    FRAME.appendChild(newQuestion);

    answers = [copyOfQuestionArray[indexOfQuestion].rightAnswer, // Valitusta kysmysolion vastauspropertyistä tehdään oma taulukko
    copyOfQuestionArray[indexOfQuestion].wrongAnswerA,
    copyOfQuestionArray[indexOfQuestion].wrongAnswerB]

    answers = shuffleArray(answers);

    answers.forEach(element => {        // vastausten tulostus                  
        answer = document.createElement("button");
        answer.innerHTML = element;
        answer.value = element;
        answer.setAttribute("class","answers");
        answer.setAttribute("onclick","checkAnswer(value)");
        FRAME.appendChild(answer);
    })
}
/**
 * Funktiossa arvon perusteella vaihdetaan vastausnapin väriä (vihreä oikein ja punainen väärin) Vastaessa väärin väritetään myös oikea vastaus ja
 * vastaessa oikein lisätään pointCounteriin +1
 * 
 * @param {string} value Painetun vastausnapin arvo 
 */
function checkAnswer(value) {
    let answerBtns = document.querySelectorAll(".answers");
    let bResult = true;

    answerBtns.forEach(answerElement => {                                               
        answerElement.disabled = true;

        if(answerElement.value === copyOfQuestionArray[indexOfQuestion].rightAnswer && answerElement.value === value){ 
            pointCounter = pointCounter + 1;
            answerElement.style.backgroundColor = "green";
            bAnimatin = true;
        }
        else if(answerElement.value !== copyOfQuestionArray[indexOfQuestion].rightAnswer && answerElement.value === value){     //Jos vastaus väärä niin loopataan uudestaan answerBtns                                                                      //ja etsitään oikea vastaus näyttämisen takia
            answerElement.style.backgroundColor = "red";
            bResult = false;

            answerBtns.forEach(element => {
                if(element.value === copyOfQuestionArray[indexOfQuestion].rightAnswer){
                    element.style.backgroundColor = "green";
                }
            })
        }
    })
    printResultTxt(bResult);
}
/**
 * Totuusarvon perusteella vaihdetaan lamppu-ikonin väriä vihreäksi tai punaiseksi. Samalla tulostetaan 
 * Oikein tai Väärin teksti.
 * @param {boolean} bResult True/false 
 */
function printResultTxt(bResult) {

    switch(bResult){
        case true:
            bulbArea.children[indexOfBulb].style.color = "green";
            resultArea.innerHTML = "<h3 style= color:green>Oikein!</h3>";
            indexOfBulb++;
            break;
        case false:
            bulbArea.children[indexOfBulb].style.color = "red";
            resultArea.innerHTML = "<h3 style= color:red>Väärin!</h3>";
            indexOfBulb++;
            break;   
    }
    endAndStartOver();
}
/**
 *SetTimeout-funktio odottaa 2s ennen kuin kysymys ja vastaukset poistetaan. Jos copyOfQuestionArray.length === 0, niin tulostetaan tulos ja kysytään
 *pelataanko uudestaan. Jos taulukossa vielä alkioita, niin mennään seuraavaan kysymykseen.
 */
function endAndStartOver() {
    setTimeout(function(){                                  
        copyOfQuestionArray.splice(indexOfQuestion,1)
        resultArea.innerHTML = "";

        while (FRAME.lastChild != goBackBtn) {
            FRAME.lastChild.remove();
        }

        if(copyOfQuestionArray.length === 5) {                          // <-- pelinlopetus ja kysytään uutta peliä
            let endingText = document.createElement("h2");
            endingText.innerHTML = `Peli loppui! Sait ${pointCounter}/5 oikein!`;
        
            FRAME.appendChild(endingText);
            startBtn.style.display = "block";
            goBackBtn.style.display = "block";
            startBtn.innerHTML = "Pelaa uudestaan!";
            copyOfQuestionArray = [];
        }
        else {
            makeQuestions();
        }
    },2000)
}

goBackBtn.addEventListener("click", () => window.location.href = '../kotisivu.html') // Palaa etusivulle
