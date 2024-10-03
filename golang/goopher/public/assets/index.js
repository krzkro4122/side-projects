// Websocket

const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const host = window.location.host
const endpoint = 'ws'
const uri = protocol + '//' + host + '/' + endpoint

console.log(`[WS] Connecting to a websocket on ${uri}...`)
const ws = new WebSocket(uri);

ws.onopen = function () {
    console.log(`[WS] Connected to websocket on ${uri}!`)
    const status = document.querySelector("#websocket-status")
    status.innerHTML = "🟢 Connected"
    status.setAttribute("aria-label", "Websocket connected")
}

ws.onclose = function () {
    console.log(`[WS] Disconnected from websocket on ${uri}!`)
    const status = document.querySelector("#websocket-status")
    status.innerHTML = "🔴 Disconnected"
    status.setAttribute("aria-label", "Websocket disconnected")
}

ws.onmessage = function (event) {
    receiveMessage(event.data)
}

const receiveMessage = (message) => {
    console.log(`[WS] Receiving message: "${message}"...`);
    if (ws.readyState === WebSocket.OPEN) {
        addMessageToDom(message, false)
    }
}

const sendMessage = (message) => {
    console.log(`[WS] Sending message: "${message}"...`);
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ message: message }));
        addMessageToDom(message, true)
    }
}

// Form

const form = document.querySelector("#message-form");
const input = document.querySelector("#message");
const messageHistory = document.querySelector('#message-history');

var addMessageToDom = (message, isFromMe) => {
    const messageElement = document.createElement('p')

    if (isFromMe) {
        messageElement.classList.add(["my-message"])
    }

    messageElement.classList.add(["message"])
    messageElement.innerHTML += message + '<br>'
    messageHistory.insertBefore(messageElement, messageHistory.firstChild)
}

const submitForm = () => {
    const data = input.value
    if (input.value !== "") {
        sendMessage(data)
    }
}

document.addEventListener('keypress', (event) => {
    const enterCode = 13;
    if (event.keyCode === enterCode) {
        event
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    submitForm()
});