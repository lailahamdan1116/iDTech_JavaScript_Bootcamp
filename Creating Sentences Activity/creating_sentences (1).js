// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Bootcamp!'
// YOUR CODE GOES HERE
let words = ['This','is','JavaScript','Bootcamp!'];

// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE
var sentence = "";

// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE
function createSentence(array){
    for( let i = 0; i<array.length; i++){
        if(i===array.length -1){
            sentence = sentence + array[i];
        }
        else{
            sentence = sentence + array[i] + " "; 
        }
    }
    return sentence;
}


console.log(createSentence(words));



// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
