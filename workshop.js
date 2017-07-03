function firstLetter(inputString) {
    if(inputString === undefined){
        return undefined;
    } 
    else {
        return inputString[0];
    }
}
/*var answer = firstLetter("decodemtl"); //calling the function
console.log(answer); //executing it*/

function lastLetter(inputString) {
    if(inputString === undefined){
            return ;
        } 
        else {
            return inputString[inputString.length-1];
        }
}


function letterAtPosition(inputString, position) {
    if(inputString === undefined || position === undefined){
        return ;
    }
    else{
        return inputString[position];
    }
}

function addTwoNumbers(num1, num2) {
    if(isNaN(num1 || num2)){
        return;
    }
    else{
        return num1 + num2;
    }

}

function multiplyTwoNumbers(num1, num2) {
    if(isNaN(num1 || num2)){
        return;
    }
    else{
        return num1*num2;
    }
}

function calculator(operation, num1, num2) {

}

function repeatString(inputString, numRepetitions) {

}

function reverseString(inputString) {

}

function longestWord(inputString) {

}

function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};