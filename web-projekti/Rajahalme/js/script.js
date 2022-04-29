function randomNumber(lowest, highest) {
    return Math.floor(Math.random() * (highest - lowest + 1) ) + lowest;
}

const button = document.querySelector("checkAnswers");

function checkAnswers(){
    let question1 = Number(document.getElementById("question1").textContent);
    let question2 = Number(document.getElementById("question2").textContent);
    let question3 = Number(document.getElementById("question3").textContent);
    let question4 = Number(document.getElementById("question4").textContent);
    let question5 = Number(document.getElementById("question5").textContent);

    let answer1 = Number(document.getElementById("answer1").value);
    let answer2 = Number(document.getElementById("answer1").value);
    let answer3 = Number(document.getElementById("answer1").value);
    let answer4 = Number(document.getElementById("answer1").value);
    let answer5 = Number(document.getElementById("answer1").value);

    console.log(answer1);
    console.log(question1);
    console.log(question1 * question1)

    let rightAnswers = 0;

    let ERROR1 = "Oikea vastaus on ";
    let ERROR2 = "Muista kirjoittaa vastauksesi!";

    //Question 1
    if(answer1 = ""){
        document.getElementById("error1").innerHTML = ERROR2;
    } if (answer1 != (question1 * question1)){
        document.getElementById("error1").innerHTML = ERROR1 + (question1 * question1);
    } else {
        document.getElementById("error1").innerHTML = "Oikein!"
        rightAnswers++
    }
    //Question 2
    if(answer2 = ""){
        document.getElementById("error2").innerHTML = ERROR2;
    } else if (answer2 != (423 + question2)){
        document.getElementById("error2").innerHTML = ERROR1 + (423 + question2);
    } else {
        rightAnswers++
    }
    //Question3
    if(answer3 = ""){
        document.getElementById("error3").innerHTML = ERROR2;
    } else if (answer3 != (9 + 9 + question3 + question3)){
        document.getElementById("error3").innerHTML = ERROR1 + (9 + 9 + question3 + question3);
    } else {
        rightAnswers++
    }
    //Question4
    if(answer4 = ""){
        document.getElementById("error4").innerHTML = ERROR2;
    } else if (answer4 != (question4 / 100)){
        document.getElementById("error4").innerHTML = ERROR1 + (question4 / 100);
    } else {
        rightAnswers++
    }
    //Question5
    if(answer5 = ""){
        document.getElementById("error5").innerHTML = ERROR2;
    } else if (answer5 != (question5 - 624)){
        document.getElementById("error5").innerHTML = ERROR1 + (question5 - 624);
    } else {
        rightAnswers++
    }

    document.getElementById("Feedback").innerHTML = "Tuloksesi on " + rightAnswers;
}

function restartGame(){
    document.getElementById("question1").innerHTML = "";
    document.getElementById("question2").innerHTML = "";
    document.getElementById("question3").innerHTML = "";
    document.getElementById("question4").innerHTML = "";
    document.getElementById("question5").innerHTML = "";

    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
    document.getElementById("error5").innerHTML = "";

    document.getElementById("answer1").innerHTML = "";
    document.getElementById("answer2").innerHTML = "";
    document.getElementById("answer3").innerHTML = "";
    document.getElementById("answer4").innerHTML = "";
    document.getElementById("answer5").innerHTML = "";

    document.getElementById("Feedback").innerHTML = "";

    document.getElementById("question1").innerHTML = randomNumber(2, 9);
    document.getElementById("question2").innerHTML = randomNumber(130, 560);
    document.getElementById("question3").innerHTML = randomNumber(2, 20);
    document.getElementById("question4").innerHTML = randomNumber(100, 1500);
    document.getElementById("question5").innerHTML = randomNumber(625, 1500);
}