'use strict';

require('dotenv').config();
const port = process.env.PORT;
const io = require('socket.io-client');
let socket = io.connect(`http://localhost:${port}/`);

socket.emit('join');
setTimeout(() => {
    socket.emit('memmberConnected',)
}, 3000);

socket.on('joinedRoom', (id) => {
    console.log(`client ${id} has joined the room`);
})
socket.on('newItem', (payload) => {
    const randomPrice = Math.floor(Math.random() * (1000 - payload.price) + payload.price);
        console.log(`A new item is set for bidding ${payload.id}`)
        console.log(`starting price at ${payload.price}$`)
        socket.emit('newBidding', randomPrice);
})