const strtbutton = document.getElementById('strtbutton')
const nxtbutton = document.getElementById('nxtbutton')
const questionContainerElement = document.getElementById('questions')
const questionElement = document.getElementById('kysymys')
const answerButtonsElement = document.getElementById('vastaukset')
const resultBox = document.getElementById('Oikein')
const rtrnbutton = document.getElementById('rtrnbutton')

let shuffledQuestions, currentQuestionIndex
let results = 0;

strtbutton.addEventListener('click', startGame)
nxtbutton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    results = 0;
    strtbutton.classList.add('hide')
    shuffledQuestions = kysymykset.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    resultBox.classList.add('hide')
    rtrnbutton.classList.add('hide')
    setNextQuestion()
}



function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(kysymys) {
    questionElement.innerText = kysymys.kysymys
    kysymys.vastaukset.forEach(vastaus => {
    const button = document.createElement('button')
    button.innerText = vastaus.text
    button.classList.add('napit')
if (vastaus.correct) {
    button.dataset.correct = vastaus.correct
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
})
}

function resetState() {
    nxtbutton.classList.add('hide')
while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}
}


function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nxtbutton.classList.remove('hide')
} 
else {
    strtbutton.innerText = 'Aloita alusta'
    strtbutton.classList.remove('hide')
    rtrnbutton.classList.remove('hide')
    resultBox.classList.remove('hide')
    resultBox.innerHTML = `${results - 10}/${currentQuestionIndex + 1} oikein`;
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
if (correct) {
    element.classList.add('correct')
    results++;
}
else {
    element.classList.add('wrong') 
        }
    }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    }

const kysymykset = [
    {
    kysymys: 'Kuka on tällä hetkellä suomen presidentti? (Huhtikuu 2022)',
    vastaukset: [
        {text: 'Urho Kekkonen', correct: false},
        {text: 'Sauli Niinisto', correct: true},
        {text: 'Tarja Halonen', correct: false}
        ]
    },
    {
        kysymys: 'Mikä on Suomen kansallislaulun nimi?',
        vastaukset: [
        {text: 'Maamme', correct: true},
        {text: 'Finlandia-hymni', correct: false},
        {text: 'Synnyinmaa', correct: false}
        ]
    },
    {
        kysymys: 'Mikä on suomen kansallislintu?',
        vastaukset: [
        {text: 'Varis', correct: false},
        {text: 'Laulujoutsen', correct: true},
        {text: 'Käpytikka', correct: false}
        ]
    },
    {
        kysymys: 'Mikä on Suomen pääkaupunki?',
        vastaukset: [
        {text: 'Helsinki', correct: true},
        {text: 'Turku', correct: false},
        {text: 'Jyväskylä', correct: false}
        ]
    },
    {
        kysymys: 'Mikä kuukausi vietetään Suomen itsenäisyyspäivää?',
        vastaukset: [
        {text: 'Helmikuu', correct: false},
        {text: 'Syyskuu', correct: false},
        {text: 'Joulukuu', correct: true}
        ]
    },
    {
        kysymys: 'Mikä vuosi Suomi itsenäistyi?',
        vastaukset: [
        {text: '1917', correct: true},
        {text: '2000', correct: false},
        {text: '1987', correct: false}
        ]
    },
    {
        kysymys: 'Mikä on Suomen kansalliseläin?',
        vastaukset: [
        {text: 'Hirvi', correct: false},
        {text: 'Poro', correct: false},
        {text: 'Karhu', correct: true}
        ]
    },
    {
        kysymys: 'Mikä on Suomen kansalliskala?',
        vastaukset: [
        {text: 'Särki', correct: false},
        {text: 'Ahven', correct: true},
        {text: 'Hauki', correct: false}
        ]
    },
    {
        kysymys: 'Kuinka paljon Suomessa on asukkaita (Huhtikuu 2022)',
        vastaukset: [
        {text: '5,5 miljoonaa', correct: true},
        {text: '55 miljoonaa', correct: false},
        {text: '55 tuhatta', correct: false}
        ]
    },
    {
        kysymys: 'Kuinka monta järveä Suomessa on?',
        vastaukset: [
        {text: 'Noin 190 000', correct: true},
        {text: 'Noin 190 miljoonaa', correct: false},
        {text: 'Noin 90', correct: false}
        ]
    },
]