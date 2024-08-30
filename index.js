const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const path = require('path');
const socketio = require('socket.io')
const io = socketio(server)

let users = {};


io.on('connection', (socket)=>{
      console.log("connection established")
      socket.on('send-msg', (data)=>{
        io.emit('recieve-msg', {msg:data.msg, username:users[socket.id]})
      })
      socket.on('login', (data)=>{
        users[socket.id] = data.username;
      })
});


app.use('/', express.static(path.join(__dirname, 'public')))












server.listen(3000, ()=>{
    console.log('server connected')
})