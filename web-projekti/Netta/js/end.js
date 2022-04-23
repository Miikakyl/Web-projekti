
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')



const end = JSON.parse(localStorage.getItem('end')) || []

const MAX_HIGH_SCORE = 50

finalScore.innerText = mostRecentScore

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

saveScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore
    }

    end.push(score)

    end.sort((a,b) => {
        return b.score - a.score
    })

    end.splice(5)

}


