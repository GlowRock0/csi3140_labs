let score = 0;
let size = 20;
let level = 1;
let levelCount = 5;
let ghostSpeed = 200;
let games = [];
let currGame;
let winFlag = false;
let loseFlag = false;
let fruitEnabled = false;
let ghostAlive = true;
let lockMovement = false;
let prev;


function createGame(len) {
    let currGame = new Array(len).fill(".");
    const pacmanPosition = Math.floor(Math.random() * len);
    currGame[pacmanPosition] = "C";
    let ghostPosition;
    do {
        ghostPosition = Math.floor(Math.random() * len);
    } while (ghostPosition === pacmanPosition);
    currGame[ghostPosition] = "^";
    prev = ".";
    let fruitPosition;
    do {
        fruitPosition = Math.floor(Math.random() * len);
    } while (fruitPosition === pacmanPosition || fruitPosition === ghostPosition);
    currGame[fruitPosition] = "@";

    document.getElementById("level-card").textContent = "Level: " + level;
    return currGame;
}

document.addEventListener('keydown', function(event) {
    if (!lockMovement && level <= levelCount) {
        currGame = games[level - 1];
        if (event.key === 'ArrowLeft') {
            moveLeft(currGame);
        } else if (event.key === 'ArrowRight') {
            moveRight(currGame);
        }
    }
});

function moveLeft(currGame) {
    const pacmanPos = currGame.indexOf("C");
    if (pacmanPos > 0) {
        if (currGame[pacmanPos - 1] === ".") {
            score++;
        } else if (currGame[pacmanPos - 1] === "@") {
            fruitEnabled = true;
        } else if (currGame[pacmanPos - 1] === "^" && fruitEnabled) {
            ghostAlive = false;
        } else if (currGame[pacmanPos - 1] === "^" && ! fruitEnabled) {
            loseFlag = true;
        }
        currGame[pacmanPos] = " ";
        currGame[pacmanPos - 1] = "C";
    }
    else {
        if (currGame[pacmanPos - 1] === ".") {
            score++;
        } else if (currGame[pacmanPos - 1] === "@") {
            fruitEnabled = true;
        } else if (currGame[pacmanPos - 1] === "^" && fruitEnabled) {
            ghostAlive = false;
        } else if (currGame[pacmanPos - 1] === "^" && ! fruitEnabled) {
            loseFlag = true;
        }
        currGame[pacmanPos] = " ";
        currGame[currGame.length - 1] = "C";
    }
    renderGame(currGame);
    checkFinish(currGame);
    return currGame;
}

function moveRight(currGame) {
    const pacmanPos = currGame.indexOf("C");
    if (pacmanPos < currGame.length - 1) {
        if (currGame[pacmanPos + 1] === ".") {
            score++;
        } else if (currGame[pacmanPos + 1] === "@") {
            fruitEnabled = true;
        } else if (currGame[pacmanPos + 1] === "^" && fruitEnabled) {
            ghostAlive = false;
        } else if (currGame[pacmanPos + 1] === "^" && ! fruitEnabled) {
            loseFlag = true;
        }
        currGame[pacmanPos] = " ";
        currGame[pacmanPos + 1] = "C";
    }
    else {
        if (currGame[pacmanPos + 1] === ".") {
            score++;
        } else if (currGame[pacmanPos + 1] === "@") {
            fruitEnabled = true;
        } else if (currGame[pacmanPos + 1] === "^" && fruitEnabled) {
            ghostAlive = false;
        } else if (currGame[pacmanPos + 1] === "^" && ! fruitEnabled) {
            loseFlag = true;
        }
        currGame[pacmanPos] = " ";
        currGame[0] = "C";
    }
    renderGame(currGame);
    checkFinish(currGame);
    return currGame;
}

setInterval(() => {
    if (!winFlag && !loseFlag) {
        moveGhost();
    }
}, ghostSpeed);

function moveGhost() {
    if (level <= levelCount && ! lockMovement) {
        currGame = games[level - 1];
        if (! winFlag && ! loseFlag) {
            const ghostPos = currGame.indexOf("^");
            const moveTowardsPacman = Math.random() < 0.65;
            if (ghostPos < currGame.indexOf("C")) {
                if (fruitEnabled) {
                    move = moveTowardsPacman ? -1 : 1;
                } else {
                    move = moveTowardsPacman ? 1 : -1;
                }
              } else if (ghostPos > currGame.indexOf("C")) {
                if (fruitEnabled) {
                    move = moveTowardsPacman ? 1 : -1;
                } else {
                    move = moveTowardsPacman ? -1 : 1;
                }
              } else {
                move = directions[Math.floor(Math.random() * directions.length)];
            }
            newPos = ghostPos + move;
            if (newPos === currGame.length) {
                newPos = 0;
            } else if (newPos === -1) {
                newPos = currGame.length - 1;
            }
            if (ghostAlive) {
                if (currGame[newPos] === ".") {
                    currGame[ghostPos] = prev;
                    currGame[newPos] = "^";
                    prev = ".";
                } else if (currGame[newPos] === " ") {
                    currGame[ghostPos] = prev;
                    currGame[newPos] = "^";
                    prev = " ";
                }  else if (currGame[newPos] === "@") {
                    currGame[ghostPos] = prev;
                    currGame[newPos] = "^";
                    prev = "@";
                } else if (currGame[newPos] === "C" && ! fruitEnabled) {
                    loseFlag = true;            
                } else if (currGame[newPos] === "C" && fruitEnabled) {
                    ghostAlive = false;
                    currGame[ghostPos] = prev;
                    currGame[newPos] = "C";
                }
            }
            checkFinish(currGame);
            renderGame(currGame);
            return currGame;
        }
    }
}

function renderGame(currGame) {
    if (! loseFlag && level <= levelCount) {
        document.getElementById('game-board').textContent = currGame.join(" ");
        document.getElementById('score-board').textContent = 'Score = ' + score;
    }
}

function checkFinish(currGame) {
    if (level <= levelCount) {
        if (! currGame.includes(".")) {
            currGame = [];
            winFlag = true;
        }
    } else {
        lockMovement = true;
        level = levelCount;
        document.getElementById('game-board').textContent = "Game Finished";
        document.getElementById('ws-condition').textContent = "You win!";
        document.getElementById('score-board').textContent = 'Score = ' + score;
        document.getElementById("level-card").textContent = "Level: " + level;
        level = levelCount + 1;
    }
    if (winFlag || loseFlag) {
        if (loseFlag) {
            currGame = [];
            document.getElementById('game-board').textContent = "Game Finished";
            document.getElementById('ws-condition').textContent = "You Lose! Pacman caught by ghost!";
            document.getElementById("level-card").textContent = "Level: " + level;
        } else if (level <= levelCount && winFlag) {
            lockMovement = true;
            document.getElementById('ws-condition').textContent = "Level: " + level + " COMPLETE!";
            level++;
            document.getElementById("level-card").textContent = "Level: " + level;
            currGame = [];
            currGame = games[level - 1];
            prev = ".";
            winFlag = false;
            loseFlag = false;
            fruitEnabled = false;
            ghostAlive = true;
            renderGame(currGame);
            checkFinish(currGame);
            lockMovement = false;
        }
    } 
}

for (i = 0; i < levelCount; i++) {
    games[i] = createGame(size);
}
currGame = games[0];
renderGame(currGame);
