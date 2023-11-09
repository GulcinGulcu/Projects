const quoteButton = document.querySelector('#new-quote');
const quote = document.querySelector('#quote');
const authorQuote = document.querySelector('#author');

const quoteArr = [
    {quote: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde'},
    {quote: 'A room without books is like a body without a soul.', author: 'Marcus Tullius Cicero'},
    {quote: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.', author: 'Bernard M. Baruch'},
    {quote: 'You only live once, but if you do it right, once is enough.', author: 'Mae West'},
    {quote: 'Be the change that you wish to see in the world.', author: 'Mahatma Gandhi'},
    {quote: 'In three words I can sum up everything I\'ve learned about life: it goes on.', author: 'Robert Frost'},
    {quote: 'If you tell the truth, you don\'t have to remember anything.', author: 'Mark Twain'},
    {quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.', author: 'Maya Angelou'},
    {quote: 'A friend is someone who knows all about you and still loves you.', author: 'Elbert Hubbard'},
    {quote: 'To live is the rarest thing in the world. Most people exist, that is all.', author: 'Oscar Wilde'},
    {quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson'},
    {quote: 'It is better to be hated for what you are than to be loved for what you are not.', author: 'Andre Gide'}
];

const colorArr = ['#55828b', '#364958', '#6a994e', '#e29578', '#432818', '#6c757d', '#9d8189', '#f25c54', '#ffba08', '#bb9457', '#3a0ca3', '#bb010b'];

quoteButton.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quoteArr.length);
    quote.innerText = quoteArr[random].quote;
    authorQuote.innerText = quoteArr[random].author;
    let randomColor = Math.floor(Math.random() * colorArr.length);
    document.documentElement.style.setProperty(`--main-color`, colorArr[randomColor]);
});