var total = 0;
var gameOver = false;
var selectedScores = {
    ones: false,
    twos: false,
    threes: false,
    fours: false,
    fives: false,
    sixes: false,
    onePair: false,
    twoPairs: false,
    threeOfAKind: false,
    fourOfAKind: false,
    smallStraight: false,
    largeStraight: false,
    fullHouse: false,
    chance: false,
    yatzy: false
};
var scores = {
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    onePair: 0,
    twoPairs: 0,
    threeOfAKind: 0,
    fourOfAKind: 0,
    smallStraight: 0,
    largeStraight: 0,
    fullHouse: 0,
    chance: 0,
    yatzy: 0
};

document.getElementById('OnesID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['ones']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['ones'] = true;
        total += scores['ones'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('TwosID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['twos']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['twos'] = true;
        total += scores['twos'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('ThreesID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['threes']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['threes'] = true;
        total += scores['threes'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('FoursID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['fours']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['fours'] = true;
        total += scores['fours'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();

        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('FivesID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['fives']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['fives'] = true;
        total += scores['fives'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('SixesID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['sixes']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['sixes'] = true;
        total += scores['sixes'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('OnePairID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['onePair']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['onePair'] = true;
        total += scores['onePair'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('TwoPairID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['twoPairs']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['twoPairs'] = true;
        total += scores['twoPairs'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('ThreeOfAKindID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['threeOfAKind']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['threeOfAKind'] = true;
        total += scores['threeOfAKind'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('FourOfAKindID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['fourOfAKind']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['fourOfAKind'] = true;
        total += scores['fourOfAKind'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('SmallStraightID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['smallStraight']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['smallStraight'] = true;
        total += scores['smallStraight'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('LargeStraightID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['largeStraight']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['largeStraight'] = true;
        total += scores['largeStraight'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('FullHouseID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['fullHouse']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['fullHouse'] = true;
        total += scores['fullHouse'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('ChanceID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['chance']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['chance'] = true;
        total += scores['chance'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

document.getElementById('YatzyID').addEventListener('click', function() {
    
    if (currRoll != 0 && ! selectedScores['yatzy']) {

        this.classList.remove('greyed-out');
        this.classList.add('score');
        selectedScores['yatzy'] = true;
        total += scores['yatzy'];
        resetTurn();
        resetCardOnNewTurn();
        checkIfGameFinished();
    }
});

function resetTurn() {

    active['1'] = true;
    active['2'] = true;
    active['3'] = true;
    active['4'] = true;
    active['5'] = true;
    updateDiceActivity(dice1, active['1']);
    updateDiceActivity(dice2, active['2']);
    updateDiceActivity(dice3, active['3']);
    updateDiceActivity(dice4, active['4']);
    updateDiceActivity(dice5, active['5']);
    currRoll = 0;
    noRollsLeft = false;
    document.getElementById('roll-counter').textContent = "Current Roll: " + currRoll;
}

function resetCardOnNewTurn() {
    if (!selectedScores['ones']) { document.getElementById('OnesID').textContent = ""; }
    if (!selectedScores['twos']) { document.getElementById('TwosID').textContent = ""; }
    if (!selectedScores['threes']) { document.getElementById('ThreesID').textContent = ""; }
    if (!selectedScores['fours']) { document.getElementById('FoursID').textContent = ""; }
    if (!selectedScores['fives']) { document.getElementById('FivesID').textContent = ""; }
    if (!selectedScores['sixes']) { document.getElementById('SixesID').textContent = ""; }
    if (!selectedScores['onePair']) { document.getElementById('OnePairID').textContent = ""; }
    if (!selectedScores['twoPairs']) { document.getElementById('TwoPairID').textContent = ""; }
    if (!selectedScores['threeOfAKind']) { document.getElementById('ThreeOfAKindID').textContent = ""; }
    if (!selectedScores['fourOfAKind']) { document.getElementById('FourOfAKindID').textContent = ""; }
    if (!selectedScores['smallStraight']) { document.getElementById('SmallStraightID').textContent = ""; }
    if (!selectedScores['largeStraight']) { document.getElementById('LargeStraightID').textContent = ""; }
    if (!selectedScores['fullHouse']) { document.getElementById('FullHouseID').textContent = ""; }
    if (!selectedScores['chance']) { document.getElementById('ChanceID').textContent = ""; }
    if (!selectedScores['yatzy']) { document.getElementById('YatzyID').textContent = ""; }
}

function calculateBonus() {
    let upperBonus = scores['ones'] + scores['twos'] + scores['threes'] + scores['fours'] + scores['fives'] + scores['sixes'];
    document.getElementById('SumID').textContent = upperBonus;      //currently the sum of the upper section
    upperBonus = upperBonus >= 63 ? 50 : 0;                         
    document.getElementById('BonusID').textContent = upperBonus;    //now the bonus for the upper section
    return upperBonus; 
}

function checkIfGameFinished() {
    if (selectedScores['ones'] && selectedScores['twos'] && selectedScores['threes'] &&
        selectedScores['fours'] && selectedScores['fives'] && selectedScores['sixes'] &&
        selectedScores['onePair'] && selectedScores['twoPairs'] && selectedScores['threeOfAKind'] &&
        selectedScores['fourOfAKind'] && selectedScores['smallStraight'] && selectedScores['largeStraight'] &&
        selectedScores['fullHouse'] && selectedScores['chance'] && selectedScores['yatzy']) {

            gameOver = true;
            total += calculateBonus();
            document.getElementById('TotalID').textContent = total;

            document.getElementById('gameOver').style.visibility = 'visible';
            document.getElementById('gameOver').textContent = "Game Over! Your total score is: " + total;
            document.getElementById('restartGame').style.visibility = 'visible';
    }
}


document.getElementById('restartGame').addEventListener('click', function() {
    if (gameOver) {
        document.getElementById('gameOver').style.visibility = 'hidden';
        document.getElementById('restartGame').style.visibility = 'hidden';
        total = 0;

        for (let key in selectedScores) {               //reset selectedScores
            if (selectedScores.hasOwnProperty(key)) {
                selectedScores[key] = false;
            }
        }

        for (let key in scores) {                       //reset scores
            if (scores.hasOwnProperty(key)) {
                scores[key] = 0;
            }
        }

        resetTurn();
        
        //reset display
        document.getElementById('OnesID').classList.add('greyed-out');
        document.getElementById('OnesID').classList.remove('score');
        document.getElementById('OnesID').textContent = "";

        document.getElementById('TwosID').classList.add('greyed-out');
        document.getElementById('TwosID').classList.remove('score');
        document.getElementById('TwosID').textContent = "";

        document.getElementById('ThreesID').classList.add('greyed-out');
        document.getElementById('ThreesID').classList.remove('score');
        document.getElementById('ThreesID').textContent = "";

        document.getElementById('FoursID').classList.add('greyed-out');
        document.getElementById('FoursID').classList.remove('score');
        document.getElementById('FoursID').textContent = "";

        document.getElementById('FivesID').classList.add('greyed-out');
        document.getElementById('FivesID').classList.remove('score');
        document.getElementById('FivesID').textContent = "";

        document.getElementById('SixesID').classList.add('greyed-out');
        document.getElementById('SixesID').classList.remove('score');
        document.getElementById('SixesID').textContent = "";

        document.getElementById('SumID').textContent = "";
        document.getElementById('BonusID').textContent = "";

        document.getElementById('OnePairID').classList.add('greyed-out');
        document.getElementById('OnePairID').classList.remove('score');
        document.getElementById('OnePairID').textContent = "";

        document.getElementById('TwoPairID').classList.add('greyed-out');
        document.getElementById('TwoPairID').classList.remove('score');
        document.getElementById('TwoPairID').textContent = "";

        document.getElementById('ThreeOfAKindID').classList.add('greyed-out');
        document.getElementById('ThreeOfAKindID').classList.remove('score');
        document.getElementById('ThreeOfAKindID').textContent = "";

        document.getElementById('FourOfAKindID').classList.add('greyed-out');
        document.getElementById('FourOfAKindID').classList.remove('score');
        document.getElementById('FourOfAKindID').textContent = "";

        document.getElementById('SmallStraightID').classList.add('greyed-out');
        document.getElementById('SmallStraightID').classList.remove('score');
        document.getElementById('SmallStraightID').textContent = "";

        document.getElementById('LargeStraightID').classList.add('greyed-out');
        document.getElementById('LargeStraightID').classList.remove('score');
        document.getElementById('LargeStraightID').textContent = "";

        document.getElementById('FullHouseID').classList.add('greyed-out');
        document.getElementById('FullHouseID').classList.remove('score');
        document.getElementById('FullHouseID').textContent = "";

        document.getElementById('ChanceID').classList.add('greyed-out');
        document.getElementById('ChanceID').classList.remove('score');
        document.getElementById('ChanceID').textContent = "";

        document.getElementById('YatzyID').classList.add('greyed-out');
        document.getElementById('YatzyID').classList.remove('score');
        document.getElementById('YatzyID').textContent = "";

        document.getElementById('TotalID').textContent = "";

        gameOver = false;
    }
});