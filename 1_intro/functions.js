addition("what happens ", "now");
// hoisting -> reads the whole file (passes the scope) and put function declaration in its own memory space so we can call it wherever

test = 1; // global variable -> don't do this
var test;
//let throws error

const example = "this is how you write a const";
// const always needs declaration

function addition(a, b) {
    return a + b;
}

var sum = addition(2, 5);
// console.log(sum);



function pokeMe() {
    console.log("Meow");
}

function approachSomeone(someoneToPoke) {
    console.log("steps steps steps");
    someoneToPoke();
}

approachSomeone(pokeMe); // pass pokeMe as a reference

const introduce = (name) => { //arrow functions -> binds this where it has been defined. functions bind this where it has been called.
    console.log("Hello my name is", name);
}

introduce("Anders");

const prepareIntroduction = (introducerFunction, name) => {
    console.log("hmmmm");
    introducerFunction(name); // changing the behavior
}

prepareIntroduction(introduce, "Anders");

const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

const me = {
    name : "Yewon",
    hobby : "watching Netflix"
}

aboutMe(me);
aboutMe({
    hobby: "playing League"
}) // this also works

const callLater = {
    toCall : () => {
        console.log("hello, you called me!");
    }
}

callLater.toCall();
