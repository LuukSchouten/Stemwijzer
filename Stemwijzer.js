var stellingNmr = 0;

var choices = [];

console.log(subjects[0].parties[0].position);

var stellingHeader = document.getElementById("stellingHead");
var stelling = document.getElementById("stelling");

//define buttons
var button1 = document.getElementById("pro");
var button2 = document.getElementById("none");
var button3 = document.getElementById("contra");
var button4 = document.getElementById("skip");

updateStelling();

//when clicking button 1 remove the choice that was selected before, replace it with option 1 and put in array.
button1.onclick = function(){
    if(choices[stellingNmr]){
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "pro");
    next();
}

//when clicking button 2 remove the choice that was selected before, replace it with option 2 and put in array.
button2.onclick = function(){
    if(choices[stellingNmr]){
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "none");
    next();
}

//when clicking button 3 remove the choice that was selected before, replace it with option 3 and put in array.
button3.onclick = function(){
    if(choices[stellingNmr]){
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "contra");
    next();
}

button4.onclick = function(){
    if(choices[stellingNmr]){
        next();
    }else{
        choices.splice(stellingNmr, stellingNmr, "skipped");
        next();
    }
}

//continue to the next question, add 1 to stellingNmr 
function next(){
    stellingNmr += 1;
    console.log(stellingNmr);
    console.log(choices);

    //if all questions have been answered, load the results();
    if(stellingNmr == subjects.length){
        results();
    }

    //load the next question
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

//changes the title and statement to that of the next question
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
            // add 1 point to all parties that are pro on this stellingNmr
            break;
        case "none":
            button2.style.backgroundColor = "#00a8ff";
            //give button1 and button3 the default color
            button1.style.backgroundColor = "";
            button3.style.backgroundColor = "";
            // add 1 point to all parties that are pro on this stellingNmr
            break;
        case "contra":
            button3.style.backgroundColor = "#00a8ff";
            //give button1 and button2 the default color
            button1.style.backgroundColor = "";
            button2.style.backgroundColor = "";
            // add 1 point to all parties that are pro on this stellingNmr
            break;
        default:
            button1.style.backgroundColor = "";
            button2.style.backgroundColor = "";
            button3.style.backgroundColor = "";
            break;
    }
}






