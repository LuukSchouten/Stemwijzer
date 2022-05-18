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
}

function next(){
    console.log('amogus');
    stellingNmr += 1;
    updateStelling();
}

function test(){
    console.log('test');
}
