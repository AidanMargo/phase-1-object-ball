
function gameObject(){
  const game = {
    home: {
        teamName: 'Brooklyn Nets',
        colors:['Black', 'White'] ,
        players: {
            'Alan Anderson' : {
            number : 0,
            shoe : 16,
            points : 22,
            rebounds : 12,
            assists : 12,
            steals : 3,
            blocks : 1,
            slamDunks : 1
          },
          'Reggie Evans' : {
            number : 30,
            shoe : 14,
            points : 22,
            rebounds : 12,
            assists : 12,
            steals : 12,
            blocks : 12,
            slamDunks : 7
          },
          'Brook Lopez' : {
            number : 11,
            shoe : 17,
            points : 17,
            rebounds : 19,
            assists : 10,
            steals : 3,
            blocks : 1,
            slamDunks : 15
          },
          'Mason Plumlee' : {
            number : 1,
            shoe : 19,
            points : 26,
            rebounds : 12,
            assists : 6,
            steals : 3,
            blocks : 8,
            slamDunks : 5
          },
          'Jason Terry' : {
            number : 31,
            shoe : 15,
            points : 19,
            rebounds : 2,
            assists : 2,
            steals : 4,
            blocks : 11,
            slamDunks : 1
          }
        }
    },
        away:{
            teamName: 'Charlotte Hornets',
            colors: ['Turqoise', 'Purple'],
            players: {
                'Jeff Adrien' : {
                number: 4,
                shoe:18,
                points:22,
                rebounds:1,
                assists:1,
                steals:2,
                blocks:7,
                slamDunks:2
                },
                'Bismak Biyombo':{
                 number: 0,
                 shoe:16,
                 points:12,
                 rebounds:4,
                 assists:7,
                 steals:7,
                 blocks:15,
                 slamDunks:10
                },
                'DeSagna Diop':{
                 number: 2,
                 shoe:14,
                 points:24,
                 rebounds:12,
                 assists:12,
                 steals:4,
                 blocks:5,
                 slamDunks:5
                },
                'Ben Gordon':{
                 number: 8,
                 shoe:15,
                 points:33,
                 rebounds:3,
                 assists:2,
                 steals:1,
                 blocks:1,
                 slamDunks:0
                },
                'Brendan Haywood':{
                number: 33,
                shoe:15,
                points:6,
                rebounds:12,
                assists:12,
                steals:22,
                blocks:5,
                slamDunks:12
                }
            }
       }
    }
    return game;
  }

  // Step 2: look for given player and return that player's points
const numPointsScored = (playerInput) => {
  const game = gameObject();
  for(team in game){
    if(playerInput in game[team].players){
      return game[team].players[playerInput].points
    }
  }
}



//Step 3: look for given player and return that player's shoe size
const shoeSize = (playerInput) => {
  const game = gameObject();
  for(team in game){
    if(playerInput in game[team].players){
      return game[team].players[playerInput].shoe
    }
  }
}


// Step 4: Take a given team input and return an array of that team's colors
const teamColors = (teamInput) => {
  const game = gameObject();
    return game[teamInput].colors;
  }

//Step 5: Function that runs on the game object and returns an array of the team names
const teamNames = () => {
  const game = gameObject();
  const teamArray = [];
  for(team in game){
    teamArray.push(game[team].teamName)
  }
  return teamArray
}

//Step 6: Return a new array that contains all the jersey numbers for the players in a given team
const playerNumbers = (teamInput) => {
  const game = gameObject();
  const teamArray = [];
  for(player in game[teamInput].players){
    teamArray.push(game[teamInput].players[player].number)
  }
  return teamArray
}



