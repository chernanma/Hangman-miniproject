class Letter {

    constructor (undcharacter) {
    this.undcharacter = undcharacter;
    this.guessed = false;
    }
    display () {
        if (this.undcharacter===" "){
            return " ";
        }
        if (this.guessed){
            return this.undcharacter;
        }
        else{
           return "_"; 
        }        
    }
    checkMatch (userInput) {
        if (userInput === this.undcharacter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;