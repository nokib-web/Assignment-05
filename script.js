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
const clearButton = document.getElementById('clear-button')

for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {
        const cards = callButton.closest(".cards");
        const serviceName = cards.querySelector('.service-name').innerText;
        const serviceNumber = cards.querySelector('.service-number').innerText;
        

        if (coins < callCost) {
            alert('You don not have enough coins to make this call!');
            return;
        }

        coins -= callCost;
        coinBalance.innerText = coins
        alert("Calling to : " + serviceName + ": " + serviceNumber)


        //  saving history function

       


        
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.style.display = 'flex'
        div.style.justifyContent = 'space-between'
        div.style.alignItems= 'center'
        div.style.borderRadius = '20px';
        div.style.boxShadow = '20px';
        div.style.padding ='20px'
        div.style.backgroundColor= "#f5fff6"
        div.style.margin ="20px"

        const leftDiv = document.createElement('div')
        const nameSpan = document.createElement('div')
        nameSpan.innerText = serviceName
        nameSpan.style.fontSize = '20px'
        nameSpan.style.fontWeight = 'bold'
        

        const numberSpan = document.createElement('div')
        numberSpan.innerText = serviceNumber

        leftDiv.appendChild(nameSpan)
        leftDiv.appendChild(numberSpan)

        const rightDiv = document.createElement('div')
        rightDiv.innerText = timeString
        rightDiv.style.fontWeight="bold"

        div.appendChild(leftDiv);
        div.appendChild(rightDiv);
        callHistory.appendChild(div);




    })
}

// clear history functionality

clearButton.addEventListener("click", function(){
    callHistory.innerHTML= "";
})