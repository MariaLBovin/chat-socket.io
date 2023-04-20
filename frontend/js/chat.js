import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

const URL = "http://localhost:3000";
const socket = io(URL);

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

    messageField.innerHTML += arg + '<br/>'
    
})


sendBtn.addEventListener('click', () => {
    socket.emit('chat', inputField.value);
    
})

}


    