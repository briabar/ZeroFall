
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
const deadNodes = document.querySelectorAll('.dead');
const laneList = [l1Nodes, l2Nodes, l3Nodes, l4Nodes, l5Nodes, l6Nodes, l7Nodes, l8Nodes];
const lane1 = document.querySelector('#l1');
const cityQuestionArea = document.querySelector('#city');
const userAnswerScreen = document.querySelector('#UI');
let userInput = [];

const bombList = [];
const bombDetails = {
    0: [

    ],

}

const timer = ms => new Promise(res => setTimeout(res, ms)); //master timer
let gameLevel = 0; // which level you're on... 0 = 1, 1 = 2...

userAnswerScreen.addEventListener('keyup', (e)=> {
    console.log(e.code);
});
//keep focus on user screen
userAnswerScreen.addEventListener('blur', (e)=> {
    userAnswerScreen.focus();
});

userAnswerScreen.focus();



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
        this.location += 1;
        this.lane[this.location].appendChild(this.element);
    }
}


const controller = {
    generateRandomLane: function() {
        return laneList[Math.floor(Math.random() * 8)];
    },

    getBombDeets(lev) {
        let bombIngredients = {
            word: 'green', //take randomly from bomb details
            color: 'red',
            question: 'type the color',
            answer: 'red',
        }
        return bombIngredients;
    },

    generateNewBomb: function(level) {
        let bombDeets = controller.getBombDeets(level);
        let newBomb = new Bomb(bombDeets.word,bombDeets.color,bombDeets.question, bombDeets.answer, controller.generateRandomLane());
        bombList.push(newBomb);
    },

    checkDead: function() {
        deadNodes.forEach(element => {
            if (element.children.length > 0) {
                gameEnded = true;
            }
        });
    }

}

const view = {
    moveBombsDown: function() {
        bombList.forEach((bomb) => {
            bomb.moveDown()
        });

    },
}

// //while not lost ....
//     init(levelNum); // set up level
//     running()
async function running () {
    let staggerBombs = 0;
    while (!gameEnded) {
        if (staggerBombs === 60) {
            staggerBombs = 0;
            controller.generateNewBomb(gameLevel);
        }
        view.moveBombsDown();
        controller.checkDead();
        staggerBombs += 1
        await timer(50);
    }
    console.log("game over");
}
console.log(lane1.children.length)
running()