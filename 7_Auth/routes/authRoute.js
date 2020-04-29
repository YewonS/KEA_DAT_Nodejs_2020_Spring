const router = require("express").Router()

router.get('signup', (req, res) => {
    return res.send({ response: req.body })
})

router.get('login', (req, res) => {
    return res.send({ response: req.body })
})

router.get('logout', (req, res) => {
    return res.send({ response: req.body })
})


module.exports = router