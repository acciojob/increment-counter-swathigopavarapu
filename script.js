//your JS code here. If required.
// script.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Show "Back to Top" button when scrolled down
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Top";
backToTopBtn.classList.add("back-to-top");
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Simple alert when clicking "Order Now" button
const orderButtons = document.querySelectorAll(".order-btn");
orderButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Thank you for your order! 🍕");
  });
});
