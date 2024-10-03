var uri = 'ws:';

if (window.location.protocol === 'https:') {
    uri = 'wss:';
}
uri += '//' + window.location.host;
uri += window.location.pathname + 'ws';

console.log(`Connecting to a websocket on ${uri}...`)
var ws;

ws = new WebSocket(uri);
// if (!ws || ws.readyState === WebSocket.CLOSED) {
// }

// if (ws && ws.readyState === WebSocket.OPEN) {

    console.log(`Connected to websocket on ${uri}!`)
    ws.onopen = function () {
        console.log('Connected')
    }

    ws.onmessage = function (event) {
        if (ws.readyState === WebSocket.OPEN) {
            var output = document.getElementById('output');
            output.innerHTML += event.data + '<br>';
        }
    }

    setInterval(function () {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send('Hello, Server!');
        }
    }, 1000);
// }
