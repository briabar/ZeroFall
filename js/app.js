//Set up state variables first
wordList = [ 
    //super long list of words for bombFunctions
    "the", "and", "to", "of", "a", "in", "is", "that", "for", "you", 
    "it", "with", "on", "as", "are", "be", "this", "was", "have", "or", 
    "at", "not", "your", "from", "we", "by", "will", "can", "but", "they",
     "an", "he", "all", "has", "if", "their", "one", "do", "more", "nt", 
     "my", "his", "so", "there", "about", "which", "when", "what", "out", 
     "up", "our", "who", "also", "had", "time", "some", "would", "were", 
     "like", "been", "just", "her", "new", "other", "them", "she", "people", 
     "these", "no", "get", "how", "me", "into", "than", "only", "its", 
     "most", "may", "any", "many", "make", "then", "well", "first", "very", 
     "over", "now", "could", "after", "even", "because", "us", "said", 
     "good", "way", "two", "should", "work", "use", "through", "see", 
     "know", "did", "much", "where", "years", "need", "him", "back", 
     "such", "those", "being", "day", "take", "while", "here", "before", 
     "does", "great", "year", "go", "help", "want", "really", "think", 
     "best", "life", "each", "made", "right", "world", "business", "home", 
     "own", "down", "still", "used", "find", "around", "going", "every", 
     "both", "last", "off", "too", "same", "information", "little", "another", 
     "look", "few", "long", "part", "since", "things", "place", "am", 
     "between", "during", "different", "must", "come", "using", "however", 
     "without", "high", "why", "something", "online", "system", "better", 
     "three", "never", "always", "love", "say", "might", "next", "company", 
     "state", "number", "again", "free", "lot", "under", "family", "found", 
     "within", "give", "set", "school", "important", "water", "able", "keep", 
     "got", "sure", "end", "money", "service", "small", "put", "experience", 
     "having", "once", "available", "health", "support", "often", "including", 
     "days", "away", "old", "area", "feel", "read", "show", "big", "against", 
     "thing", "order", "program", "though", "city", "group", "services", 
     "site", "making", "course", "point", "children", "times", "team", 
     "game", "along", "let", "house", "today", "body", "working", "case", 
     "man", "real", "provide", "care", "public", "top", "looking", "several", 
     "start", "less", "process", "become", "actually", "local", "together", 
     "person", "change", "book", "enough", "getting", "week", "power", 
     "until", "market", "fact", "god", "food", "students", "full", "women", 
     "community", "name", "second", "data", "government", "says", "others", 
     "ever", "yet", "research", "done", "left", "far", "large", "called", 
     "doing", "already", "development", "social", "open", "possible", "side", 
     "play", "means", "needs", "try", "came", "ca", "based", "hard", 
     "thought", "products", "national", "quality", "level", "live", "design", 
     "makes", "project", "line", "night", "least", "whether", "job", "car", 
     "example", "include", "following", "given", "website", "past", "plan", 
     "offer", "buy", "call", "went", "simply", "hand", "music", "easy", 
     "problem", "men", "country", "took", "four", "members", "form", "personal", "control", "energy", "room", "head", "pay", "create", "run", "kind", "credit", "almost", "believe", "quite", "mind", "law", "early", "comes", "states", "usually", "companies", "web", "taking", "started", "later", "although", "story", "per", "future", "known", "someone", "across", "rather", "young", "whole", "special", "everything", "months", "anything", "training", "url", "bit", "seen", "product", "american", "please", "management", "cost", "either", "light", "university", "face", "due", "nothing", "human", "event", "history", "probably", "friends", "learn", "current", "tell", "general", "price", "list", "type", "building", "industry", "bad", "check", "everyone", "office", "idea", "internet", "news", "million", "video", "among", "air", "especially", "told", "results", "post", "hours", "international", "center", "understand", "above", "addition", "major", "education", "white", "particular", "problems", "media", "according", "upon", "page", "continue", "black", "study", "issues", "inside", "technology", "five", "value", "further", "access", "reason", "short", "true", "simple", "natural", "amount", "search", "result", "taken", "main", "heart", "space", "financial", "ago", "trying", "question", "living", "likely", "interest", "various", "insurance", "common", "move", "child", "yourself", "report", "certain", "share", "single", "close", "instead", "bring", "works", "age", "s", "season", "hope", "coming", "areas", "ask", "medical", "low", "games", "turn", "key", "party", "add", "month", "seems", "view", "fun", "matter", "words", "needed"];
// list of colors for bombFunctions()
colorList = [
    'green', 'red', 'blue', 'yellow', 'black', 'orange', 'pink', 'purple'
];

//set up elements
const l1Nodes = document.querySelectorAll('#l1 > div');
const l2Nodes = document.querySelectorAll('#l2 > div');
const l3Nodes = document.querySelectorAll('#l3 > div');
const l4Nodes = document.querySelectorAll('#l4 > div');
const l5Nodes = document.querySelectorAll('#l5 > div');
const l6Nodes = document.querySelectorAll('#l6 > div');
const l7Nodes = document.querySelectorAll('#l7 > div');
const l8Nodes = document.querySelectorAll('#l8 > div');
const laneList = [l1Nodes, l2Nodes, l3Nodes, l4Nodes, l5Nodes, l6Nodes, l7Nodes, l8Nodes];
const body = document.querySelector('body');
const lane1 = document.querySelector('#l1');
const cityQuestionArea = document.querySelector('#question');
const userAnswerScreen = document.querySelector('#UI');
const backCity = document.querySelector('#backcity');
const spaceBarEl = document.createElement('div');
const scoreBoard = document.querySelector('#score');


//set up audio stuff
const bombLaunchSound = [new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav'), 
    new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav'), new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav'),
    new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav'), new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav'), 
    new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav'), new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav'),  
    new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav'), new Audio('https://briabar.github.io/ZeroFall/static/newbomb.wav')
    ];
const introLoop = new Audio('https://briabar.github.io/ZeroFall/static/introloop.wav');
const mainLoop = new Audio('https://briabar.github.io/ZeroFall/static/mainloop.wav');
//this solution to this lag when looping audio was found on stackoverflow
introLoop.addEventListener('timeupdate', function() {
    let delay = .30;
    if(this.currentTime > this.duration - delay) {
        this.currentTime = 0;
        mainLoop.play();
        this.pause()
    }
});
mainLoop.addEventListener('timeupdate', function() {
    let delay = .35;
    if(this.currentTime > this.duration - delay) {
        this.currentTime = 0;
        this.play();
    }
});

//setup start menu
spaceBarEl.innerText = "HIT SPACEBAR TO START";
spaceBarEl.style.position = 'fixed';
spaceBarEl.style.top = '30%';
spaceBarEl.style.fontSize = '2.5em';
spaceBarEl.style.width = '100%';
spaceBarEl.style.textAlign = 'center';
spaceBarEl.style.fontFamily = 'cursive';
spaceBarEl.style.color = 'white';
body.appendChild(spaceBarEl);

//utility variables and misc.
const timer = ms =>         //master timer
    new Promise(
    res => 
    setTimeout(res, ms));
const delay = ms => new Promise(res => setTimeout(res, ms));
let gameEnded = false;      //died?
let numberOfBombs = 10;     //how many successes before win condition
const startSpeed = 80;      //initial speed
const speedLimit = 45;
let staggerBombs = 15;      //space out bombs on screen
let speed = startSpeed;     //variable speed for level up
let bombList = [];          //new bombs are pushed to this list
let gameLevel = 0;          //which level you're on... 0 = L1, 1 = L2...
const maxLevel = 3;         //change this to limit the level
let speedReductionAmt = 5;  //how much more difficult is each level? should not exceed maximum number of functions in bombFunctions
let score = 0;              //for top right scoreboard

const bombFunctions = [
    //array of functions for creating bombs, used by bombDetails
    () => { 
        // regular words
        let randWord = wordList[Math.floor(Math.random() * (wordList.length))];
        return {
            word: randWord,
            color: colorList[Math.floor(Math.random() * (colorList.length))],
            question: "Type the word",
            answer: randWord,
            click: false,
        }
    },
    () => { 
        //color mixups
        let randColor = colorList[Math.floor(Math.random() * (colorList.length))];
        let randChoice = Math.floor(Math.random() * 2);
        if (randChoice === 0) {
            return {
                word: colorList[Math.floor(Math.random() * (colorList.length))],
                color: randColor,
                question: "Type the color",
                answer: randColor,
                click: false,
            }
        }
        else {
            return {
                word: randColor,
                color: colorList[Math.floor(Math.random() * (colorList.length))],
                question: "Type the word",
                answer: randColor,
                click: false,
            }
        }
    },
    () => {
        //clickables
        return {
            word: "Click Me!",
            color: colorList[Math.floor(Math.random() * (colorList.length))],
            question: "Click it!",
            answer: undefined,
            click: true,
        }
    },
    () => { //math
        let randChoice = Math.floor(Math.random() * 3);
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        console.log(randChoice, gameLevel);
        if (randChoice === 0) {
            //add
            return {
                word: `${x} PLUS ${y}`,
                color: colorList[Math.floor(Math.random() * (colorList.length))],
                question: 'Do math!',
                answer: `${x + y}`,
                click: false,
            }
        }
        else if(randChoice === 1) {
            return {
                //sub
                word: `${x} MINUS ${y}`,
                color: colorList[Math.floor(Math.random() * (colorList.length))],
                question: 'Do math!',
                answer: `${x - y}`,
                click: false,
            }
        }
        else if (randChoice === 2) {
            //mult
            return {
                word: `${x} TIMES ${y}`,
                color: colorList[Math.floor(Math.random() * (colorList.length))],
                question: 'Do math!',
                answer: `${x * y}`,
                click: false,
            }
        }
    },
]

const bombDetails = function(level) {
    //limit the level
    if (level > maxLevel) {level = maxLevel}
    //get bombs from bombFunctions and return to controller.genereateNewBomb
    let funcIndex = Math.floor(Math.random() * (level + 1));
    //lower the odds of getting a clickable 1/3
    if (funcIndex === 2) {
        let lowerTheOdds = Math.floor(Math.random() * 2);
        if (lowerTheOdds === 0) {
        }
        else {
            funcIndex -= 1;
        }
    }
    return bombFunctions[funcIndex]();
}

class Bomb {
    // bomb class template
    constructor(word, color, question, answer, click, lane) {
        this.word = word;
        this.color = color;
        this.question = question;
        this.answer = answer;
        this.click = click;
        this.lane = lane;
        this.location = 0;
        this.flutter = 0;
        let el = document.createElement('div');
        el.classList.add('bomb');
        el.style.color = this.color;
        el.innerText = this.word;
        this.element = el;
        this.offset = 0;
        this.lane[this.location].appendChild(this.element);
        if (this.click === true) {
            this.element.addEventListener('click', () => {
                if (this.element === bombList[0].element) {
                    view.removeBomb();
                    userAnswerScreen.focus();
                }
            });
        }
    }
    moveDown() { 
            //this is called in main running() function from a list of bombs each turn
            this.location += 1;
            this.element.style.top = `${this.location/4}%`;
        if (this.offset === 0) {
            this.offset = parseInt(this.element.offsetLeft);
        }
        if (this.flutter < 10) {
            this.flutter += 1;
            this.offset += .3;
            this.element.style.left = `${this.offset}px`;
        }
        else if (this.flutter >= 10 && this.flutter < 20) {
            this.flutter += 1;
            this.offset -= .3;
            this.element.style.left = `${this.offset}px`;
        }
        else {
            this.flutter = 0;
        }
    }
}

//keep controller functions in object...
const controller = {
    grabUserInput: function(keyStroke) { 
        //set up text input
        if (bombList[0]) {
            if(userAnswerScreen.value === bombList[0].answer) {
                view.removeBomb();
                userAnswerScreen.value = "";
            }

        }
        if (spaceBarEl.style.display !== 'none') { 
            //make start screen work
            if (keyStroke.code === 'Space') {
                view.toggleSpaceBar(false);
                scoreBoard.textContent = 0;
                userAnswerScreen.value = '';
                mainLoop.currentTime = 0;
                introLoop.currentTime = 0;
                introLoop.play();
                view.toggleFire(false)
            }
        }
    },

    generateRandomLane: function() { 
        //generate random lane to put bomb in, used in generateNewBomb()
        return laneList[Math.floor(Math.random() * 8)];
    },

    generateNewBomb: function(level) {
        //create new bomb and 
        let fromBombDetails = bombDetails(level);
        let bombDeets = {
            word: fromBombDetails.word,
            color: fromBombDetails.color,
            question: fromBombDetails.question,
            answer: fromBombDetails.answer,
            click: fromBombDetails.click,
        }
        let newBomb = new Bomb(bombDeets.word,bombDeets.color,bombDeets.question, bombDeets.answer, bombDeets.click, controller.generateRandomLane());
        bombList.push(newBomb);
        view.playBombSound();
    },

    increaseBombNumber: function(increaseNum) {
        numberOfBombs += increaseNum;
    },

    nextLevel: function() { 
        //increase level
        view.clearBombs();
        view.clearScreen();
        gameLevel += 1;
        if (gameLevel > maxLevel) {gameLevel = maxLevel};
        if (speed > speedLimit) {
            speed -= speedReductionAmt;
        }
        controller.increaseBombNumber(10);
        clearInterval(intervalID);
        intervalID = setInterval(running, speed);

    },
}

//put view into object...
const view = {
    clearBombs: function() { 
        //erase all bombs from screen
        bombList.forEach((bombToRemove) => {
            let x = bombToRemove.element.style.top;
            let y = bombToRemove.element.style.left;
            let w = window.getComputedStyle(bombToRemove.element).width;
            view.makeExplosion(x, y, w);
            bombToRemove.element.remove();
        });
        bombList = [];
    },

    clearScreen: function() { 
        //clear the UI
        userAnswerScreen.value = '';
        cityQuestionArea.innerText = '';
    },

    moveBombsDown: function() { 
        //lower each bomb each turn
        bombList.forEach((bomb) => {
            bomb.moveDown()
            //end the game
            if (parseFloat(bomb.element.style.top) >= 79) {
                gameEnded = true;
            }
        });

    },
    removeBomb: function() {
        //remove bomb from UI
        let bombToRemove = bombList.shift();
        let x = bombToRemove.element.style.top;
        let y = bombToRemove.element.style.left;
        let w = window.getComputedStyle(bombToRemove.element).width;
        view.makeExplosion(x, y, w);
        bombToRemove.element.remove();
        numberOfBombs -= 1;
        cityQuestionArea.style.fontSize = '48px';
        score += 1;
        scoreBoard.textContent = score;
        view.showQuestion()
    },
    showQuestion: function() {
        //get question from bomb and display on UI
        if (bombList[0]) {
            if (bombList[0].question !== cityQuestionArea.innerText) {
                cityQuestionArea.display = 'none';
                cityQuestionArea.innerText = bombList[0].question;
                cityQuestionArea.display = 'inline';
            }
        }
    },

    makeFlash: function() {
        //make lowest bomb flash
        if (bombList[0]) {
            let bombFontSize = parseInt(window.getComputedStyle(bombList[0].element).fontSize);
            if(bombFontSize <  26) {
                bombList[0].element.style.fontSize = `${bombFontSize + 2}px`;
            }
            if (bombList[0].element.style.borderColor !== 'yellow') {
            bombList[0].element.style.borderColor = 'yellow';
            }
            else {
                bombList[0].element.style.borderColor = 'black';
            }
        }

    },
    playBombSound: function () {
        //play a bomb sound
        let soundObj = bombLaunchSound.shift();
        soundObj.play();
        bombLaunchSound.push(soundObj);
    },
    toggleFire: function(hasFire) {
        //burn it all down
        if (hasFire) {
            backCity.style.background = 'url("https://briabar.github.io/ZeroFall/static/fire.gif")';
            backCity.style.backgroundSize = 'contain';
        }
        else {
            backCity.style.background = 'none';
        }
    },
    toggleSpaceBar: function(isVisible) {
        if (isVisible) {
            spaceBarEl.style.display = 'block';
        }
        else {
            spaceBarEl.style.display = 'none';
        }
    },
    uxShrinker: function () {
        let uxFontSize = parseInt(window.getComputedStyle(cityQuestionArea).fontSize);
        if (uxFontSize > 23) {
            uxFontSize -= .1;
            cityQuestionArea.style.fontSize = `${uxFontSize}px`

        }
    },
    makeExplosion: function(top, left, w) {
        let el = document.createElement('img');
        body.appendChild(el);
        el.style.position = 'absolute';
        el.style.display = 'none';
        el.style.left = left;
        el.style.top = top;
        el.style.height = w;
        el.style.width = w;
        el.style.display = 'block';
        el.src = '';
        el.src = 'static/explosion.gif?'+new Date().getTime();
        // explosion.remove();
    }
}


userAnswerScreen.focus();
//hookup UI
userAnswerScreen.addEventListener('keyup', (keyStroke) => {
    controller.grabUserInput(keyStroke);
    });
//keep focus on user screen
userAnswerScreen.addEventListener('blur', ()=> {
    userAnswerScreen.focus();
    });


function running () {
    // this is the main program loop
    if (!gameEnded) {
        if (numberOfBombs >= 1) {
            if (spaceBarEl.style.display === 'none') {
                if (staggerBombs === 25) {
                    let oldExplosions = document.querySelectorAll('img');
                    oldExplosions.forEach(el => {
                        el.remove();
                    });
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
                //do nothing
            }
        }
        else {
            controller.nextLevel()
        }
    }
    else {
        mainLoop.pause();
        view.playBombSound();
        view.toggleSpaceBar(true);
        view.toggleFire(true);
        view.clearBombs();
        view.clearScreen();
        clearInterval(intervalID);
        speed = startSpeed;
        intervalID = setInterval(running, speed);
        gameEnded = false;
    }

}

// game starts here
let intervalID = setInterval(running, speed);
const flash = setInterval(view.makeFlash, 500);
const uxShrink = setInterval(view.uxShrinker, 100);