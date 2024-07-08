function hand(holeCards, communityCards) {
    let hand = [...holeCards, ...communityCards], highestType = 'nothing', suits = [], rankings = [];
    const RANKS = {
        "A" : 14,
        "K" : 13,
        "Q" : 12,
        "J" : 11,
        "10": 10,
        "9" : 9,
        "8" : 8,
        "7" : 7,
        "6" : 6,
        "5" : 5,
        "4" : 4,
        "3" : 3,
        "2" : 2
    }
    const TYPES = {
        "straight-flush" : 10,
        "four-of-a-kind" : 9,
        "full house" : 8,
        "flush" : 7,
        "straight" : 6,
        "three-of-a-kind" : 5,
        "two-pair" : 4,
        "pair" : 3
    }

    hand = hand.sort((a,b)=>{return RANKS[b[0]] - RANKS[a[0]]})
    for(card in hand){
        if(RANKS[hand[card][0]] - RANKS[hand[Number(card)+1][0]] - RANKS[hand[Number(card)+2][0]] - RANKS[hand[Number(card)+3][0]] - RANKS[hand[Number(card)+4][0]] == (4 || -4)){
            if(RANKS[hand[card][1]] == RANKS[hand[Number(card)+1][1]] && RANKS[hand[card][1]] == RANKS[hand[Number(card)+2][1]] && RANKS[hand[card][1]] == RANKS[hand[Number(card)+3][1]] && RANKS[hand[card][1]] == RANKS[hand[Number(card)+4][1]]){
                highestType = 'straight-flush'
            }
        }
        for(i=0; i<hand.length; i++){
            
        }
    }

    console.log(hand)

    return {type: highestType, ranks: []};
}

// tests

let tests = [
    hand(['K♠','A♦'],['J♣','Q♥','9♥','2♥','3♦']), // {type:'nothing', ranks:['A','K','Q','J','9']}
    // hand(['K♠','Q♦'],['J♣','Q♥','9♥','2♥','3♦']), // {type:'pair', ranks:['Q','K','J','9']}
    // hand(['K♠','J♦'],['J♣','K♥','9♥','2♥','3♦']), // {type:'two pair', ranks:['K','J','9']}
    // hand(['K♠','A♦'],['J♣','Q♥','9♥','2♥','3♦'])
]

for(test of tests){
    console.log(test)
}

/*  info

    Texas Hold'em is a Poker variant in which each player is given two "hole cards". Players then proceed to make a series of bets while five "community cards" are dealt. 
    If there are more than one player remaining when the betting stops, a showdown takes place in which players reveal their cards. 
    Each player makes the best poker hand possible using five of the seven available cards (community cards + the player's hole cards).

    Possible hands are, in descending order of value:

    * Straight-flush (five consecutive ranks of the same suit). Higher rank is better.
    
    * Four-of-a-kind (four cards with the same rank). Tiebreaker is first the rank, then the rank of the remaining card.
    
    * Full house (three cards with the same rank, two with another). Tiebreaker is first the rank of the three cards, then rank of the pair.
    
    * Flush (five cards of the same suit). Higher ranks are better, compared from high to low rank.
    
    * Straight (five consecutive ranks). Higher rank is better.
    
    * Three-of-a-kind (three cards of the same rank). Tiebreaker is first the rank of the three cards, then the highest other rank, then the second highest other rank.
    
    * Two pair (two cards of the same rank, two cards of another rank). Tiebreaker is first the rank of the high pair, then the rank of the low pair and then the rank of the remaining card.
    
    * Pair (two cards of the same rank). Tiebreaker is first the rank of the two cards, then the three other ranks.
    Nothing. Tiebreaker is the rank of the cards from high to low.


    Given hole cards and community cards, complete the function hand to return the type of hand 
    (as written above, you can ignore case) and a list of ranks in decreasing order of significance, to use for comparison against other hands of the same type, of the best possible hand.
*/