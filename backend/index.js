const app = require('express')();

const server = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('Hej')
})

const io = require('socket.io')(server, {
    cors: {
        origin:'http://127.0.0.1:5500',
        methods: ['GET', 'POST']
    }
});

let users = [];

io.on('connection', (socket) => {
    socket.on('login', (arg) => {
        console.log(users);
        const user = arg;
        users.push(user);
        io.emit('userSet', arg)
    })

    //socket.emit('hello world')
    
    socket.on('chat', (arg) => {
        console.log(arg);
        io.emit('chat', arg)
    })

    
})

server.listen(3000);