
//Set up state variables
let gameEnded = false;
const l1Nodes = document.querySelectorAll('#l1 > div');
const l2Nodes = document.querySelectorAll('#l2 > div');
const l3Nodes = document.querySelectorAll('#l3 > div');
const l4Nodes = document.querySelectorAll('#l4 > div');
const l5Nodes = document.querySelectorAll('#l5 > div');
const l6Nodes = document.querySelectorAll('#l6 > div');
const l7Nodes = document.querySelectorAll('#l7 > div');
const l8Nodes = document.querySelectorAll('#l8 > div');
let isDead;
const laneList = [l1Nodes, l2Nodes, l3Nodes, l4Nodes, l5Nodes, l6Nodes, l7Nodes, l8Nodes];
const lane1 = document.querySelector('#l1');
const cityQuestionArea = document.querySelector('#question');
const userAnswerScreen = document.querySelector('#UI');
let userInput = [];

const bombList = [];
const bombDetails = {
    0: [{
        word: 'red',
        color: 'green',
        question: "type the color",
        answer: 'green',
    },
    {
        word: 'green',
        color: 'blue',
        question: "type the word",
        answer: 'green',
    },],

}

const timer = ms => new Promise(res => setTimeout(res, ms)); //master timer
let gameLevel = 0; // which level you're on... 0 = 1, 1 = 2...


class Bomb {
    constructor(word, color, question, answer, lane) {
        this.word = word;
        this.color = color;
        this.question = question;
        this.answer = answer;
        this.lane = lane;
        this.location = 0;
        let el = document.createElement('div');
        el.classList.add('bomb');
        el.style.color = this.color;
        el.innerText = this.word;
        this.element = el;
        this.lane[this.location].appendChild(this.element);
    }
    moveDown() {
        if (!this.element.classList.contains('.destroyed')) {
            this.location += 1;
            this.element.style.top = `${this.location/4}%`;
        }
    }
}


const controller = {
    grabUserInput: function() {
        if (bombList[0]) {
            if(userAnswerScreen.value === bombList[0].answer) {
                view.removeBomb();
                userAnswerScreen.value = "";
            }
        }
    },

    generateRandomLane: function() {
        return laneList[Math.floor(Math.random() * 8)];
    },

    getBombDeets(lev) {
        let fromBombDetails = bombDetails[lev][Math.floor(Math.random() * bombDetails[lev].length)];
        let bombIngredients = {
            word: fromBombDetails.word, //take randomly from bomb details
            color: fromBombDetails.color,
            question: fromBombDetails.question,
            answer: fromBombDetails.answer,
        }
        return bombIngredients;
    },

    generateNewBomb: function(level) {
        let bombDeets = controller.getBombDeets(level);
        let newBomb = new Bomb(bombDeets.word,bombDeets.color,bombDeets.question, bombDeets.answer, controller.generateRandomLane());
        bombList.push(newBomb);
    },

    // checkDead: function(isDead) {
    //     deadNodes.forEach(element => {
    //         if (element.children.length > 0) {
    //             gameEnded = true;
    //         }
    //     });
    // }

}

const view = {
    moveBombsDown: function() {
        bombList.forEach((bomb) => {
            bomb.moveDown()
            if (parseFloat(bomb.element.style.top) >= 79) {
                gameEnded = true;
            }
        });

    },
    removeBomb: function() {
        let bombToRemove = bombList.shift();
        bombToRemove.element.remove();
        view.showQuestion()
    },
    showQuestion: function() {
        if (bombList[0]) {
            if (bombList[0].question != cityQuestionArea.innerText) {
                cityQuestionArea.display = 'none';
                cityQuestionArea.innerText = bombList[0].question;
                cityQuestionArea.display = 'inline';
            }
        }
    }
}

// //while not lost ....
//     init(levelNum); // set up level
//     running()

//hookup UI
userAnswerScreen.addEventListener('keyup', (keyStroke) => {
    controller.grabUserInput(keyStroke);
    });
//keep focus on user screen
userAnswerScreen.addEventListener('blur', ()=> {
    userAnswerScreen.focus();
});

userAnswerScreen.focus();


let staggerBombs = 15;

function running () {
    if (!gameEnded) {
        if (staggerBombs === 25) {
            staggerBombs = 0;
            controller.generateNewBomb(gameLevel);

            if (bombList[0].question !== cityQuestionArea.innerText) {
                view.showQuestion()
            }
        }
        view.moveBombsDown();
        staggerBombs += 1
    }
    else {
        console.log("game over");
        clearInterval(intervalID);
    }

}
console.log(lane1.children.length)
// running()
var intervalID = setInterval(running, 30);