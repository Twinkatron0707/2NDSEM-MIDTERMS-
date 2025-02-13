"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".title");
    const buttonsContainer = document.querySelector(".buttons");
    const yesButton = document.querySelector(".btn--yes");
    const noButton = document.querySelector(".btn--no");
    const catImg = document.querySelector(".cat-img");

    const MAX_IMAGES = 5;
    let play = true;
    let noCount = 0;

    const images = [
        "img/IMG-0.jpg",
        "img/IMG-1.jpg",
        "img/IMG-3.jpg",
        "img/IMG-41.jpg",
        "img/IMG-4.jpg",
        "img/IMG-5.jpg"
    ];

    yesButton.addEventListener("click", function () {
        titleElement.innerHTML = "YAYYYYY >3>_< !! smell u tom :3";
        buttonsContainer.classList.add("hidden");
        catImg.src = "img/IMG-YES.jpg"; // Show "YES" image
    });

    noButton.addEventListener("click", function () {
        if (play) {
            noCount++;
            const imageIndex = Math.min(noCount, MAX_IMAGES);
            catImg.src = images[imageIndex]; // Change image
            resizeYesButton();
            updateNoButtonText();
            if (noCount === MAX_IMAGES) {
                play = false;
            }
        }
    });

    function resizeYesButton() {
        const computedStyle = window.getComputedStyle(yesButton);
        const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
        yesButton.style.fontSize = `${fontSize * 1.6}px`;
    }

    function generateMessage(noCount) {
        const messages = [
            "No",
            "Are you sure? :c",
            "Baby please :d",
            "PLEASEE",
            "Northville 15 BLK12 LOT 2",
            "15.169788344989016, 120.63108081913921"
        ];
        return messages[Math.min(noCount, messages.length - 1)];
    }

    function updateNoButtonText() {
        noButton.innerHTML = generateMessage(noCount);
    }
});