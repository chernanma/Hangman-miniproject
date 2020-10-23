const Letter = require("./letter.js");

class Word {
    constructor(wordLettArray) {
    this.wordLettArray = wordLettArray;
    this.checkWordLettArray = [];
    }
    buildword(){
        for (let i=0;i<this.wordLettArray.length;i++){
            let lett = new Letter(this.wordLettArray[i]);
            this.checkWordLettArray.push(lett);
        }
    }

    displayWord(){
        let worldDisplay = [];
        for (let i=0;i<this.checkWordLettArray.length;i++){
            worldDisplay.push(this.checkWordLettArray[i].display());
        }
        console.log(worldDisplay);
        return worldDisplay.join(" ");
        
    }
    checkGuess (userGuess) {
        for (let i=0; i<this.checkWordLettArray.length; i++) {
            this.checkWordLettArray[i].checkMatch(userGuess);
        }
    }
}

module.exports = Word;