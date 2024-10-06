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

ws.onmessage = function (event) {
    receiveMessage(event.data.split('\n'))
}

/**
 * @param {string} messages - Message to send
 */
const receiveMessage = (messages) => {
    console.log(`[WS] Receiving messages: "${messages}"...`)
    if (ws.readyState === WebSocket.OPEN) {
        for (const message of messages) {
            addMessageToDom(message, false)
        }
    }
}

/**
 * @param {string} message - Message to send
 */
export const sendMessage = (message) => {
    const payload = JSON.stringify({ message: message })
    console.log(`[WS] Sending message: "${payload}"...`)
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(payload)
        // addMessageToDom(message, true)
    }
}

export function submitForm() {
    submitFormInDom(sendMessage)
}
