const app = require('express')();
const server = require('http').createServer(app); // http is a module that exists in node

const io = require('socket.io')(server);

const escape = require('escape-html');
const helmet = require('helmet');
app.use(helmet());

io.on('connection', socket => {
    // console.log("socket joined", socket.id);
    // socket.on('disconnect', () => {
    //     console.log("socket left", socket.id);
    // });

    socket.on("I'm thinking about this", ({ thoughts }) => {
        // sends out to all clients
        io.emit("Someone said,", { thoughts: escape(thoughts) });

        // sends back to the client 
        //socket.emit("Someone said," , { thoughts })

        // sends out to all clients except the client itself that sends it
        //socket.broadcast.emit("Someone said,", { thoughts })
    });

    socket.on('color', ({ color }) => {
        io.emit('color-change', { color: escape(color) })
    });
    
});


app.get("/", (req, res) => {
    return res.sendFile(`${__dirname}/index.html`);
});

app.get("/colorpicker", (req, res) => {
    return res.sendFile(`${__dirname}/colorPicker.html`)
});

server.listen(3000);