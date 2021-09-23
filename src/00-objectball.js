function gameObject(){
    const object = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks:7,
                    slamDunks: 2
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
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                    },
                'Mason Plumlee': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                    },
                'Jason Terry': {
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
        },
        away: {
            teamName:  'Charlotte Hornets',
            colors:  'Turquoise, Purple',
            players: {
                'Alan Anderson': {
                    number: 1,
                    shoe: 2,
                    points: 3,
                    rebounds: 4,
                    assists: 5,
                    steals: 6,
                    blocks: 7,
                    slamDunks: 8
                    },
                'Reggie Evans':{
                    number: 1,
                    shoe: 2,
                    points: 3,
                    rebounds: 4,
                    assists: 5,
                    steals: 6,
                    blocks: 7,
                    slamDunks: 8
                    },
                'Brook Lopez':{
                    number: 1,
                    shoe: 2,
                    points: 3,
                    rebounds: 4,
                    assists: 5,
                    steals: 6,
                    blocks: 7,
                    slamDunks: 8
                    },
                'Mason Plumlee':{
                    number: 1,
                    shoe: 2,
                    points: 3,
                    rebounds: 4,
                    assists: 5,
                    steals: 6,
                    blocks: 7,
                    slamDunks: 8
                    },
                'Jason Terry':{
                    number: 1,
                    shoe: 2,
                    points: 3,
                    rebounds: 4,
                    assists: 5,
                    steals: 6,
                    blocks: 7,
                    slamDunks: 8
                    }
                }
            }
        }
        return object
    }
   
console.log(gameObject())
