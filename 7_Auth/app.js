const express = require('express')
const app = express()


app.use(express.json())

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
app.use(authRoute)



/* Start server */

const PORT = 3000

app.listen(PORT, (error)=> {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on the port", PORT)
})