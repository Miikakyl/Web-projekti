(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} oikein ${myQuestions.length}:sta`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Kysymys 1, <br> Mikä näistä ei kuulu Eurooppaan?",
        answers: {
          a: "Argentina",
          b: "Suomi",
          c: "Saksa"
        },
        correctAnswer: "a"
      },
      {
        question: "Kysymys 2, <br> Missä kuukaudessa on 28 päivää?",
        answers: {
          a: "Tammikuu",
          b: "Helmikuu",
          c: "Joulukuu"
        },
        correctAnswer: "b"
      },
      {
        question: "Kysymys 3, <br> Mikä on Kili?",
        answers: {
          a: "Nuori vuohi",
          b: "Kala",
          c: "Kasvi"
        },
        correctAnswer: "a"
      },
      {
        question: " Kysymys 4, <br> Jos rikot posliiniastian, laitatko sen mihin jäteastiaan?",
        answers: {
          a: "Muovinkeräykseen",
          b: "Sekajätteeseen",
          c: "Lakaisen sohvan alle enkä kerro kenellekkään (▀̿Ĺ̯▀̿ ̿) "
        },
        correctAnswer: "b"
      },
      {
        question: " Kysymys 5, <br> Saksan pääkaupunki?",
        answers: {
          a: "Berliini",
          b: "Hanoi",
          c: "Tijuana"
        },
        correctAnswer: "a"
      },
      {
        question: " Kysymys 6, <br> Mikä on Ruotsin pääkaupunki?",
        answers: {
          a: "Oslo",
          b: "Tallinna",
          c: "Tukholma"
        },
        correctAnswer: "c"
      },
      {
        question: " Kysymys 7, <br> Mikä on Belgian pääkaupunki?",
        answers: {
          a: "Bryssel",
          b: "Varsova",
          c: "Budapest"
        },
        correctAnswer: "a"
      },
      {
        question: " Kysymys 8, <br> Mikä on Ukrainan pääkaupunki?",
        answers: {
          a: "Bukarest",
          b: "Kiova",
          c: "Moskova"
        },
        correctAnswer: "b"
      },
      {
        question: " Kysymys 9, <br> Mikä on Norjan pääkaupunki?",
        answers: {
          a: "Oslo",
          b: "Tukholma",
          c: "Praha"
        },
        correctAnswer: "a"
      },
      {
        question: " Kysymys 10, <br> Mikä seuraavista luonnonvaraisista eläimistä nukkuu talviunta?",
        answers: {
          a: "Susi",
          b: "Joutsen",
          c: "Karhu ʕ•ᴥ•ʔ",
          d: "Lohi"
        },
        correctAnswer: "c"
      }
      
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();