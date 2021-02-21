/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


function isItLong(myString) {
  if (myString.length > 20) {
    return "That's a long string!"
  }
}

function isItMedium(myString) {
  if (myString.length >= 10 && myString.length <= 20) {
    return "That's a regular sized string!"
  }
}

function isItShort(myString) {
  if (myString.length < 10) {
    return "That's a small string!"
  }
  else {
    return "That's not a small string!"
  }
}
function howLongIsMyString(myString) {
  if (myString.length < 10) {
    return "That's a small string!"
  }
  else if (myString.length >= 10 && myString.length <= 20) {
    return "That's a regular sized string!"
  }
  else if (myString.length > 20) {
    return "That's a long string!"
  }
}


  function instructorHeight(instructorName) {
    if (instructorName == "Colin") {return 62}
    else if (instructorName == "Mesuara"){ return 69}
    return "I don't know that instructor!"
  }


        /**********************************
         *      OUR CODE GOES BELOW.      *
         * THIS IS FOR INTERNAL USE ONLY. *
         * DO NOT ADD OR CHANGE ANYTHING! *
         **********************************/

        if(typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}