function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

function displayDate() {
  const dateElement = document.getElementById("current-date");
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = currentDate.toLocaleDateString(undefined, options);
}

const date = new Date();
const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();

// Format the date as DD-MM-YYYY
const formattedDate = `${day}-${month}-${year}`;

// Insert the date into the HTML element
document.getElementById("date-container").innerText = formattedDate;
