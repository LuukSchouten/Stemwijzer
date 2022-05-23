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
    
    console.log(stellingNmr);
    console.log(choices[stellingNmr]);

    //make switch where if button is clicked, it will add the value to the array
    switch(choices[stellingNmr]){
        case "eens": 
            button1.style.backgroundColor = "#018aa9";
            //give button2 and button3 the default color
            button2.style.backgroundColor = "";
            button3.style.backgroundColor = "";
            break;
        case "none":
            button2.style.backgroundColor = "#018aa9";
            //give button1 and button3 the default color
            button1.style.backgroundColor = "";
            button3.style.backgroundColor = "";
            break;
        case "oneens":
            button3.style.backgroundColor = "#018aa9";
            //give button1 and button2 the default color
            button1.style.backgroundColor = "";
            button2.style.backgroundColor = "";
            break;
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
}

button1.onclick = function(){
    if(choices[stellingNmr]){
        choices.pop();
    }
    choices.push("eens");
    console.log(choices);
    next();
}

button2.onclick = function(){
    if(choices[stellingNmr]){
        choices.pop();
    }
    choices.push("none");
    console.log(choices);
    next();
}

button3.onclick = function(){
    if(choices[stellingNmr]){
        choices.pop();
    }
    choices.push("oneens");
    console.log(choices);
    next();
}









