const express = require("express")
const app = express()

app.use(express.json()) // to get responses from post
app.use(express.urlencoded({ extended: false })) // if you submit a form
const port = process.env.PORT ? process.env.PORT : 3000 // if it's undefined, run on 3000
app.use(express.static('public'))
app.use(express.static('videos'))


app.get("/video/:videoid", (req, res) => {
    if(req.params.videoid === '1') {
        return res.sendFile(__dirname + "/public/video.html")
    } else {
        return res.sendFile(__dirname + "/public/video2.html")
    }
})


const server = app.listen(port, error => { 
    
    if(error) { 
        console.log(error);
    }

    console.log("Server is running on port", server.address().port);

})