const express = require("express")
const app = express()

app.use(express.json()) // to get responses from post
app.use(express.urlencoded({ extended: false })) // if you submit a form

app.use(express.static('public'))
app.use(express.static('videos'))


const fs = require('fs') // file system module
// Server Side Rendering
const navbarPage = fs.readFileSync("public/navbar/navbar.html", "utf8")
const footerPage = fs.readFileSync("public/footer/footer.html", "utf8")
const frontpagePage = fs.readFileSync("public/frontpage/frontpage.html", "utf8")
const uploadPage = fs.readFileSync("public/upload/upload.html", "utf8")


app.get("/", (req, res) => {
    
    return res.send(navbarPage + frontpagePage + footerPage)
})

const playerPage = fs.readFileSync("public/player/player.html", "utf8")

app.get("/player/:videoid", (req, res) => {

    return res.send(navbarPage + playerPage + footerPage)

    // if(req.params.videoid === '1') {
    //     return res.sendFile(__dirname + "/public/player/player.html")
    // } else {
    //     return res.sendFile(__dirname + "/public/player/video2.html")
    // }
})

app.get("/upload", (req, res) => {
    return res.send(navbarPage + uploadPage + footerPage)
})

// import routes
const videosRoute = require("./routes/videos")

// setup routes
app.use(videosRoute)



const port = process.env.PORT ? process.env.PORT : 3000 // if it's undefined, run on 3000

const server = app.listen(port, error => { 
    
    if(error) { 
        console.log(error);
    }

    console.log("Server is running on port", server.address().port);

})