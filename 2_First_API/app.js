// const express = require("express"); // when we import things, always put it const. now node will resolve the dependencies in node_modules
// const app = express();

const app = require("express")();
const request = require('request');


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





// 20.02.2020.Thu

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//=> initialized only once when the server starts

app.get("/time", (req, res) => {

    let today = new Date();
    
    let time = {
        date: { 
            day: "Today is " + weekdays[today.getDay()],
            anotherWeekday: date.toLocaleString("en-us", { weekday: "long" }),
            date: today.getDate(),
            month: today.getMonth(),
            year: today.getFullYear()
        },
        time: {
            hour: today.getHours(),
            minute: today.getMinutes(),
            second: today.getSeconds()
        }
    }

    res.send(time)

})

app.get("/user/:id", (req, res) => { //callback function  : => variable

    console.log(req.params) // req.params is the json object
    return res.send({ id: req.params.id })

})

app.get("/search", (req, res) => {
    console.log(req)
    return res.send(req.query)
})




app.get("/google", (req, res) => {
    
    request('http://www.google.com', {}, (error, response, body) => { // this callback will be executed once we have request
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage. this body is a string
      return res.send(body)
    });

})


app.get("/documentation", (req, res) => {
    console.log(__dirname) // you know where you run your node
    //return res.redirect("/documentation2")
    return res.sendFile(__dirname + "/public/documentation.html")
})
// __dirname -> __ means that it's global

app.get("/documentation2", (req, res) => {
    console.log(__dirname) // you know where you run your node
    return res.sendFile(__dirname + "/public/documentation2.html")
})



app.listen(3000, error => { // there will only be one argument, so no paranthesis needed
    
    if(error) { // if error is defined. If error is undefined, this will never run.
        console.log(error);
    }

    console.log("Server is running on port", 3000);

}); // this runs every time I start the server
