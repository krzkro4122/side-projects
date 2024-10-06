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
 * @param {import("./websocket").MessagePayload} message - parsed, received message
 */
export const addMessageToDom = (message, isFromMe) => {
    const messageElement = document.createElement('p')

    // when is it not mine
    if (message.ClientId) {
        messageElement.classList.add(["my-message"])
    }

    messageElement.classList.add(["message"])
    messageElement.innerHTML += message.Message + '<br>'
    messageHistory.insertBefore(messageElement, messageHistory.firstChild)
}


/**
 * @param {CallableFunction} callback - callable to run before adding the message to DOM
 */
export const submitFormInDom = (callback) => {
    /** @type {string} */
    const data = input.value

    if (input.value !== "") {
        callback(data)
        input.value = "";
    }
}
