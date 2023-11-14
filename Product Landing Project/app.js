// Selecting elements from DOM 

const search = document.querySelector('#header__search-input');
const cardButtons = document.querySelectorAll('.main__card-button');
const chartTotal = document.querySelector('#header__cart-total');
const shoppingItemContainer = document.querySelector('.header__cart-container');
const cart = document.querySelector('#header__cart');
const productNumberInCart = document.querySelector('#header__cart-product-number');
const productImages = document.querySelectorAll('.main__card-image');
const innerModal = document.querySelector('.main__card-inner-modal');
const backdrop = document.querySelector('.main__card-img-backdrop');
const imageCloseButton = document.querySelector('#image-close-btn');
const footerQuestion = document.querySelectorAll('.footer__question-area');
const footerAnswer = document.querySelector('.footer__answer');

// Variables needed for calculation

let totalPriceofProducts = 0;
let totalProductNumberInCart = 0;

//I created array in order to check the items in the list
const listItemArr = [];

// Adding EventListener to cardButtons

cardButtons.forEach(button => button.addEventListener('click', function (e) {
   // When clicked, add price to cart and increment product number and some styling
   let target = e.currentTarget;
   let price = Number(target.previousElementSibling.textContent);
   totalPriceofProducts += price;
   chartTotal.textContent = totalPriceofProducts.toFixed(2);
   button.innerHTML = `<span class="added">Added</span><i class="fa-solid fa-check"></i>`;
   button.style.backgroundColor = '#118504';
   totalProductNumberInCart++;
   productNumberInCart.innerText = totalProductNumberInCart;
   

   // Creating list item and delete button for Cart container
   const newListItem = document.createElement('li');
   newListItem.classList.add('header__cart-added-item');
   const content = button.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
   newListItem.innerHTML = `<span>${content}</span> ${price}$`;
   shoppingItemContainer.appendChild(newListItem);
   listItemArr.push(newListItem.firstElementChild.innerText);
   const deleteItemButton = document.createElement('button');
   deleteItemButton.classList.add('header__cart-delete-item-btn');
   deleteItemButton.innerText = 'X';
   newListItem.appendChild(deleteItemButton);

   // Removing the list item, decrement product number and price
   deleteItemButton.addEventListener('click', function () {
      newListItem.remove();
      listItemArr.splice(listItemArr.indexOf(newListItem.firstElementChild.innerText),1);
      totalPriceofProducts -= price;
      chartTotal.textContent = totalPriceofProducts.toFixed(2);
      totalProductNumberInCart--;
      productNumberInCart.innerText = totalProductNumberInCart;

      //If there is no target item in the cart, buttons go back to the first version in terms of color, text content etc..

      if(listItemArr.indexOf(newListItem.firstElementChild.innerText) == -1)
      {
         button.innerHTML = `<span class="main__card-button">Add to Cart</span><i class="fa-solid fa-cart-shopping"></i>`;
         button.style.backgroundColor = '#e85d04';
      };
   });
}));



//When Cart is clicked, show added items container
cart.addEventListener('click', function () {
   shoppingItemContainer.classList.toggle('active');
})

//Eventlistener for search input 
search.addEventListener('keyup', filterItems);

function filterItems(e) {
   let text = e.target.value.toLowerCase();
   const productNames = document.querySelectorAll('.main__card-name');
   Array.from(productNames).forEach(function (item) {
      let productName = item.textContent;
      if (productName.toLowerCase().indexOf(text) !== -1) {
         item.parentElement.style.display = 'flex';
      } else {
         item.parentElement.style.display = 'none';
      }
   });
};

//Opening Card Image Modal

productImages.forEach(image => image.addEventListener(('click'), function (e) {
   const imgSrc = e.target.src;
   innerModal.innerHTML = `<img src='${imgSrc}' class='main__inner-modal-img'>`;
   backdrop.classList.add('open');
}));

//Closing Image Modal

function closeModal() {
   backdrop.classList.remove('open');
}

window.addEventListener('click', function (e) {
   if (e.target === backdrop) {
      closeModal();
   };
})

imageCloseButton.addEventListener('click', closeModal);

//Footer FAQ accordion Event Listener

footerQuestion.forEach(question => question.addEventListener('click', function (e) {
   e.currentTarget.classList.toggle('active');
}));