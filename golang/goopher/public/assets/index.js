let uri = 'ws:';

if (window.location.protocol === 'https:') {
    uri = 'wss:';
}
uri += '//' + window.location.host;
uri += window.location.pathname + 'ws';

console.log(`Connecting to a websocket on ${uri}...`)
const ws = new WebSocket(uri);

ws.onopen = function () {
    console.log(`Connected to websocket on ${uri}!`)
    const status = document.querySelector("#websocket-status")
    status.innerHTML = "🟢 Connected"
    status.setAttribute("aria-label", "Websocket connected")
}

ws.onclose = function () {
    console.log(`Disconnected from websocket on ${uri}!`)
    const status = document.querySelector("#websocket-status")
    status.innerHTML = "🔴 Disconnected"
    status.setAttribute("aria-label", "Websocket disconnected")
}

ws.onmessage = function (event) {
    if (ws.readyState === WebSocket.OPEN) {

        const message = document.createElement('p')
        message.classList.add(["message"])
        message.innerHTML += event.data + '<br>';

        let chat = document.querySelector('#chat');
        chat.appendChild(message);
    }
}

const sendMessage = (event) => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send('Hello, Server!');
    }
}
