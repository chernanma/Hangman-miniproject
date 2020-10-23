const Word = require("./word.js");
const inquirer = require('inquirer');
const colors = require('colors');

const wordList = ["UNITED STATES", "PUERTO RICO", "MEXICO", "CANADA", "ECUADOR", "COLOMBIA", "FRANCE", "ITALI"];
let randWord = "";
let randomnumber = 0;
let storedWord = "";
let counter = 0;


function randomWord(){
    randomnumber= Math.floor(Math.random()*wordList.length);
    randWord= wordList[randomnumber];
    storedWord= new Word(randWord);
    storedWord.buildword();

}

function userInput(){


}
function startGame() {
    randomWord();
    console.log("\nYou get 10 letter guesses to find the country name.\n")
    promptUser();
}

function promptUser() {
    if (counter<10) {
        console.log(storedWord.displayWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "\nEnter a letter and press enter. "
            }
        ]).then(function(input) {
                console.log(input);
                checkAnswer(input);
        });
    }
    else{
        console.log("\nSorry, you're out of guesses.\n");
        console.log(randWord);
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        keepPlaying();
    }
}

function checkAnswer(input) {
    if ((input.letter.length === 1) && /^[a-zA-Z]+$/.test(input.letter)) {
        var lettertocheck = input.letter.toUpperCase();
        var temp = storedWord.displayWord();
        console.log(temp);
        storedWord.checkGuess(lettertocheck);
        if (temp === storedWord.displayWord()) {
            console.log("\nWrong letter!\n");
            counter++;
            console.log(((10 - counter) + " guesses remaining"));
            promptUser();
        }
        else {
            rightGuess();
        }
    }
    else {
        console.log("\nPlease enter a letter, one at a time.\n".yellow);
        promptUser();
    }
}

function rightGuess() {
    console.log("\nYou guessed correctly.\n");
    if (randWord.replace(/ /g,"") == (storedWord.displayWord()).replace(/ /g,"")) {
        console.log(storedWord.displayWord());
        console.log('\nYou won!!\n');
        radonWord = "";
        storedWord = "";
        randomnumber = 0;
        counter = 0;
        keepPlaying();      
    }
    else {
        promptUser();
    }
}

function keepPlaying(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "confirm",
            message: "\nWould you like to play again ?"

        }
    ]).then(function(input) {        
            if (input.confirm===false){
                console.log("entro");
                return;

            }else{
                startGame();
                
            }
    });

} 
startGame();