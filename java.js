function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        displayMessage(messageText, "user");
        messageInput.value = "";

        // Simulate a typing delay for the other person
        setTimeout(() => {
            displayMessage("");
        }, 1200);
    }
}

function displayMessage(text, sender) {
    const messagesContainer = document.getElementById("messages");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
