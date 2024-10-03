const websocketStatus = document.querySelector("#websocket-status")
const messageHistory = document.querySelector('#message-history');
const input = document.querySelector("#message");


/**
 * @param {string} statusName - name of the status to change the websocket to. Pick from ['connecting', 'connected', 'disconnecting']
 */
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


/**
 * @param {string} message - Message to send
 * @param {boolean} isFromMe - Am i the sender?
 */
export const addMessageToDom = (message, isFromMe) => {
    const messageElement = document.createElement('p')

    if (isFromMe) {
        messageElement.classList.add(["my-message"])
    }

    messageElement.classList.add(["message"])
    messageElement.innerHTML += message + '<br>'
    messageHistory.insertBefore(messageElement, messageHistory.firstChild)
}


/**
 * @param {CallableFunction} callback - callback to run when adding the message to DOM
 */
export const submitFormInDom = (callback) => {
    const data = input.value
    if (input.value !== "") {
        callback(data)
        input.value = "";
    }
}
