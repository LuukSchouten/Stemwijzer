var stellingNmr = 0;

var choices = [];

var stellingHeader = document.getElementById("stellingHead");
var stelling = document.getElementById("stelling");

//define buttons
var button1 = document.getElementById("eens");
var button2 = document.getElementById("none");
var button3 = document.getElementById("oneens");

updateStelling();

function updateStelling(){
    for(i=0; i < subjects.length; i++){
        if(stellingNmr == i){
            stellingHeader.innerHTML = i+1 + ". " + subjects[stellingNmr].title;
            stelling.innerHTML = subjects[stellingNmr].statement;
        }
    }   
}

function goBack(){
    if(stellingNmr <= 0){
        window.location.href = "index.html";
    }
    stellingNmr -= 1;
    updateStelling();
}

function next(){
    if(stellingNmr < 29){
        stellingNmr += 1;
        updateStelling();
    }

    button1.style.backgroundColor = "#00a8ff";
    button2.style.backgroundColor = "#00a8ff";
    button3.style.backgroundColor = "#00a8ff";
}








