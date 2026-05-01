// Simple greeting based on time of day
const hour = new Date().getHours();
const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
console.log(greeting + ", visitor!");

// Add a subtle entrance animation delay to cards
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card, index) {
    card.style.animationDelay = (0.15 + index * 0.1) + "s";
  });
});