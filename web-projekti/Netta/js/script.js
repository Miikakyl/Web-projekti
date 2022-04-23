
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let currentQuestion = {}
let availableQuestions = []
let score = 0
let questionCounter = 0
let acceptingAnswers = true

let questions = [
    {
        question: "Paljonko on 10 - 6 ?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        answer: 2,
    },
    {
        question: "Paljonko on 9 + 8 ?",
        choice1: "18",
        choice2: "17",
        choice3: "16",
        answer: 2,
    },
    {
        question: "Paljonko on 14 - 9 ?",
        choice1: "8",
        choice2: "4",
        choice3: "5",
        answer: 3,
    },
    {
        question: "Paljonko on 3 + 3 + 1 ?",
        choice1: "7",
        choice2: "4",
        choice3: "9",
        answer: 1,
    },
    {
        question: "Paljonko on 12 - 3 ?",
        choice1: "8",
        choice2: "11",
        choice3: "9",
        answer: 3,
    },
    {
        question: "Paljonko on 1 + 3 ?",
        choice1: "2",
        choice2: "5",
        choice3: "4",
        answer: 3,
    },
    {
        question: "Paljonko on 11 - 3 ?",
        choice1: "8",
        choice2: "10",
        choice3: "6",
        answer: 1,
    },
    {
        question: "Paljonko on 3 + 3 + 3 ?",
        choice1: "6",
        choice2: "15",
        choice3: "9",
        answer: 3,
    },
    {
        question: "Paljonko on 2 - 1 - 1 ?",
        choice1: "0",
        choice2: "2",
        choice3: "4",
        answer: 1,
    },
    {
        question: "Paljonko on 0 + 5 ?",
        choice1: "5",
        choice2: "0",
        choice3: "6",
        answer: 1,
    }
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 4

startGame = () => {
    score = 0
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Kysymys ${questionCounter} / ${5}`
    

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}


choices.forEach(choice => {
   
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

       
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame() 