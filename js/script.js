// Quotes array
var quotes = [{
    quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
    source: 'Winston Churchill',
    tags: ['Motivational', 'Work'],
    citation: 'Brainy Quote'
  },
  {
    quote: 'The Way Get Started Is To Quit Talking And Begin Doing.',
    source: 'Walt Disney',
    tags: ['Motivational', 'Work'],
    year: '1951'
  },
  {
    source: 'Thomas Edison',
    quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    tags: ['Motivational', 'Life'],
    citation: 'Dictionary',
    year: '1920'
  },
  {
    source: 'Yogi Berra',
    quote: 'You can observe a lot just by watching.',
    tags: ['Life', 'Positive']
  },
  {
    source: 'Abraham Lincoln',
    quote: 'A house divided against itself cannot stand.',
    tags: ['Leadership', 'Motivational']
  },
  {
    source: 'Johann Wolfgang von Goethe',
    quote: 'Difficulties increase the nearer we get to the goal.',
    tags: ['Motivational', 'Life'],
    citation: 'Brainy Quote'
  },
  {
    source: 'Byron Pulsifer',
    quote: 'Fate is in your hands and no one elses',
    tags: ['Life', 'Positive']
  },
  {
    source: 'Lao Tzu',
    quote: 'Be the chief but never the lord.',
    tags: ['Leadership', 'Life']
  },
  {
    source: 'Carl Sandburg',
    quote: 'Nothing happens unless first we dream.',
    tags: ['Motivational', 'Positive']
  },
  {
    source: 'Aristotle',
    quote: 'Well begun is half done.',
    tags: ['Work', 'Life'],
    year: '330BC'
  }
];

// Generate random quote
const getRandomQuote = _ => {
  // Generates a random number between 0 and 9
  let randomNumber = Math.floor(Math.random() * 10);
  return quotes[randomNumber];
}

// Prints quote to the document
const printQuote = _ => {
  let quoteObject = getRandomQuote();
  let html = '';

  // Append every tag to the page
  quoteObject.tags.forEach(tag => {
    html += "<p class='tags'>";
    html += tag;
    html += '</p>';
  });
  html += "<p class='quote'>";
  html += quoteObject.quote;
  html += "</p><p class='source'>";
  html += quoteObject.source;

  // If citation exists, add to the page
  if (quoteObject.citation) {
    html += "<span class='citation'>";
    html += quoteObject.citation;
    html += '</span>';
  }

  // If year exists, add to the page
  if (quoteObject.year) {
    html += "<span class='year'>";
    html += quoteObject.year;
    html += '</span>';
  }

  html += '</p>';

  // Append html to the page
  document.querySelector('#quote-box').innerHTML = html;

  /*
    Function for changing background color
  */

  // Generate a random number between 0 and 360.
  var randomHue = Math.floor(Math.random() * 361);
  var root = document.querySelector(':root');

  // Change (--background) variable's hue with random number
  root.style.setProperty('--background', `hsl(${randomHue}, 70%, 39%)`);
}

// Run printQuote function after button is clicked
document.getElementById('loadQuote').addEventListener('click', printQuote, false);

// Run printQuote function after 30s
window.setInterval(printQuote, 30000);