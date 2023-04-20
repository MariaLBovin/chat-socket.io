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

io.on('connection', (socket) => {
    let addedUser = false;

    //console.log('test');

    socket.emit('hello world')
    
    socket.on('chat', (arg) => {
        console.log(arg);
        io.emit('chat', arg)
    })

    socket.on('login', (arg) => {
        console.log(arg);
        io.emit('login', arg)
    })
})

server.listen(3000);