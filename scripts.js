const words = ["Roboticist", "Software Engineer", "Deep Learning Expert"];
let i = 0;
let typingElement = document.querySelector(".typing-animation");

function typeWord() {
    let word = words[i].split("");
    function loopTyping() {
        if (word.length > 0) {
            typingElement.innerHTML += word.shift();
        } else {
            deleteWord();
            return false;
        }
        setTimeout(loopTyping, 200);
    }
    loopTyping();
}

function deleteWord() {
    let word = words[i].split("");
    function loopDeleting() {
        if (word.length > 0) {
            word.pop();
            typingElement.innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            typeWord();
            return false;
        }
        setTimeout(loopDeleting, 100);
    }
    setTimeout(loopDeleting, 1000);
}

typeWord();
