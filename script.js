//your JS code here. If required.

const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

// Initial value
let count = 0;

incrementBtn.addEventListener("click", function () {
  // Show alert with the un-incremented value
  alert(count);

  // Increment the counter
  count++;
  counterEl.innerText = count;
});
