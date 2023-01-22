const socket = io('https://kunalsalunkhe-chattingapp-server.onrender.com')

const inviteLink = document.querySelector('.invite-link')
const copyBtn = document.querySelector('.copy-btn')

const userContainer = document.querySelector('.user-container')
const userForm = document.querySelector('.user-form')
const userInput = document.querySelector('.user-input')

const chatContainer = document.querySelector('.chat-container')
const messageContainer = document.querySelector('.msg-container')

const sendForm = document.querySelector('.send-form')
const messageInput = document.querySelector('.msg-input')


copyBtn.addEventListener('click' , ()=>{
    navigator.clipboard.writeText(inviteLink.value);
    copyBtn.innerHTML = 'Copied!'
    setTimeout(()=>{
        copyBtn.innerHTML = 'Copy'
    },1500)
})


userForm.addEventListener('submit', e =>{
    e.preventDefault()
    let userName = userInput.value
    if(userName.trim() === ''){
        alert('Add Name')
        return
    }
    socket.emit('user-joined' , userName)
    chatContainer.style.display = 'flex'
    userContainer.style.display = 'none'

})

socket.on('chat-message' , chatMessage =>{
    appendMessage(chatMessage , 'left');
})

socket.on('new-user-joined' , newUser=>{
    appendUser(newUser , 'join');
})

socket.on('user-disconnected' , userName=>{
    appendUser(userName , 'left')
})

sendForm.addEventListener('submit' , e=>{
    e.preventDefault();
    let chatMessage = messageInput.value
    socket.emit('send-chat-message' , chatMessage)
    messageInput.value = ''
    appendMessage({userName: 'You', message: chatMessage} , 'right')
})

function appendMessage(chatMessage , chatPosition){
    const messageEl = document.createElement('div')
    messageEl.innerHTML = `${chatMessage.userName}: ${chatMessage.message}`;
    messageEl.classList.add('msg' , chatPosition)
    messageContainer.append(messageEl)
}

function appendUser(userName, status){
    const userEl = document.createElement('div')
    userEl.innerHTML = (status === 'join') ? `${userName} joined the Chat` : `${userName} left the Chat`
    userEl.classList.add('new-user')
    messageContainer.append(userEl)
}