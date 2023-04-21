//import socket from './js/socket.js'

import {socket} from './socket.js';
import createChat from './chat.js';

export let user; 

export default function login () {
    const container = document.querySelector('#container-div');
    const inputField = document.createElement('input');
    inputField.placeholder= 'Ditt namn';
    const sendBtn = document.createElement('button');
    sendBtn.innerText = 'Gå med i chatt';

    container.append(inputField, sendBtn);

    socket.on('userSet', (arg) => {
    user = arg;
    // let userId = socket.id;
    // console.log('login', userId);
    
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