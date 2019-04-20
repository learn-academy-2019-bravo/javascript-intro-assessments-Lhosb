// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
console.log(mantra[0]);

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// 2. Write the code that determines if there is a 'x' in mantra.
var testLetterX = "x"
if (mantra.includes(testLetterX)){
  console.log(`Yes, "${mantra}" includes "${testLetterX}"`)
} else console.log(`No, "${mantra}" does not include "${testLetterX}"`);

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// 3. Write the code that determines if there is a 'v' in mantra.
var testLetterV = "v"
if (mantra.includes(testLetterV)){
  console.log(`Yes, "${mantra}" includes "${testLetterV}"`)
} else console.log(`No, "${mantra}" does not include "${testLetterV}"`);

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// // Stretch: Write the code that returns the position of 'v' in mantra.
console.log(mantra.indexOf(testLetterV))

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// // Consider the following statement:

var codingIsEasy = true //set variable equal to true
var imBored = true //set variable equal to true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// Consider the following statement:

var imLost = false //set variable equal to false
var imFrustrated = false //set variable equal to false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
for  (let i = 0; i < mantra.length; i++){
      console.log(mantra[i])
}
//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// Stretch: Using a while loop.
var count = 0
while (count < mantra.length){
  console.log(mantra[count]);
  count++;
}

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// Super Stretch: Using forEach().
var mantraArray = mantra.split("")
function listIt(letter){
  return console.log(letter);
}
mantraArray.forEach(listIt);

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// Consider the following variable:

var message = "thisisastring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

var vowels = ['a', 'e', 'i', 'o', 'u']
//var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', ' ']


// function vowelTest(aArray) {
//   let newArray = []
//   for (let i = 0; i < aArray.length; i++){
//     if (vowels.includes(aArray[i]) === false) {
//       newArray.push(aArray[i])
//     }
//   }return newArray.join('')
// }
// console.log(vowelTest(messageArray))

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

// Stretch: Update your function to throw an exception if the argument is not a string.

function vowelTest(aMessage) {
  let newArray = []
  if (typeof message === 'string'){
    let messageArray = aMessage.split("")
    for (let i = 0; i < messageArray.length; i++){
      if (vowels.includes(messageArray[i]) === false) {
        newArray.push(messageArray[i])
      }
    } return newArray.join('')
  } else {
    throw "This is not a string"
  }

}
console.log(vowelTest(message))

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

//--------------------------------------------------------------------------------------------//
console.log("-------------------");
//--------------------------------------------------------------------------------------------//

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
function arrName(array){
  let nameArr = []
  for (let i = 0; i < array.length; i++){
    if (array[i].animal === 'cat'){
    nameArr.push(array[i].name)
  }
  } return nameArr
} console.log(arrName(toonimals));
