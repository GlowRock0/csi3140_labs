var active = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true
}
var diceNum = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
}
var rolls = [];


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('roll-counter').textContent = "Current Roll: " + currRoll;

    diceNum['1'] = Math.floor(Math.random() * 6) + 1;
    diceNum['2'] = Math.floor(Math.random() * 6) + 1;
    diceNum['3'] = Math.floor(Math.random() * 6) + 1;
    diceNum['4'] = Math.floor(Math.random() * 6) + 1;
    diceNum['5'] = Math.floor(Math.random() * 6) + 1;

    const dice1 = document.getElementById('dice1');
    updateDice(dice1, diceNum['1']);
    const dice2 = document.getElementById('dice2');
    updateDice(dice2, diceNum['2']);
    const dice3 = document.getElementById('dice3');
    updateDice(dice3, diceNum['3']);
    const dice4 = document.getElementById('dice4');
    updateDice(dice4, diceNum['4']);
    const dice5 = document.getElementById('dice5');
    updateDice(dice5, diceNum['5']);
    rolls = [diceNum['1'], diceNum['2'], diceNum['3'], diceNum['4'], diceNum['5']];

    document.getElementById('rollButton').addEventListener('click', function() {

        if (! noRollsLeft && ! gameOver) {

            if (active['1']) {

                diceNum['1'] = Math.floor(Math.random() * 6) + 1;
                const result1 = diceNum['1'];
                updateDice(dice1, result1);
            }
            if (active['2']) {

                diceNum['2'] = Math.floor(Math.random() * 6) + 1;
                const result2 = diceNum['2'];
                updateDice(dice2, result2);
            }
            if (active['3']) {

                diceNum['3'] = Math.floor(Math.random() * 6) + 1;
                const result3 = diceNum['3'];
                updateDice(dice3, result3);
            }
            if (active['4']) {

                diceNum['4'] = Math.floor(Math.random() * 6) + 1;
                const result4 = diceNum['4'];
                updateDice(dice4, result4);
            }
            if (active['5']) {

                diceNum['5'] = Math.floor(Math.random() * 6) + 1;
                const result5 = diceNum['5'];
                updateDice(dice5, result5);
            }
            rolls = [diceNum['1'], diceNum['2'], diceNum['3'], diceNum['4'], diceNum['5']];
        }
    });

    dice1.addEventListener('click', function() {

        if (currRoll != 0 && ! gameOver) {
            active['1'] = !active['1'];
            updateDiceActivity(dice1, active['1']);
        }
    });

    dice2.addEventListener('click', function() {

        if (currRoll != 0 && ! gameOver) {
            active['2'] = !active['2'];
            updateDiceActivity(dice2, active['2']);
        }
    });

    dice3.addEventListener('click', function() {

        if (currRoll != 0 && ! gameOver) {
            active['3'] = !active['3'];
            updateDiceActivity(dice3, active['3']);
        }
    });

    dice4.addEventListener('click', function() {

        if (currRoll != 0 && ! gameOver) {
            active['4'] = !active['4'];
            updateDiceActivity(dice4, active['4']);
        }
    });

    dice5.addEventListener('click', function() {

        if (currRoll != 0 && ! gameOver) {
            active['5'] = !active['5'];
            updateDiceActivity(dice5, active['5']);
        }
    });
});

function updateDice(dice, number) {

    while (dice.firstChild) {
        dice.removeChild(dice.firstChild);
    }

    const dotPositions = getDotPositions(number);
    for (let i = 0; i < 9; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (dotPositions.includes(i)) {
            dot.style.visibility = 'visible';
        } else {
            dot.style.visibility = 'hidden';
        }
        dice.appendChild(dot);
    }
}

function getDotPositions(number) {

    switch (number) {
        case 1:
            return [4];
        case 2:
            return [0, 8];
        case 3:
            return [0, 4, 8];
        case 4:
            return [0, 2, 6, 8];
        case 5:
            return [0, 2, 4, 6, 8];
        case 6:
            return [0, 2, 3, 5, 6, 8];
        default:
            return [];
    }
}

function updateDiceActivity(dice, isActive) {
    
    if (isActive) {
        dice.classList.remove('inactive');
        dice.classList.add('active');
    } else {
        dice.classList.remove('active');
        dice.classList.add('inactive');
    }
}