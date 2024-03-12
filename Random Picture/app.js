const button = document.getElementById('change-btn');
const image = document.getElementById('main-image');
const figCaption = document.getElementById('fig-caption');
const modalContainer = document.getElementById('modal-container');
const modalImg = document.getElementById('modal-img');
const closeButton = document.getElementById('close-btn');


const imgArr = [
    {src: 'pictures/image-5.jpg', figcaption: 'Rainy Day'},
    {src: 'pictures/picture1.webp', figcaption: 'Coding Day'},
    {src: 'pictures/image-8.jpg', figcaption: 'Abstract Picture'},
    {src: 'pictures/image-12.jpg', figcaption: 'Beach Day'},
    {src: 'pictures/image-13.jpg', figcaption: 'Forest Air'},
    {src: 'pictures/image-14.jpg', figcaption: 'Scene'},
];

button.addEventListener('click', function () {
    let random = Math.floor(Math.random() * imgArr.length);
    image.src = imgArr[random].src;
    figCaption.innerText = imgArr[random].figcaption;
    modalImg.src = imgArr[random].src;

   
})

closeButton.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

image.addEventListener('click', function() {
   modalContainer.style.display = 'block';
});

window.addEventListener('click', function(e) {
   if(e.target === modalContainer) {
    modalContainer.style.display = 'none';
   };
});

window.addEventListener('keyup', function(e) {
    if(e.key === 'Escape') {
       modalContainer.style.display = 'none';
    };
});
