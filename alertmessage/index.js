function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));
    var attempt=1

    // take the input until the guess is correct
    while(number !== random) {
        if(number<random){
            alert("too low")
        }
        else{
            alert("too high")
        }
        number = parseInt(prompt('Guess a number from 1 to 10: '));
        attempt++;
    }

    // check if the guess is correct
    if(number == random) {
        alert("you guessed correct in"+attempt+"attempts")
        console.log('You guessed the correct number.'+attempt);
    }

console.log(attempt)
  }

// call the function
guessNumber();
