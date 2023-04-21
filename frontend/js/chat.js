import {socket} from './socket.js';
import { user } from './login.js';


export default function createChat () {
    const container = document.querySelector('#container-div');
    //console.log(container);
    const chatDiv = document.createElement('div');

    const inputField = document.createElement('input');
    inputField.placeholder = 'Ditt meddelande';

    const sendBtn = document.createElement('button');
    sendBtn.innerText = 'Skicka';

    const messageField = document.createElement('div');

    container.append(chatDiv);
    chatDiv.append(messageField, inputField, sendBtn)
    

    socket.on('chat', (arg) => {
    console.log('chat',);

    messageField.innerHTML += '<div><p>' + arg.user + '</p>' + arg.message + '</div>';

    
})


sendBtn.addEventListener('click', () => {
    let msg = inputField.value
    socket.emit('chat', {message: msg, user: user});
    
})

}


    