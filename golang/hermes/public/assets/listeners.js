import { submitForm } from "./websocket.js";

const form = document.querySelector("#message-form");

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        form.dispatchEvent(new Event('submit'));
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    submitForm()
});