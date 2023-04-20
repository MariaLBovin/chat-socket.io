//import socket from './js/socket.js'

import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';
import createChat from './chat.js';

const URL = "http://localhost:3000";
const socket = io(URL);

export default function login () {
    const container = document.querySelector('#container-div');
    const inputField = document.createElement('input');
    inputField.placeholder= 'Ditt namn';
    const sendBtn = document.createElement('button');
    sendBtn.innerText = 'Gå med i chatt';

    container.append(inputField, sendBtn);

socket.on('login', (arg) => {
    
    let userId = socket.id;
    console.log('login', userId);
    
    const greetingDiv = document.createElement('h2');
    container.innerHTML = '';
    container.appendChild(greetingDiv);
    
    greetingDiv.innerText = 'Välkommen ' + arg;
    
    createChat ();

})


sendBtn.addEventListener('click', () => {
    socket.emit('login', inputField.value );
    

})

}