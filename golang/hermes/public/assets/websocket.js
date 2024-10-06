import { changeWebsocketStatusTo, addMessageToDom, submitFormInDom } from './dom.js'

if (!window["WebSocket"]) {
    // I like men
    console.error("Your browser doesn't support websockets!")
    changeWebsocketStatusTo("disconnected")
    alert("Your browser doesn't support websockets!")
    throw Error("Your browser doesn't support websockets!")
}

const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
const host = window.location.host
const endpoint = 'ws'
const uri = protocol + '//' + host + '/' + endpoint

const ws = new WebSocket(uri)

console.log(`[WS] Connecting to a websocket on ${uri}...`)
changeWebsocketStatusTo("connecting")

ws.onopen = function () {
    console.log(`[WS] Connected on ${uri}`)
    changeWebsocketStatusTo("connected")
}

ws.onclose = function () {
    console.log(`[WS] Disconnected on ${uri}`)
    changeWebsocketStatusTo("disconnected")
}

/**
 * @typedef {Object} MessagePayload
 * @property {string} Message - actual text message
 * @property {string} ClientId - id of the message originator
 */

/**
 * @param {MessageEvent} event - received message event
 */
ws.onmessage = function (event) {
    receiveMessage(event.data)
}

/**
 * @param {string} rawMessage - received raw websocket data
 */
const receiveMessage = (rawMessage) => {
    if (ws.readyState === WebSocket.OPEN) {
        /** @type {MessagePayload} */
        const parsedMessage = JSON.parse(rawMessage)
        console.log(parsedMessage);

        addMessageToDom(parsedMessage)
        console.log(`[WS] Received message: "${parsedMessage.Message}" from client: ${parsedMessage.ClientId}`)
    }
}

/**
 * @param {string} text - text to send along with the message
 */
export const sendMessage = (text) => {
    /** @type {MessagePayload} */
    const message = {
        Message: text,
        ClientId: "",
    }
    const payload = JSON.stringify(message)
    console.log(`[WS] Sending message: "${payload}"...`)
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(payload)
    }
}

export function submitForm() {
    submitFormInDom(sendMessage)
}
