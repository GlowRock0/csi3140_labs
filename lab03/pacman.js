let score = 0;
let winFlag = false;
let loseFlag = false;
let fruitEnabled = false;
let ghostAlive = true;
let gameInitState;

function createGame(len) {
    let game = new Array(len).fill(".");
    const pacmanPosition = Math.floor(Math.random() * len);
    game[pacmanPosition] = "C";
    let ghostPosition;
    do {
        ghostPosition = Math.floor(Math.random() * len);
    } while (ghostPosition === pacmanPosition);
    game[ghostPosition] = "^";
    let fruitPosition;
    do {
        fruitPosition = Math.floor(Math.random() * len);
    } while (fruitPosition === pacmanPosition || fruitPosition === ghostPosition);
    game[fruitPosition] = "@";
    return game;
}

function createGameStart(actualGame, len) {
    let initGame = new Array(len).fill(".");
    const pacmanPosition = actualGame.indexOf("C");
    initGame[pacmanPosition] = "C";
    const ghostPosition = actualGame.indexOf("^");
    initGame[ghostPosition] = "^";
    const fruitPosition = actualGame.indexOf("@");
    initGame[fruitPosition] = "@";
    return initGame;    
}



function findPacman(game) {
    return game.indexOf("C");
}

function moveLeft(game) {
    const pacmanPos = findPacman(game);
    if (pacmanPos > 0) {
        if (game[pacmanPos - 1] === ".") {
            score++;
        } else if (game[pacmanPos - 1] === "@") {
            fruitEnabled = true;
        } else if (game[pacmanPos - 1] === "^" && fruitEnabled) {
            ghostAlive = false;
        } else if (game[pacmanPos - 1] === "^" && ! fruitEnabled) {
            loseFlag = true;
        }
        game[pacmanPos] = " ";
        game[pacmanPos - 1] = "C";
    }
    else {
        if (game[pacmanPos - 1] === ".") {
            score++;
        } else if (game[pacmanPos - 1] === "@") {
            fruitEnabled = true;
        } else if (game[pacmanPos - 1] === "^" && fruitEnabled) {
            ghostAlive = false;
        } else if (game[pacmanPos - 1] === "^" && ! fruitEnabled) {
            loseFlag = true;
        }
        game[pacmanPos] = " ";
        game[game.length - 1] = "C";
    }
    renderGame(game);
    checkFinish(game);
    return game;
}

function moveRight(game) {
    const pacmanPos = findPacman(game);
    if (pacmanPos < game.length - 1) {
        if (game[pacmanPos + 1] === ".") {
            score++;
        } else if (game[pacmanPos + 1] === "@") {
            fruitEnabled = true;
        } else if (game[pacmanPos + 1] === "^" && fruitEnabled) {
            ghostAlive = false;
        } else if (game[pacmanPos + 1] === "^" && ! fruitEnabled) {
            loseFlag = true;
        }
        game[pacmanPos] = " ";
        game[pacmanPos + 1] = "C";
    }
    else {
        if (game[pacmanPos + 1] === ".") {
            score++;
        } else if (game[pacmanPos + 1] === "@") {
            fruitEnabled = true;
        } else if (game[pacmanPos + 1] === "^" && fruitEnabled) {
            ghostAlive = false;
        } else if (game[pacmanPos + 1] === "^" && ! fruitEnabled) {
            loseFlag = true;
        }
        game[pacmanPos] = " ";
        game[0] = "C";
    }
    renderGame(game);
    checkFinish(game);
    return game;
}

function checkLevelCompletion(game) {
    return game.every(tile => tile !== ".");
}

function resetGame(game) {
    score = 0;
    return createGame(game.length);
}

function moveGhost(game) {
    if (! winFlag && ! loseFlag) {
        const ghostPos = game.indexOf("^");
        const directions = [-1, 1];
        const move = directions[Math.floor(Math.random() * directions.length)];
        newPos = ghostPos + move;
        if (newPos === game.length) {
            newPos = 0;
        } else if (newPos === -1) {
            newPos = game.length - 1;
        }
        if (ghostAlive) {
            if (game[newPos] === ".") {
                game[ghostPos] = ".";
                game[newPos] = "^";
            } else if (game[newPos] === " ") {
                game[ghostPos] = " ";
                game[newPos] = "^";
            }  else if (game[newPos] === "@") {
                game[ghostPos] = "@";
                game[newPos] = "^";
            } else if (game[newPos] === "C" && ! fruitEnabled) {
                loseFlag = true;               
            } else if (game[newPos] === "C" && fruitEnabled) {
                ghostAlive = false;
            }
        }
        checkFinish(game);
        renderGame(game);
        return game;
    }
}

function renderGame(game) {
    if (winFlag || loseFlag) {
        document.getElementById('game-board').textContent = "Game Finished";
        document.getElementById('score-board').textContent = 'Score = ' + score;
    } else {
        document.getElementById('game-board').textContent = game.join(" ");
        document.getElementById('score-board').textContent = 'Score = ' + score;
    }
}

function checkFinish(game) {
    if (! game.includes(".")) {
        game = [];
        winFlag = true;
        document.getElementById('game-board').textContent = "Game Finished";
        document.getElementById('ws-condition').textContent = "You win!";
    } else if (loseFlag) {
        loseFlag = true;
        document.getElementById('game-board').textContent = "Game Finished";
        document.getElementById('ws-condition').textContent = "You Lose! Pacman caught by ghost!";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveLeft(game);
    } else if (event.key === 'ArrowRight') {
        moveRight(game);
    }
});

setInterval(() => {
    if (!winFlag && !loseFlag) {
        moveGhost(game);
    }
}, 500);

let size = 10;
let game = createGame(size);
gameInitState = createGameStart(game, size);
renderGame(game);
