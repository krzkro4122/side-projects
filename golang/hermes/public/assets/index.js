import { changeWebsocketStatusTo, addMessageToDom, submitFormInDom } from './dom.js';

// Websocket
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const host = window.location.host
const endpoint = 'ws'
const uri = protocol + '//' + host + '/' + endpoint

const ws = new WebSocket(uri);
console.log(`[WS] Connecting to a websocket on ${uri}...`)
changeWebsocketStatusTo("connecting")

ws.onopen = function () {
    console.log(`[WS] Connected to websocket on ${uri}!`)
    changeWebsocketStatusTo("connected")
}

ws.onclose = function () {
    console.log(`[WS] Disconnected from websocket on ${uri}!`)
    changeWebsocketStatusTo("disconnected")
}

ws.onmessage = function (event) {
    receiveMessage(event.data)
}

/**
 * @param {string} message - Message to send
 */
const receiveMessage = (message) => {
    console.log(`[WS] Receiving message: "${message}"...`);
    if (ws.readyState === WebSocket.OPEN) {
        addMessageToDom(message, false)
    }
}

/**
 * @param {string} message - Message to send
 */
export const sendMessage = (message) => {
    const payload = JSON.stringify({ message: message })
    console.log(`[WS] Sending message: "${payload}"...`);
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(payload);
        addMessageToDom(message, true)
    }
}

// Form
export function submitForm() {
    submitFormInDom(sendMessage)
}