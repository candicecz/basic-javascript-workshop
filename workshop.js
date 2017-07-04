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
    if(operation === "add"){
        return num1+num2;
    } else if (operation === "sub"){
        return num1-num2;
    } else if (operation === "mult"){
        return num1*num2;
    } else if (operation === "div"){
        return num1/num2;
    } else {
        return;
    }
}

function repeatString(inputString, numRepetitions) {
    var repeatedString = "";
    if(numRepetitions>0){
        repeatedString = inputString.repeat(numRepetitions)
    } else if (numRepetitions<=0){
        repeatedString="";
    } else {
        return;
    }
    return repeatedString;
}

function reverseString(inputString) {
    var array = [];
    array = inputString.split('').reverse().join('');
    return array;
}

function longestWord(inputString) {
    var str = inputString.split(" ");
    var wordLength = 0;
    var longestWord = "";
    
    for(var i = 0; i < str.length; i++){
        if(str[i].length > wordLength){
            wordLength = str[i].length;
            longestWord = str[i];
        }
    }
    return longestWord;
}


function capitalize(inputString) {
  var newStr = inputString.toLowerCase().split(' ');
  for(var i =0; i<newStr.length; i++){
    newStr[i] = newStr[i].charAt(0).toUpperCase()+newStr[i].slice(1);
  }
  return newStr.join(' ')
}

function sumOfNumbers(arrayOfNumbers) {
    if(arrayOfNumbers.length === 0) {
        return 0;
    }
    for(var i=0; i<arrayOfNumbers.length; i++){
        if(typeof arrayOfNumbers[i] !== "number"){
            return;
        }
    }
    var sum = arrayOfNumbers.reduce(function(a,b){return a+b;});
    return sum;
}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {
    var alphaNumeric = /[a-z0-9]/gi;
    inputString = inputString.toLowerCase().match(alphaNumeric,'');
    for (var i = 0, len = inputString.length - 1; i < len/2; i++){
        if (inputString[i] !== inputString[len-i]){
        return false;
    } else if (inputString ===  null){
        return true;
    }
  }
 return true;
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