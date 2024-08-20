let chatBoxContainer = document.querySelector('.chatBox-container')
let input = document.querySelector('.input')
let searchIcon = document.querySelector('.searchIcon')

let API_URL = 'https://api.openai.com/v1/chat/completions'
let API_KEY = 'sk-Kxrgq20'

searchIcon.addEventListener('click', () => {
    let userChat = `
    <div class="user chat">
        <img src="./image/person.png" alt="" class="userProfile">
        <p class="userChat msg">${input.value}</p>
    </div>`;

    if (input.value) {
        chatBoxContainer.insertAdjacentHTML('beforeend', userChat)
        input.value = ''

        let botChat = `
        <div class="bot chat">
            <img src="./image/ChatGPT_logo..png" alt="" class="botProfile">
            <p class="userChat msg">Hello dear, how can i help you ?</p>
        </div>`
    
        setTimeout(() => {
            chatBoxContainer.insertAdjacentHTML('beforeend', botChat)
    
            // fetch('https://api.openai.com/v1/chat/completions', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authoriztion':
            // }
            // })
        }, 1000);
    }
})

