window.addEventListener('DOMContentLoaded', function() {
    var quotes = [
    {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs "
    },
    {
    text: "The future belongs to those who believe in the beauty of their    dreams.",
    author: "Eleanor Roosevelt"
    },
    {
    text: "The only limit to our realization of tomorrow will be our    doubts of today.",
    author: "Franklin D. Roosevelt"
    },
    {
    text: "Success is not final, failure is not fatal: It is the courage    to continue that counts.",
    author: "Winston Churchill "
    },
    {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela "
    },
    {
    text: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn "
    },
    {
    text: "It does not matter how slowly you go, as long as you do not    stop.",
    author: "Confucius"
    },
    {
    text: "Believe in yourself and all that you are. Know that there is   something inside you that is greater than any obstacle.",
    author: "Christian D. Larson"
    },
    // Add more quotes as needed
    ];
    var quoteTextElement = document.getElementById('quoteText');
    var quoteAuthorElement = document.getElementById('quoteAuthor');
    var newQuoteBtn = document.getElementById('newQuoteBtn');
    var greetingElement = document.getElementById('greeting');
    function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
    }
    function displayRandomQuote() {
    var randomQuote = getRandomQuote();
    quoteTextElement.textContent = "“ " + randomQuote.text + "”";
    quoteAuthorElement.textContent = "-By " + randomQuote.author;
    }
    function displayGreeting() {
    var currentHour = new Date().getHours();
    var timeOfDay;
    if (currentHour >= 5 && currentHour < 12) {
    timeOfDay = "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "afternoon";
    } else {
    timeOfDay = "evening/night";
    }
    greetingElement.textContent = "Let's start our " + timeOfDay + " with a    new quote";
    }
    newQuoteBtn.addEventListener('click', displayRandomQuote);
    displayGreeting();
    displayRandomQuote();
    });