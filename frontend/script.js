
import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

const socket = io('http://localhost:3000');

const inputfield = document.querySelector('#send-message');
const sendBtn = document.querySelector('#send-btn');
const messageField = document.querySelector('#messages');

console.log(inputfield,sendBtn,messageField);

socket.on('chat', (arg) => {
    console.log('chat');

    messageField.innerHTML += arg + '<br/>'
})


sendBtn.addEventListener('click', () => {
    socket.emit('chat', inputfield.value );

})