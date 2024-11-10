const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];
const thirdQuestion = document.querySelectorAll(".question")[2];
const fourthQuestion = document.querySelectorAll(".question")[3];
const lastQuestion = document.querySelectorAll(".question")[4];
const nextpageQuestion = document.querySelectorAll(".question")[5];
let clickCount = 0;

yesBtn.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
        
        question.innerHTML = "    I've admired you for a while, but I'm afraid you";
        secondQuestion.innerHTML = " you might avoid me because you're still"; 
        thirdQuestion.innerHTML = "  healing from past trauma or may not be ready.";
        fourthQuestion.innerHTML = " Please, just give me a chance to prove that I'm different.";
        lastQuestion.innerHTML = "   I genuinely like you. 😢";
        nextpageQuestion.innerHTML="Click yes to send a message"
        img.src = "https://giphy.com/embed/Th4UBUAZBbMaRoVL1v";
    } else if (clickCount === 2) {
        goToNextPage();
    }
});

function goToNextPage() {
    window.location.href = "inde.html";
}

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
