const router = require("express").Router()
const User = require('../models/User.js')

// const { Router as baboo } = require("express")
// const Router = baboo()

router.post('/signup', async (req, res) => {

    // username, password, repeat password
    const { username, password, passwordRepeat } = req.body

    const isPasswordTheSame = password === passwordRepeat

    if (username && password && isPasswordTheSame) {
        if (password.length < 8) {
            return res.status(400).send({ response: "Password does not fulfill the requirements." })
        } else {
            try {
                // check if username exists
                const usersFound = await User.query().select().where({ 'username': username }).limit(1) // limit -> limit is like for loop. so it will stop when it finds. so more efficient in performance.
                // do if else check if it exists and give response
                if (usersFound.length > 1) {
                    return res.status(400).send({ response: "User already exists." })
                } else {
                    const defaultRoleId = await Role.query().select('id').where({ 'role': 'USER' })
                    const createdUser = await User.query().insert({
                        username,
                        password,
                        roldId: defaultRoleId
                    })
                    // insert in db
                    return res.send({ response: `User has been created ${createdUser.username}` })
                }
            
            } catch {
                return res.status(500).send({ response: "Something wrong with the database. Interner Server Error." })
            }
        }
    } else if (password && passwordRepeat && !isPasswordTheSame) {
        return res.status(404).send({ response: "Passwords do not match." })
    } else {
        return res.status(404).send({ response: "Missing fields, either username, password, passwordRepeat." })
    }

})

router.post('/login', (req, res) => {
    return res.send({ response: req.body })
})

router.get('/logout', (req, res) => {
    return res.send({ response: req.body })
})


module.exports = router