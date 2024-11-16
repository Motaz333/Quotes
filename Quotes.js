
var quotes = [
  { quote: "“Be yourself; everyone else is already taken.”", author: "Oscar Wilde", image: "images/3565.jpg" },
  { quote: "“So many books, so little time.”", author: "Frank Zappa", image: "images/22302.jpg" },
  { quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "Albert Einstein", image: "images/9810.jpg" },
  { quote: "“You only live once, but if you do it right, once is enough.”", author: "Mae West", image: "images/259666.jpg" },
  { quote: "“Be the change that you wish to see in the world.”", author: "Mahatma Gandhi", image: "images/5810891.jpg" },
  {
    quote: `“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”`, author: "Albert Camus", image: "images/2500.jpg"
  },
  { quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”", author: "Maya Angelou", image: "images/2501.jpg" },
  { quote: "“I am so clever that sometimes I don't understand a single word of what I am saying.”", author: "Oscar Wilde", image: "images/3565.jpg" },
  { quote: "“A room without books is like a body without a soul.”", author: "Marcus Tullius Cicero", image: "images/2502.jpg" },
  { quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author: "Bernard M. Baruch", image: "images/2503.jpg" }
];

function RandomQuote() {

  var RandomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML =  quotes[RandomNumber].quote ;
  document.getElementById("author").innerHTML = "-- " + quotes[RandomNumber].author;
  document.getElementById("authorimage").src = quotes[RandomNumber].image;
  document.getElementById("authorimage").style.display="inline-block";


}





