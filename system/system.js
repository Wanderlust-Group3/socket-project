'use strict';

require('dotenv').config();
const port = process.env.PORT;
const { v4: uuidv4 } = require('uuid');
// const express = require('express');
// const app = express();
// const server = require('http').createServer(app)
const ioSystem = require('socket.io')(port);
// app.use(cors);
const queue = {
    messages: {

    }
}

ioSystem.on('connection', (socket) => {
    console.log('server connected ', socket.id)

    const id = uuidv4();
    const randomPrice = Math.floor(Math.random() * (1000 - 500) + 500);

    socket.on('join', () => {
        socket.join("biddingRoom");
    })
    socket.on('memmberConnected', () => {
        socket.to('biddingRoom').emit('joinedRoom', socket.id)
            socket.to('biddingRoom').emit('newItem', {
                id: id,
                price: randomPrice
            })
    })
    socket.on('newBidding', (payload) => {

    })
})
