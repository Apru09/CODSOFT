const randomQuoteButton = document.getElementById('random-quote-btn');

const quoteList = document.getElementById('quote-list');

const quotes = [
  "I'm not afraid of being judged. I'm afraid of running out of time.",
  "I want to be a game-changer.",
  "The only thing you should fear in life is not being alive.",
  "I'm an average man with an extraordinary desire to do things."
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function handleRandomQuote() {
  const randomQuote = getRandomQuote();
  const quoteItem = document.createElement('li');
  quoteItem.textContent = randomQuote;
  quoteList.appendChild(quoteItem);
}

randomQuoteButton.addEventListener('click', handleRandomQuote);
