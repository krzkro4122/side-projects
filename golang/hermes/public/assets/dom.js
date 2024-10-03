const websocketStatus = document.querySelector("#websocket-status")
const messageHistory = document.querySelector('#message-history');
const form = document.querySelector("#message-form");
const input = document.querySelector("#message");

export const changeWebsocketStatusTo = (statusName) => {
    switch (statusName) {
        case "connecting":
            websocketStatus.innerHTML = "🟠 Connecting..."
            websocketStatus.setAttribute("aria-label", "Websocket connecting")
            break;
        case "connected":
            websocketStatus.innerHTML = "🟢 Connected"
            websocketStatus.setAttribute("aria-label", "Websocket connected")
            break;
        case "disconnected":
        default:
            websocketStatus.innerHTML = "🔴 Disconnected"
            websocketStatus.setAttribute("aria-label", "Websocket disconnected")
    }

}

export const addMessageToDom = (message, isFromMe) => {
    const messageElement = document.createElement('p')

    if (isFromMe) {
        messageElement.classList.add(["my-message"])
    }

    messageElement.classList.add(["message"])
    messageElement.innerHTML += message + '<br>'
    messageHistory.insertBefore(messageElement, messageHistory.firstChild)
}


export const submitFormInDom = (callback) => {
    const data = input.value
    if (input.value !== "") {
        callback(data)
    }
}

document.addEventListener('keypress', (event) => {
    const enterCode = 13;
    if (event.key === 'Enter') {
        form.submit()
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    submitForm()
});
