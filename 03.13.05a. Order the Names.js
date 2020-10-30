Thanks to Ryan's code, I was able to add the "enter" key event listener to Chat Room!
function solve() {
    let sendButton = document.getElementById('send');
    let chatInput = document.getElementById('chat_input');
    let chatThread = document.getElementById('chat_messages');
    sendButton.addEventListener('click', sendMsg);
    chatInput.addEventListener('keyup', enterFunc);
    function enterFunc(event){
        if (event.key == "Enter" ){
            return sendMsg();
        }
    }
    function sendMsg(){
        let message = chatInput.value;
        let myMessage = document.createElement('div');
        myMessage.classList.add('message', 'my-message' );
        myMessage.textContent = message;
        chatThread.appendChild(myMessage);
        chatInput.value = '';
    }
}

Kenneth Luster  7:02 PM