const express = require("express");
const app = express();

app.use(express.json()) // to get responses from post
app.use(express.urlencoded({ extended: false })) // if you submit a form

let devices = [
    {id: 1, type: "macbook"},
    {id: 2, type: "iphone"},
    {id: 3, type: "applewatch"},
    {id: 4, type: "airpods"},
    {id: 5, type: "ipad"}]

let nextDeviceID = 6

app.get("/", (req, res) => {

    const thisAPI = {
        name: "Yenny's new API",
        description: "This is a new API for devices"
    }

    return res.send(thisAPI)
})

app.get("/devices", (req, res) => {

    return res.send({
        response: devices
    })
})

app.get("/devices/:id", (req, res) => {
    
    const device = devices.find(device => device.id === Number(req.params.id)) // comparing the id of the device with the number I sent through that are parsed into number

    return res.send({
        response: devices
    })

})

// app.post("/test", (req, res) => {
//     console.log(req.body)
//     return res.send({ })
// })

app.post("/testtwo", (req, res) => {
    //console.log({ "body": req.body})
    return res.send({ response: req.body })
})

app.post("/devices", (req, res) => {

    let newDevice = req.body
    if (!newDevice.type) {
        return res.status(400).send({ message: "Missing the device type" }) // send the status
    }
    newDevice.id = nextDeviceID
    devices.push(newDevice)
    nextDeviceID ++
    return res.send({ response: newDevice })

})

app.put("/devices/:id", (req, res) => {

    const foundIndex = devices.findIndex(device => device.id === Number(req.params.id)) // find index that fulfills the condition. it's like filter
    delete req.body.id // just in case client sends the id. we don't wanna mess around with the id
    
    const changeDevice = { ...devices[foundIndex], ...req.body }
    devices[foundIndex] = changeDevice

    // changing types only
    // let changeDevice = req.body
    // if (!changeDevice.type) {
    //     return res.status(400).send({ message: "Missing the device type "})
    // }
    // devices[device.id - 1].type = changeDevice.type

    return res.send({ response: changeDevice })

})

app.delete("/devices/:id", (req, res) => {

    devices = devices.filter(device => device.id !== Number(req.params.id))
    return res.send({ response: devices })

})


const server = app.listen(3000, error => { 
    
    if(error) { 
        console.log(error);
    }

    console.log("Server is running on port", server.address().port);

})