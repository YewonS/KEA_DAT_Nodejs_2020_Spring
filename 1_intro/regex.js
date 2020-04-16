// test shows if the pattern appears in the string
// i flag  = case insensitive
const myRegEx = /Hello/i
const result = myRegEx.test("Hello world")
//console.log(result)

// Pipe = or
const petString = "Yenny has a cat"
const petRegEx = /cat|cow|sheep|dog|parrot/
//console.log(petRegEx.test(petString))

// Match
const extractString = "Extract this word from the string"
const wordRegex = /word/
//console.log(extractString.match(wordRegex))

const newString = "Why don't you say so"
const newRegex = /hello/
//console.log(newString.match(newRegex))

// The G flag = global flag
//console.log("Repeat, Repeat, Repeat".match(/Repeat/g))

let twinkleStarSong = "Twinkle, twinkle, little star"
//console.log(twinkleStarSong.match(/twinkle/ig))

// Wildcards
const humStr = "That's humbug!"
const hugStr = "I need a hug."
const huRegex = /hu./
//console.log(humStr.match(huRegex))
//console.log(hugStr.match(huRegex))

const funString = "He's a fun 'un."
//console.log(funString.match(/.un/g))

// Wildcard 2 - one of the following letters
//console.log("I found big bugs in my bag.".match(/b[aiu]g/g)) // can crate range with []
//console.log("I found big bugs in my bag.".match(/[aeiou]/g))


// Range
//console.log("123abc456".match(/[0-9]/g)) // all the numbers from 0 to 9
console.log(twinkleStarSong.match(/[^a-z]/ig))  //^ = don't match
