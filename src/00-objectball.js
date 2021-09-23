function gameObject(){
    const object = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            player: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks:1,
                    slamDunks: 1
                    },
                'Reggie Evans': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                    },
                'Brook Lopez': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                    },
                'Mason Plumlee': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                    },
                'Jason Terry': {
                    number: 31,
                    shoe: 15, 
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                    }
                }
        },
        away: {
            teamName:  'Charlotte Hornets',
            colors:  ['Turquoise', 'Purple'],
            player: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks:7,
                    slamDunks: 2
                    },
                'Bismak Biyombo':{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                    },
                'DeSagna Diop':{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                    },
                'Ben Gordon':{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                    },
                'Brendan Haywood':{
                    number: 33,
                    shoe: 15, 
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                    }
                }
            }
        }
        return object
    }
   
console.log(gameObject())

function numPointsScored(theName) {
    const theGame = gameObject()
    for (const team in theGame){
        const player = theGame[team].player

        for (const thePlayer in player) {
            if (thePlayer === theName) {
                return player[thePlayer].points
            }

        }

    }
}

numPointsScored('Brendan Haywood')
