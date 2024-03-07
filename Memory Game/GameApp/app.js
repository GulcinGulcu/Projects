const cards = document.querySelectorAll('.card');
const container = document.querySelector('.container');
cardsArray = Array.from(cards);
const successMessage= document.querySelector('.success--hidden');
const scoreDiv = document.querySelector('.score');

let numberOfFlippedCards = 0;
let flippedCardArray = [];



function handleClick(e) {
    numberOfFlippedCards++;
    const el = e.currentTarget.lastElementChild.firstElementChild;
    const imgSrc = el.getAttribute('src');
    const id = el.getAttribute('id');
    if (numberOfFlippedCards === 1 && !e.currentTarget.classList.contains('flipped')) {
        e.currentTarget.classList.add('flipped');
        flippedCardArray.push(imgSrc);
        flippedCardArray.push(id);
    } else if(numberOfFlippedCards === 1 && e.currentTarget.classList.contains('flipped')) {
        numberOfFlippedCards = 0;
    }

    if (numberOfFlippedCards === 2) {
        if (flippedCardArray[0] === imgSrc && id !== flippedCardArray[1]) {
            e.currentTarget.classList.add('flipped');
            numberOfFlippedCards = 0;
            flippedCardArray = [];
            setTimeout(function() {
                successMessage.style.display = 'block';
            }, 500);
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 1200);

        } else if (flippedCardArray[0] !== imgSrc && id !== flippedCardArray[1] && !e.currentTarget.classList.contains('flipped')) {
            e.currentTarget.classList.add('flipped');
            setTimeout(closeCard, 1000, e.currentTarget);
            setTimeout(closePrevCard, 1000, cards, `${flippedCardArray[1]}`);
            numberOfFlippedCards = 0;
            flippedCardArray = [];

        } else if (flippedCardArray[0] === imgSrc && id === flippedCardArray[1] && e.currentTarget.classList.contains('flipped')) {
            e.currentTarget.classList.add('flipped');
            numberOfFlippedCards = 1;

        } else if (flippedCardArray[0] !== imgSrc && id !== flippedCardArray[1] && e.currentTarget.classList.contains('flipped')) {
            numberOfFlippedCards = 1;
        }
    }

};

cards.forEach(card => card.addEventListener('click', handleClick));

function closeCard(card) {
    card.classList.remove('flipped');
}

function closePrevCard(arr, id) {
    arr.forEach(item => {
        if (item.lastElementChild.firstElementChild.id === id) {
            closeCard(item);
        }
    })
}

//timer part

let second = 0;
let minute = 0;
let withLeadingNumberSeconds = 0;
let withLeadingNumberMinutes = 0;


function timer() {
    second++;
const ONE_MINUTE_IN_SECONDS = 60;
// Some other code
    if (second === ONE_MINUTE_IN_SECONDS) {
        second = 0;
        minute++;
    }

    if (second < 10) {
        withLeadingNumberSeconds = `0${second.toString()}`;
    } else {
        withLeadingNumberSeconds = second;
    }

    if (minute < 10) {
        withLeadingNumberMinutes = `0${minute.toString()}`;
    } else {
        withLeadingNumberMinutes = minute;
    }

    const checkCardsClass = cardsArray.every(card => card.classList.contains('flipped'));

    if (checkCardsClass) {
        clearInterval(gameInterval);
        setTimeout(function () {
            container.innerHTML = `
           <div class="success-message">
             <p>Congratulations!!!</p>
             <span class="success-message-emoji">🎉</span>
             <p>You finished the game in</p>
             <span class="finish-time"> ${withLeadingNumberMinutes}:${withLeadingNumberSeconds}</span>
             <a href="./game.html" class="try-again-btn"><i class="fa-solid fa-rotate-right"></i></a>
           </div>`
        }, 500);
    }
}

const gameInterval = setInterval(timer, 1000);

(function shuffleCards(cardList) {
    cardList.forEach(card => {
        const randomNumber = Math.floor(Math.random() * cardList.length);
        card.style.order = randomNumber;
    })

})(cards);


