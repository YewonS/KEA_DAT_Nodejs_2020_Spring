const app = require("express")()

let devices = [
    {id: 1, type: "macbook"},
    {id: 2, type: "iphone"},
    {id: 3, type: "applewatch"},
    {id: 4, type: "airpods"},
    {id: 5, type: "ipad"}]

app.get("/", (req, res) => {

    const thisAPI = {
        name: "Yenny's new API",
        description: "This is a new API for devices"
    }

    return res.send(thisAPI)
})

app.get("/devices", (req, res) => {

    return res.send({
        devices: devices
    })
})

app.get("/devices/:id", (req, res) => {
    
    const device = devices.find(device => device.id === Number(req.params.id)) // comparing the id of the device with the number I sent through that are parsed into number

    return res.send({
        devices: devices
    })

})

app.post("/test", (req, res) => {
    console.log("test")
    res.send({ })
})





const server = app.listen(3000, error => { 
    
    if(error) { 
        console.log(error);
    }

    console.log("Server is running on port", server.address().port);

})