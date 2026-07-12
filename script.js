const questions = [
    "If tomatoes are fruits, is ketchup a smoothie? 🍅",
    "What colour is Monday? 🤨",
    "How many WiFi signals does a potato have? 🥔",
    "If you clean a vacuum cleaner, are you the vacuum cleaner? 😭",
    "Why is the word 'short' longer than 'long'? 🧠",
    "What does silence sound like? 👂",
    "If humans evolved from monkeys, why do exams exist? 🐒",
    "How many thoughts are currently buffering in your brain? 💀",
    "If nothing is impossible, is it possible for nothing to be impossible? 🤯"
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

function newQuestion() {

    const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)];

    question.innerText = randomQuestion;

}

verifyBtn.addEventListener("click", function () {

    if (answer.value.trim() === "") {

        message.innerText = "🤨 Robots usually forget to type.";

        return;
    }

    suspicion += Math.floor(Math.random() * 15) + 10;

    if (suspicion > 100) {
        suspicion = 100;
    }

    attempts.innerText = suspicion;

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    message.innerText = randomMessage;

    answer.value = "";

    setTimeout(newQuestion, 700);

    if (suspicion === 100) {

        setTimeout(function () {

            message.innerText =
                "🚨 CONFIRMED ROBOT. PLEASE RETURN TO THE FACTORY 🤖";

            verifyBtn.innerText = "ROBOT DETECTED 🚨";

            verifyBtn.disabled = true;

        }, 800);

    }

});

answer.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        verifyBtn.click();

    }

});

newQuestion();