// const express = require("express"); // when we import things, always put it const. now node will resolve the dependencies in node_modules
// const app = express();

const app = require("express")();

app.get("/", (req, res) => {
    // callback function -> you call it back later when it is invoked, not when the server runs.
    res.send({
        message: "Hello there"
    });
}); // to make a get request. app is a server that we are using. 

app.get("/aboutMe", (req, res) => {

    const me = {
        name: "Yenny",
        hobby: "playing League"
    }

    res.send(me);
});
// this is a route

app.get("/aboutThisWebsite", (req, res) => {

    const webinfo = {
        info: "for nodejs class 2020",
        httpRequest: "get request",
        api: {
            method: "GET",
            aboutMePage: "/aboutMe"
        }
    }

    res.send(webinfo); // it's like return statement. no more code after this line.
})

// task: create a new route
app.get("/newPage", (req, res) => {

    let newRoute = {
        url: "/newPage",
        info: "this is about a new task",
        author: {
            name: "Yewon",
            nickname: "Yenny",
            privateinfo: {
                message: "this is secret:P"
            }
        }
    }

    res.send(newRoute)
})

app.listen(3000, error => { // there will only be one argument, so no paranthesis needed
    
    if(error) { // if error is defined. If error is undefined, this will never run.
        console.log(error);
    }

    console.log("Server is running on port", 3000);

}); // this runs every time I start the server
