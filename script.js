function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

function displayDate() {
  const dateElement = document.getElementById("date-container");
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = currentDate.toLocaleDateString(undefined, options);
}

displayDate();

let extendNav = false;

const iconElement = document.getElementById("expendnav");
const navigationContent = document.getElementById("navigationcontent");

iconElement.addEventListener("click", () => {
  extendNav = !extendNav;

  // Toggle navigation collapse
  if (extendNav) {
    navigationContent.style.width = "100px"; // Adjust width for collapsed state
    iconElement.classList.remove("fa-angles-left");
    iconElement.classList.add("fa-angles-right");
  } else {
    navigationContent.style.width = "200px"; // Adjust width for expanded state
    iconElement.classList.remove("fa-angles-right");
    iconElement.classList.add("fa-angles-left");
  }
});

// Mobile menu toggle
const mobileMenuIcon = document.getElementById("mobile-menu");
const mobileNavContent = document.getElementById("navigationcontent");

mobileMenuIcon.addEventListener("click", () => {
  mobileNavContent.classList.toggle("active");
});
