var stellingNmr = 0;

var stellingHeader = document.getElementById("stellingHead");
var stelling = document.getElementById("stelling");

updateStelling();

function updateStelling(){
    for(i=0; i < subjects.length; i++){
        if(stellingNmr == i){
            stellingHeader.innerHTML = i+1 + ". " + subjects[stellingNmr].title;
            stelling.innerHTML = subjects[stellingNmr].statement;
        }
    }

    //make button color blue if it is the last stelling
    if(stellingNmr == subjects.length-1){
        document.getElementById("next").style.backgroundColor = "#2196F3";
    }
    else{
        document.getElementById("next").style.backgroundColor = "#F44336";
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
        updateStelling(e);
    }
}



