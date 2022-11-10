var stellingNmr = 0;
const sizeDiff = 10;

var choices = [];
var important_subjects = [];

var stellingHeader = document.getElementById("stellingHead");
var stelling = document.getElementById("stelling");

var content = document.getElementById("content");
var important = document.getElementById("important");
var resultaat = document.getElementById("results");
var options = document.getElementById("options");
var opinions = document.getElementById("opinions");
var extraContent = document.getElementById("extra_content");
var resultsDiv = document.getElementById("resultsDiv");
var main = document.getElementById("main");
var sortBtnsDiv = document.getElementById("sortBtnsDiv");
var partyResultsDiv = document.getElementById("partyResultsDiv");
var backBtn = document.getElementById("backBtn");

resultaat.style.display = "none";
important.style.display = "none";
resultsDiv.style.display = "none";

//define buttons
var button1 = document.getElementById("pro");
var button2 = document.getElementById("none");
var button3 = document.getElementById("contra");
var button4 = document.getElementById("skip");
var button5 = document.getElementById("resultsBtn");

var sort_btn = document.querySelectorAll(".sort_btn");

var bigParties = document.getElementById("bigParties");
var smallParties = document.getElementById("smallParties");
var seculaireParties = document.getElementById("seculaireParties");
var allParties = document.getElementById("allParties");

button5.style.display = "none";

updateStelling();

//when clicking button 1 remove the choice that was selected before, replace it with option 1 and put in array.
button1.onclick = function () {
    if (choices[stellingNmr]) {
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "pro");
    next();
}

//when clicking button 2 remove the choice that was selected before, replace it with option 2 and put in array.
button2.onclick = function () {
    if (choices[stellingNmr]) {
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "none");
    next();
}

//when clicking button 3 remove the choice that was selected before, replace it with option 3 and put in array.
button3.onclick = function () {
    if (choices[stellingNmr]) {
        //remove current choice
        choices.splice(stellingNmr, 1);
    }
    //add new choice
    choices.splice(stellingNmr, 0, "contra");
    next();
}

button4.onclick = function () {
    if (choices[stellingNmr]) {
        next();
    } else {
        choices.splice(stellingNmr, stellingNmr, "skipped");
        next();
    }
}

button5.onclick = checkBox;

for (var i = 0; i < sort_btn.length; i++) {
    sort_btn[i].onclick = sortResults;
}


//continue to the next question, add 1 to stellingNmr 
function next() {
    stellingNmr += 1;

    //if all questions have been answered, load the finalPage();
    if (stellingNmr == subjects.length) {
        finalPage();
    }

    //load the next question
    updateStelling();
}

//go back to previous index.html
function goBack() {
    if (stellingNmr <= 0) {
        window.location.href = "index.html";
    }
    stellingNmr -= 1;
    options.style.display = "block";
    opinions.style.display = "flex";
    important.style.display = "none";
    button5.style.display = "none";
    resultsDiv.style.display = "none";
    updateStelling();
}


//changes the title and statement to that of the next question
function updateStelling() {
    for (i = 0; i < subjects.length; i++) {
        if (stellingNmr == i) {
            stellingHeader.innerHTML = i + 1 + ". " + subjects[stellingNmr].title;
            stelling.innerHTML = subjects[stellingNmr].statement;
        }
    }

    //make switch where if button is clicked, it will add the value to the array
    switch (choices[stellingNmr]) {
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
}

//Go to final page
function finalPage() {
    stellingHeader.innerHTML = "Zijn er onderwerpen die u extra belangrijk vind?";
    stelling.innerHTML = "Aangevinkte stellingen tellen extra mee bij het berekenen van het resultaat.";
    options.style.display = "none";
    opinions.style.display = "none";
    button5.style.display = "block";
    resultsDiv.style.display = "block";

    for (i = 0; i < subjects.length; i++) {
        important.innerHTML += "<div class='important_subjects'> <input type='checkbox' id='important_" + i + "'> <p>" + subjects[i].title + "</p> <hr> </div>";
    }

    important.style.display = "block";
    backBtn.style.display = "none";
}


function checkBox() {
    var checkboxAll = document.querySelectorAll('input[type="checkbox"]');

    for (i = 0; i < checkboxAll.length; i++) {
        important_subjects.push(checkboxAll[i].checked);
    }

    results();
}

//go to restults page
function results() {
    //set ammount of points for each party
    parties.forEach(party => {
        party.points = 0;
    });

    content.style.display = "none";
    resultaat.style.display = "block";
    main.style.height = "50em";
    sortBtnsDiv.style.display = "block";

    var answer = choices[0];

    for (i = 0; i < subjects.length; i++) {
        subjects[i].parties.forEach((party) => {
            if (answer == party.position) {
                parties.forEach(item => {
                    if (item.name == party.name) {
                        if (party.position == 'pro' && important_subjects[i]) {
                            item.points = item.points + 2;
                        } else if (party.position == 'pro') {
                            item.points = item.points + 1;
                        }
                        if (party.position == 'none' && important_subjects[i]) {
                            item.points = item.points + 2;
                        } else if (party.position == 'none') {
                            item.points = item.points + 1;
                        }
                        if (party.position == 'contra' && important_subjects[i]) {
                            item.points = item.points + 2;
                        } else if (party.position == 'contra') {
                            item.points = item.points + 1;
                        }
                    }
                });
            }
        });
    }

    for (i = 0; i < subjects.length; i++) {
        partyResultsDiv.innerHTML += "<div class='partyResults' id='" + parties[i].name + "'> <p>" + parties[i].name + ": " + parties[i].points + "</p> </div>";
    }
}

//sort results 
function sortResults() {
    switch (this.id) {
        case bigParties.id:
            for (i = 0; i < subjects.length; i++) {
                if (parties[i].size < sizeDiff) {
                    var PartyName = document.getElementById(parties[i].name);
                    PartyName.classList.add('hiddenParties');
                } else {
                    var PartyName = document.getElementById(parties[i].name);
                    PartyName.classList.remove('hiddenParties');
                }
            }
            break;
        case smallParties.id:
            for (i = 0; i < subjects.length; i++) {
                if (parties[i].size > sizeDiff) {
                    var PartyName = document.getElementById(parties[i].name);
                    PartyName.classList.add('hiddenParties');
                } else {
                    var PartyName = document.getElementById(parties[i].name);
                    PartyName.classList.remove('hiddenParties');
                }
            }
            break;
        case seculaireParties.id:
            for (i = 0; i < subjects.length; i++) {
                if (parties[i].secular == true) {
                    var PartyName = document.getElementById(parties[i].name);
                    PartyName.classList.remove('hiddenParties');
                } else {
                    var PartyName = document.getElementById(parties[i].name);
                    PartyName.classList.add('hiddenParties');
                }
            }
            break;
        default:
            for (i = 0; i < subjects.length; i++) {
                var PartyName = document.getElementById(parties[i].name);
                PartyName.classList.remove('hiddenParties');
            }
    }
}