const dateInput = document.getElementById("dateInput");
const submitButton = document.getElementById("submitButton");

// Adds an event listener for when the "Calculate" button is clicked. Once clicked, runs the calculateDates function.
submitButton.addEventListener("click", () => {
  calculateDates();
  // submitButton.disabled = true;
});


function calculateDates() {
  // Date() is a constructor that creates a Date object. When called as a function, it returns a string representing the current time.
  const selectedDate = new Date(dateInput.value);

  if (!dateInput.value) {
    alert('Please select a valid date!');
    return;
  }

  // Days to calculate
  const daysToSubtract = [3, 7, 12, 13, 14, 15, 26, 27, 28];

  //.forEach() Array method executes a provided function once for each array element.
  daysToSubtract.forEach((days, index) => {
    const day = daysToSubtract[index];
    // Creates a copy of the Date object so that each calculation starts from the unmodified state of the initial date selected
    const dateCopy = new Date(selectedDate);

    // .setDate() works with Date objects only and sets the day of the month according to local time
    // .getDate() works with Date objects only and returns the day of the month according to local time
    // Changes the state of "dateCopy" declared on line 20
    dateCopy.setDate(dateCopy.getDate() - days);

    // .toISOString() works with Date objects and returns a string representing the date from the date time string format, e.g. YYYY-MM-DDT00:00:00.000Z
    // .split() works with String values and divides the strings into an array of substrings, e.g. [YYYY-MM-DD][T00:00:00.000Z]
    const isoDate = `${dateCopy.toISOString().split("T")[0]}`

    // [YYYY][MM][DD]
    const month = isoDate.split("-")[1];
    const dayOfMonth = isoDate.split("-")[2];
    const year = isoDate.split("-")[0];

    const listItem = document.createElement("li");
    // [MM]/[DD]/[YYYY]
    listItem.textContent = `Day ${day}: ${month}/${dayOfMonth}/${year}`;
    results.appendChild(listItem);
  });
}