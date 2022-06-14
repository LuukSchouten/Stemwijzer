var stellingNmr = 0;

var choices = [];

console.log(subjects[0].parties[0].position);

var stellingHeader = document.getElementById("stellingHead");
var stelling = document.getElementById("stelling");

//define buttons
var button1 = document.getElementById("pro");
var button2 = document.getElementById("none");
var button3 = document.getElementById("contra");

updateStelling();

button1.onclick = function(){
    if(choices[stellingNmr]){
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "pro");
    next();
}


button2.onclick = function(){
    if(choices[stellingNmr]){
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "none");
    next();
}


button3.onclick = function(){
    if(choices[stellingNmr]){
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "contra");
    next();
}


function next(){
    stellingNmr += 1;
    console.log(stellingNmr);
    console.log(choices);

    if(stellingNmr == subjects.length){
        results();
    }
    
    updateStelling();


}


function goBack(){
    if(stellingNmr <= 0){
        window.location.href = "index.html";
    }
    stellingNmr -= 1;
    console.log(stellingNmr);
    console.log(choices);
    updateStelling();
}


function updateStelling(){
    for(i=0; i < subjects.length; i++){
        if(stellingNmr == i){
            stellingHeader.innerHTML = i+1 + ". " + subjects[stellingNmr].title;
            stelling.innerHTML = subjects[stellingNmr].statement;
        }
    }   

    //make switch where if button is clicked, it will add the value to the array
    switch(choices[stellingNmr]){
        case "pro":
            button1.style.backgroundColor = "#00a8ff";
            //give button2 and button3 the default color
            button2.style.backgroundColor = "";
            button3.style.backgroundColor = "";
            break;
        case "none":
            button2.style.backgroundColor = "#00a8ff";
            //give button1 and button3 the default color
            button1.style.backgroundColor = "";
            button3.style.backgroundColor = "";
            break;
        case "contra":
            button3.style.backgroundColor = "#00a8ff";
            //give button1 and button2 the default color
            button1.style.backgroundColor = "";
            button2.style.backgroundColor = "";
            break;
        default:
            button1.style.backgroundColor = "";
            button2.style.backgroundColor = "";
            button3.style.backgroundColor = "";
            break;
    }

    //switch for scoring
    switch(subjects[stellingNmr].parties[stellingNmr].position){
        case "pro":
            console.log("pro");
            break;
        case "none":
            console.log("none");
            break;
        case "contra":
            console.log("contra");
            break;
        default:
            console.log("test");
            break;
    }
}


function results(){
    stellingNmr = 0;
}




