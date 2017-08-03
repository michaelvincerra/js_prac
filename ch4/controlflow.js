/**
 * Created by michaelevan on 8/1/17.
 */



'use strict';

//returns a random integer in th range[m,n] (inclusive)
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

//randomly returns a string representing on of the six Crown and Anchor faces.
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
}


let funds = 50;  // start conditions of Thomas the sailor with 50 pence.
let round = 0;

while (funds > 1 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`)
    // place bets

    let bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};

    let totalBet = rand(1, funds);

    switch(totalBet) {
        case 7:
            totalBet = funds;
            break;
        // case 11:   // fall-through execution: if under two test cases, the result is the same, you may stack them.
        // case 13:
        //     totalBet = 0;
        //     break;
        case 13:
            funds = funds - 1;    // If using a fall-through execution, ALWAYS annotate its purpose;

        case 11:
            totalBet = 0;
            break;
        case 21:
            totalBet = 21;
            break;
        default:
            console.log("No superstitions here, Tommy boy!")
    }

    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // distribute total bet
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while (remaining > 0);
    }
    funds = funds = totalBet;
    console.log(`\tbets: ` +
        Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
        ` (total: ${totalBet} pence`);


// roll dice
    const hand = [];
    for (let roll; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

// collect winnings
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }

    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}

console.log(`\tending funds: ${funds}`);








