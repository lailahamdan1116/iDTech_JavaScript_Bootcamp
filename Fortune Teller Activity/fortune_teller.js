// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE



var fortune = 10;

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
if(fortune <= 0){
    console.log("Sorry! You have bad fortune :(");
}
else if(fortune > 3 && fortune <=7){
    console.log("You have an average amount of fortune.");
}
else if (fortune > 7 && fortune <= 10){
    console.log("Congrats! You have great fortune :)");
}
else {
    console.log("fortune can't be read correctly");
}
