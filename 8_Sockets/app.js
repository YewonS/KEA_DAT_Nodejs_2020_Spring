const app = require('express')();
const server = require('http').createServer(app); // http is a module that exists in node

const io = require('socket.io')(server);

io.on('connection', socket => {
    // console.log("socket joined", socket.id);
    // socket.on('disconnect', () => {
    //     console.log("socket left", socket.id);
    // });

    socket.on("I'm thinking about this", data => {
        console.log(data.thoughts);
    });

});


app.get("/", (req, res) => {
    return res.sendFile(`${__dirname}/index.html`);
});

server.listen(3000);