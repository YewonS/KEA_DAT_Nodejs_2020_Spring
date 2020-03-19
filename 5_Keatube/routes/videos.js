const router = require("express").Router()


// what data should be inside of each video object
const videoes = []


router.get("/test", (req, res) => {
    return res.send({message: "Does this work"})
})

module.exports = router