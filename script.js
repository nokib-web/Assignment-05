// console.log("Hey ami kaj kortesi")

// Increasing heart icon funtion

const heartIcons = document.querySelectorAll(".heart-icon")
const heartCount = document.getElementById("heart-count")

let heartTotal = 0;

for (const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function () {
        heartTotal++;
        heartCount.innerText = heartTotal;


    })
}

// Increasing copy count  and copy the hotline number function

const copyButtons = document.querySelectorAll(".copy-button")
const copyCount = document.getElementById("copy-count")
const hotline = document.querySelectorAll("hotline")

let copyTotal = 0;

for (const copyButton of copyButtons) {
    copyButton.addEventListener("click", function () {
        const cards = copyButton.closest(".cards")
        // For nested button I used the term "closest" by searching on google..
        const hotline = cards.querySelector(".hotline").innerText
        navigator.clipboard.writeText(hotline)


        alert("Copied:" + hotline)

        copyTotal++;
        copyCount.innerText = copyTotal;


    })
}

//  Call button functionality

let coins = 100;
const callCost = 20;

const coinBalance = document.getElementById("coin-balance");
const callButtons = document.querySelectorAll(".call-button");
const callHistory = document.getElementById("call-history")

for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {
        const cards = callButton.closest(".cards");
        const serviceName = cards.querySelector('.service-name').innerText;
        const serviceNumber = cards.querySelector('.service-number').innerText;

        if (coins <callCost) {
            alert('Not enough coins!');
            return;
        }
        coins -= callCost;
        coinBalance.innerText= coins
        alert("Calling to : "  + serviceName  +": "+ serviceNumber)

    })
}