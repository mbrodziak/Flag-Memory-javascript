let countries = ["poland", "czech", "germany", "ukraine", "russia", "lithuania"];
let drawn = [];
let repetitions = [];
let click_field_id = null;
let click_field_nr = null;
let first_click_field = true;
let second_click_field = false;
let first = null;
let second = null; 
let first_id = null;
let second_id = null;
let discovered = 0; 
let first_game = true;

function newGame() {
    let selectors = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#ten", "#eleven", "#twelve"];
    for (let i = 0; i < selectors.length; i++) {
        for (let j = 0; j < countries.length; j++) {
            if (drawn[i] === countries[j]) {
                document.querySelector(selectors[i]).classList.remove(countries[j]);
            }
        }
        document.querySelector(selectors[i]).classList.remove("hit");
    } 
}


function startGame() {
    if (first_game === false) {
        newGame();
        drawn = [];
        repetitions = [];
        click_field_id = null;
        click_field_nr = null;
        first_click_field = true;
        second_click_field = false;
        first = null;
        second = null; 
        first_id = null;
        second_id = null;
        discovered = 0;
    } 
    fillIn();
    draw();
    document.getElementById("undiscovered").value = countries.length;
    document.getElementById("discovered").value = discovered;
}

function fillIn() {
    while (repetitions.length < countries.length) {
        repetitions.push(0);
    }
}

function draw() {
    let rand = Math.floor(Math.random() * countries.length);
    while (drawn.length < (countries.length * 2)) {
        if (repetitions[rand] < 2) {
            drawn.push(countries[rand]);
            repetitions[rand]++;
        }
        rand = Math.floor(Math.random() * countries.length);
    }    
}

function show() {
    for (let i = 0; i < countries.length; i++) {
        if (drawn[click_field_nr] === countries[i]) {
            document.querySelector(click_field_id).classList.toggle(countries[i]);
        }
    }
}


function hide() {
    for (let i = 0; i < countries.length; i++) {
        if (drawn[first] === countries[i]) {
            document.querySelector(first_id).classList.toggle(countries[i])
        }
        if (drawn[second] === countries[i]) {
            document.querySelector(second_id).classList.toggle(countries[i])
        }
    }
    waitClick();
}

function checkClickField() {
    if (first_click_field === true) {
        first = click_field_nr;
        first_id = click_field_id;
    }
    else {
        second = click_field_nr;
        second_id = click_field_id;
    }
}

function waitClick() {
    let selectors = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#ten", "#eleven", "#twelve"];
    for (let i = 0; i < selectors.length; i++) {
        document.querySelector(selectors[i]).classList.toggle("wait");
    } 
}

function isWinner() {
    if (discovered === countries.length) {
        alert("You Win!");
        first_game = false;
        startGame();
    }
}
 
function check() {
    if (first_click_field === true && second_click_field === false) {
        first_click_field = false;
        second_click_field = true;
        show();
    }
    else if (first_click_field === false && second_click_field === true) {
        show();
        if (drawn[first] === drawn[second]) {
            document.querySelector(first_id).classList.toggle("hit");
            document.querySelector(second_id).classList.toggle("hit");
            discovered++;
            document.getElementById("discovered").value = discovered;
            document.getElementById("undiscovered").value = countries.length - discovered;
            isWinner();
        }
        else {
            waitClick();
            setTimeout(hide, 1000);
        }
        first_click_field = true;
        second_click_field = false;
    }
}


document.getElementById("one").addEventListener("click", function() {
    click_field_id = "#one";
    click_field_nr = 0;
    checkClickField()
    check();
});

document.getElementById("two").addEventListener("click", function() {
    click_field_id = "#two";
    click_field_nr = 1;
    checkClickField()
    check();
});

document.getElementById("three").addEventListener("click", function() {
    click_field_id = "#three";
    click_field_nr = 2;
    checkClickField()
    check();
});

document.getElementById("four").addEventListener("click", function() {
    click_field_id = "#four";
    click_field_nr = 3;
    checkClickField()
    check();
});

document.getElementById("five").addEventListener("click", function() {
    click_field_id = "#five";
    click_field_nr = 4;
    checkClickField()
    check();
});

document.getElementById("six").addEventListener("click", function() {
    click_field_id = "#six";
    click_field_nr = 5;
    checkClickField()
    check();
});

document.getElementById("seven").addEventListener("click", function() {
    click_field_id = "#seven";
    click_field_nr = 6;
    checkClickField()
    check();
});

document.getElementById("eight").addEventListener("click", function() {
    click_field_id = "#eight";
    click_field_nr = 7;
    checkClickField()
    check();
});

document.getElementById("nine").addEventListener("click", function() {
    click_field_id = "#nine";
    click_field_nr = 8;
    checkClickField()
    check();
});

document.getElementById("ten").addEventListener("click", function() {
    click_field_id = "#ten";
    click_field_nr = 9;
    checkClickField()
    check();
});

document.getElementById("eleven").addEventListener("click", function() {
    click_field_id = "#eleven";
    click_field_nr = 10;
    checkClickField()
    check();
});

document.getElementById("twelve").addEventListener("click", function() {
    click_field_id = "#twelve";
    click_field_nr = 11;
    checkClickField()
    check();
});

startGame();

