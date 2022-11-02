// Rock Paper Scissors

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.

let getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock') {
     return 'rock';
    } else if (userInput === 'paper') { 
     return 'paper';
    } else if (userInput === 'scissors') {
        return 'scissors';
    } else {
        console.log('Error!')
        return 'invalid';
    }
 }

let getComputerChoice = function() {
   randomNumber = Math.floor(Math.random()*3);

   if (randomNumber === 0) {
    return 'rock';
   } else if (randomNumber === 1) {
    return 'paper';
   } else if (randomNumber === 2) {
    return 'scissors';
   }
}

var determineWinner = function(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The Game was a tie.';
    }

    if (userChoice === 'rock' && computerChoice === 'paper'){
        return 'Computer Wins';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer Wins';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer Wins';
    } else if (userChoice === 'invalid') {
        return 'Computer Wins';
    } else {
        return 'You Win';
    }
}

var playGame = function() {
    var userChoice = getUserChoice('scissors');
    var computerChoice = getComputerChoice();
    console.log(`Users choice is ${userChoice}`);
    console.log(`Computers choice is ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
