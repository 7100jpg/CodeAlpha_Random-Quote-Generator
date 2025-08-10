const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
      author: "William B. Sprague"
    },
    {
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ];
  
  function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById("quote").innerText = selectedQuote.quote;
    document.getElementById("author").innerText = "— " + selectedQuote.author;
  }