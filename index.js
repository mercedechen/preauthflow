const dateInput = document.getElementById("dateInput");
const submitButton = document.getElementById("submitButton");

// Adds an event listener for when Submit button is clicked and captures the string value of the date selected
submitButton.addEventListener("click", () => {
  calculateDates();
});

function calculateDates() {
  // Date() is a constructor that creates a Date object. When called as a function, it returns a string representing the current time.
  const dateSelected = new Date(dateInput.value).toISOString();
  console.log("Date Selected", dateSelected);

  // Days to calculate
  const daysToSubtract = [3];

  //.forEach() Array method executes a provided function once for each array element.
  daysToSubtract.forEach(day => {
    // Clones the date selected so that each calculation starts from the unmodified state
    const dateCopy = new Date(dateSelected).toISOString();
    console.log("Date Copy", dateCopy);

    const dateCalculated = dateCopy - day;
    console.log("Calculated Date", dateCalculated);
  });
}