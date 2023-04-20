
// import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

// const URL = "http://localhost:3000";
// const socket = io(URL);

// //import socket from './js/socket.js';

// const inputfield = document.querySelector('#send-message');
// const sendBtn = document.querySelector('#send-btn');
// const messageField = document.querySelector('#messages');

// console.log(inputfield,sendBtn,messageField);

// socket.on('chat', (arg) => {
//     console.log('chat', socket.id);

//     messageField.innerHTML += arg + '<br/>'
// })


// sendBtn.addEventListener('click', () => {
//     socket.emit('chat', inputfield.value );

// })

import login from "./js/login.js";

login();