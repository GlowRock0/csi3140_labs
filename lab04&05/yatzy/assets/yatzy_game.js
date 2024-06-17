var currRoll = 0;
var noRollsLeft = false;

function countRoll() {
    setTimeout(() => {
        if (active['1'] || active['2'] || active['3'] || active['4'] || active['5']) {
            if (currRoll != 3) {
                currRoll++;
            }
            document.getElementById('roll-counter').textContent = "Current Roll: " + currRoll;
            if (currRoll == 3) {
                noRollsLeft = true;
            }
            if (!selectedScores['ones']) { calculateOnesScore(); }
            if (!selectedScores['twos']) { calculateTwosScore(); }
            if (!selectedScores['threes']) { calculateThreesScore(); }
            if (!selectedScores['fours']) { calculateFoursScore(); }
            if (!selectedScores['fives']) { calculateFivesScore(); }
            if (!selectedScores['sixes']) { calculateSixesScore(); }
            if (!selectedScores['onePair']) { calculateOnePairScore(); }
            if (!selectedScores['twoPairs']) { calculateTwoPairsScore(); }
            if (!selectedScores['threeOfAKind']) { calculateThreeOfAKindScore(); }
            if (!selectedScores['fourOfAKind']) { calculateFourOfAKindScore(); }
            if (!selectedScores['smallStraight']) { calculateSmallStraightScore(); }
            if (!selectedScores['largeStraight']) { calculateLargeStraightScore(); }
            if (!selectedScores['fullHouse']) { calculateFullHouseScore(); }
            if (!selectedScores['chance']) { calculateChanceScore(); }
            if (!selectedScores['yatzy']) { calculateYatzyScore(); }
        }
    }, 10);
}

document.getElementById('rollButton').addEventListener('click', function() {
    countRoll();
});

function calculateOnesScore() {

    let onesCount = rolls.filter(value => value === 1).length;
    scores['ones'] = onesCount * 1;
    document.getElementById('OnesID').textContent = scores['ones'];
}

function calculateTwosScore() {

    let twosCount = rolls.filter(value => value === 2).length;
    scores['twos'] = twosCount * 2;
    document.getElementById('TwosID').textContent = scores['twos'];
}

function calculateThreesScore() {

    let threesCount = rolls.filter(value => value === 3).length;
    scores['threes'] = threesCount * 3;
    document.getElementById('ThreesID').textContent = scores['threes'];
}

function calculateFoursScore() {

    let foursCount = rolls.filter(value => value === 4).length;
    scores['fours'] = foursCount * 4;
    document.getElementById('FoursID').textContent = scores['fours'];
}

function calculateFivesScore() {

    let fivesCount = rolls.filter(value => value === 5).length;
    scores['fives'] = fivesCount * 5;
    document.getElementById('FivesID').textContent = scores['fives'];
}

function calculateSixesScore() {

    let sixesCount = rolls.filter(value => value === 6).length;
    scores['sixes'] = sixesCount * 6;
    document.getElementById('SixesID').textContent = scores['sixes'];
}

function calculateOnePairScore() {
    let counts = new Array(6).fill(0);
    rolls.forEach(value => counts[value - 1]++);
    scores['onePair'] = 0;
    for (let i = 5; i >= 0; i--) {
        if (counts[i] >= 2) {
            scores['onePair'] = (i + 1) * 2;
            break;
        }
    }
    document.getElementById('OnePairID').textContent = scores['onePair'];
}

function calculateTwoPairsScore() {
    let counts = new Array(6).fill(0);
    rolls.forEach(value => counts[value - 1]++);
    let pairs = [];
    for (let i = 5; i >= 0; i--) {
        if (counts[i] >= 2) {
            pairs.push(i + 1);
            if (pairs.length === 2) break;
        }
    }
    scores['twoPairs'] = pairs.length === 2 ? pairs.reduce((acc, value) => acc + value * 2, 0) : 0;
    document.getElementById('TwoPairID').textContent = scores['twoPairs'];
}

function calculateThreeOfAKindScore() {
    let counts = new Array(6).fill(0);
    rolls.forEach(value => counts[value - 1]++);
    scores['threeOfAKind'] = 0;
    for (let i = 5; i >= 0; i--) {
        if (counts[i] >= 3) {
            scores['threeOfAKind'] = (i + 1) * 3;
            break;
        }
    }
    document.getElementById('ThreeOfAKindID').textContent = scores['threeOfAKind'];
}

function calculateFourOfAKindScore() {
    let counts = new Array(6).fill(0);
    rolls.forEach(value => counts[value - 1]++);
    scores['fourOfAKind'] = 0;
    for (let i = 5; i >= 0; i--) {
        if (counts[i] >= 4) {
            scores['fourOfAKind'] = (i + 1) * 4;
            break;
        }
    }
    document.getElementById('FourOfAKindID').textContent = scores['fourOfAKind'];
}

function calculateSmallStraightScore() {
    let smallStraight = [1, 2, 3, 4, 5];
    let isSmallStraight = smallStraight.every(value => rolls.includes(value));
    scores['smallStraight'] = isSmallStraight ? 15 : 0;
    document.getElementById('SmallStraightID').textContent = scores['smallStraight'];
}

function calculateLargeStraightScore() {
    let largeStraight = [2, 3, 4, 5, 6];
    let isLargeStraight = largeStraight.every(value => rolls.includes(value));
    scores['largeStraight'] = isLargeStraight ? 20 : 0;
    document.getElementById('LargeStraightID').textContent = scores['largeStraight'];
}

function calculateFullHouseScore() {
    let counts = new Array(6).fill(0);
    rolls.forEach(value => counts[value - 1]++);
    let hasThreeOfAKind = false;
    let hasPair = false;
    scores['fullHouse'] = 0;
    counts.forEach((count, index) => {
        if (count === 3) hasThreeOfAKind = true;
        if (count === 2) hasPair = true;
    });
    if (hasThreeOfAKind && hasPair) {
        scores['fullHouse'] = rolls.reduce((acc, value) => acc + value, 0);
    }
    document.getElementById('FullHouseID').textContent = scores['fullHouse'];
}

function calculateChanceScore() {
    scores['chance'] = rolls.reduce((acc, value) => acc + value, 0);
    document.getElementById('ChanceID').textContent = scores['chance'];
}

function calculateYatzyScore() {
    let isYatzy = rolls.every(value => value === rolls[0]);
    if (isYatzy) {
        scores['yatzy'] = 50;
    }
    document.getElementById('YatzyID').textContent = scores['yatzy'];
}
