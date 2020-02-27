const app = require("express")()


app.get("/", (req, res) => {

    const thisAPI = {
        name: "Yenny's new API",
        description: "This is a new API for devices"
    }

    res.send(thisAPI);
});


app.listen(3000, error => { 
    
    if(error) { 
        console.log(error);
    }

    console.log("Server is running on port", 3000);

})