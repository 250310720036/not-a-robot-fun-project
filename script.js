const questions = [
    "If tomatoes are fruits, is ketchup a smoothie? 🍅🥤",
    "What colour is Monday? Choose wisely. 🤨",
    "Do fish know they're wet? 🐟💀",
    "If you punch yourself and it hurts, are you strong or weak? 👊😭",
    "If money doesn't grow on trees, why do banks have branches? 💸🌳",
    "If you're waiting for the waiter, who's the real waiter? 🍽️👀",
    "If two vegans fight, is it still called beef? 🌱🥊",
    "If debugging removes bugs, who keeps adding them? 🐛🤨",
    "If Ctrl + Z worked in real life, what are you undoing first? ⌨️💀",
    "Are you solving this CAPTCHA... or is it testing your sanity? 🤖😭"
];

const messages = [
    "🤨 Very suspicious answer.",
    "🤖 That's exactly what a robot would say.",
    "🚨 HUMANITY NOT DETECTED.",
    "💀 Bro failed a CAPTCHA.",
    "🧠 Your brain.exe has stopped working.",
    "📡 Contacting robot headquarters...",
    "😂 Nice try, toaster.",
    "🚫 Human verification failed successfully."
];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const verifyBtn = document.getElementById("verifyBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

let suspicion = 0;
let currentQuestion = 0;

function showQuestion() {
    question.innerText = questions[currentQuestion];
}

verifyBtn.addEventListener("click", function () {

    if (answer.value.trim() === "") {
        message.innerText = "🤨 Type something, human.";
        return;
    }

    suspicion += 10;

    if (suspicion > 100) {
        suspicion = 100;
    }

    attempts.innerText = suspicion;

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    message.innerText = randomMessage;

    answer.value = "";

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    showQuestion();

    if (suspicion === 100) {
        message.innerText =
            "🚨 CONFIRMED ROBOT. RETURN TO THE FACTORY 🤖";

        verifyBtn.innerText = "ROBOT DETECTED 🚨";
        verifyBtn.disabled = true;
    }
});

answer.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verifyBtn.click();
    }
});

showQuestion();