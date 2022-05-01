(function(){
    function buildQuiz(){
      // functio
      const output = [];
  
     
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
         
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
 
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
   
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
     
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
     
      let numCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
       
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
       
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
        
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        
        else{
          
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      
      resultsContainer.innerHTML = `${numCorrect} oikein ${myQuestions.length}:sta, nyt voit edellistä klikkaamalla käydä katsomassa oikeat vastaukset`;
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
  
    // kysymysten tekoa
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Kysymys 1, Mikä näistä ei kuulu Eurooppaan?",
        answers: {
          a: "Argentina",
          b: "Suomi",
          c: "Saksa"
        },
        correctAnswer: "a"
      },
      {
        question: "Kysymys 2, Missä kuukaudessa on 28 päivää?",
        answers: {
          a: "Tammikuu",
          b: "Helmikuu",
          c: "Joulukuu"
        },
        correctAnswer: "b"
      },
      {
        question: "Kysymys 3, Mikä on Kili?",
        answers: {
          a: "Nuori vuohi",
          b: "Kala",
          c: "Kasvi"
        },
        correctAnswer: "a"
      },
      {
        question: " Kysymys 4, Jos rikot posliiniastian, laitatko sen mihin jäteastiaan?",
        answers: {
          a: "Muovinkeräykseen",
          b: "Sekajätteeseen",
          c: "Lakaisen sohvan alle enkä kerro kenellekkään (▀̿Ĺ̯▀̿ ̿) "
        },
        correctAnswer: "b"
      },
      {
        question: " Kysymys 5, Saksan pääkaupunki?",
        answers: {
          a: "Berliini",
          b: "Hanoi",
          c: "Tijuana"
        },
        correctAnswer: "a"
      },
      {
        question: " Kysymys 6, Mikä on Ruotsin pääkaupunki?",
        answers: {
          a: "Oslo",
          b: "Tallinna",
          c: "Tukholma"
        },
        correctAnswer: "c"
      },
      {
        question: " Kysymys 7, Mikä on Belgian pääkaupunki?",
        answers: {
          a: "Bryssel",
          b: "Varsova",
          c: "Budapest"
        },
        correctAnswer: "a"
      },
      {
        question: " Kysymys 8, Mikä on Ukrainan pääkaupunki?",
        answers: {
          a: "Bukarest",
          b: "Kiova",
          c: "Moskova"
        },
        correctAnswer: "b"
      },
      {
        question: " Kysymys 9, Mikä on Norjan pääkaupunki?",
        answers: {
          a: "Oslo",
          b: "Tukholma",
          c: "Praha"
        },
        correctAnswer: "a"
      },
      {
        question: " Kysymys 10, Mikä seuraavista luonnonvaraisista eläimistä nukkuu talviunta?",
        answers: {
          a: "Susi",
          b: "Joutsen",
          c: "Karhu ʕ•ᴥ•ʔ",
        },
        correctAnswer: "c"
      }
      
    ];
  
    
    buildQuiz();
  
   
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
  
    showSlide(currentSlide);
  
   
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();