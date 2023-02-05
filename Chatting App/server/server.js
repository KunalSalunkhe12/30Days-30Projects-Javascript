const express = require('express');
const http = require('http')

const app = express();
const server = http.createServer(app).listen(process.env.PORT || 3000);
const cors = require('cors');

app.use(cors({ origin: 'https://kunalsalunkhe12-chattingapp.netlify.app' }));
const io = require('socket.io')(server, {
    cors: {
        origin: 'https://kunalsalunkhe12-chattingapp.netlify.app'
    }
})

const user = {};

io.on('connection', socket => {

    socket.on('send-chat-message', chatMessage => {
        socket.broadcast.emit('chat-message', { message: chatMessage, userName: user[socket.id] })
    })

    socket.on('user-joined', userName => {
        user[socket.id] = userName;
        socket.broadcast.emit('new-user-joined', user[socket.id])
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', user[socket.id])
        delete user[socket.id]
    })

})
