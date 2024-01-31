const socket = io();

const actions = document.getElementById("actions")
const form = document.getElementById("form")
const message = document.getElementById("messages")
const user = document.getElementById("user")
const msg = document.getElementById("msg")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (msg.value && user.value) {
        socket.emit("chat message", { sentBy: user.value, text: msg.value })
        msg.value = ""
    }

})

msg.addEventListener("keypress", (e) => {
    socket.emit("chat typing", user.value)
})

socket.on("chat typing", (userName) => {
    actions.innerText = `${userName} is typing...`

})

socket.on("chat message", (data) => {
    const name = document.createElement("li")
    const msg = document.createElement("li")

    name.textContent = `${data.sentBy}`
    msg.textContent = `${data.text}`

    message.appendChild(name)
    message.appendChild(msg)

})