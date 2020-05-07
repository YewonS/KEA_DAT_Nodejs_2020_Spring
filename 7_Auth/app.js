const express = require('express')
const app = express()

app.use(express.json())

const rateLimit = require("express-rate-limit")
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 8
}) // creates headers and counts
app.use("/login", apiLimiter)
app.use("/signup", apiLimiter)


/* async practice
app.get("/", (req, res) => {
    knex('roles').select().then(users => {
        return res.send({ response: users })
    }).catch(error => {
        return res.send(400).send({ response: error })
    })
})

app.get("/1", async(req, res) => {
    const result = await knex('users').select()
    return res.send({ response: result })
})
*/



/* Setup objection + knex */

const { Model } = require('objection')
// const Model = require('objection').Model -> doesn't load entire library and save memory
const Knex = require('knex') // Knex -> this is the library. sql query builder for js
const knexFile = require('./knexfile.js')

const knex = Knex(knexFile.development) // this is the connection to the library

Model.knex(knex) // entity that aware of the connection


/* Add Route */

const authRoute = require('./routes/authRoute.js')
const usersRoute = require('./routes/users.js') // REST API for user model

app.use(authRoute)
app.use(usersRoute)



/* Start server */

const PORT = 3000

app.listen(PORT, (error)=> {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on the port", PORT)
})