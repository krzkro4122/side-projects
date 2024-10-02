var location = window.location;
var uri = 'ws:';

if (location.protocol === 'https:') {
    uri = 'wss:';
}
uri += '//' + location.host;
uri += location.pathname + 'ws';

console.log(`Connecting to a websocket on ${uri}...`)
ws = new WebSocket(uri)

ws.onopen = function () {
    console.log('Connected')
}

ws.onmessage = function (event) {
    var output = document.getElementById('output');
    output.innerHTML += event.data + '<br>';
}

setInterval(function () {
    ws.send('Hello, Server!');
}, 1000);
