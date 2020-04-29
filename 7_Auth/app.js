const express = require('express')
const app = express()


app.use(express.json())

app.post("/signup", (req, res) => {
    return res.send({ response: req.body })
})

// user route -> CRUD
// auth route -> login, logout, signup

const PORT = 3000

app.listen(PORT, (error)=> {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on the port", PORT)
})