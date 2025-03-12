const dateInput = document.getElementById("dateInput");
const regular = document.getElementById("regular");
const special = document.getElementById("special");
const submitButton = document.getElementById("submitButton");
const reassignTable = document.getElementById("reassignTable");
const reassignInput = document.getElementById("reassignInput");
let count = 0;

// Adds an event listener and waits for when user clicks on "calculate" button to run the calculateDates() function
submitButton.addEventListener("click", () => {
  calculateDates();
  // submitButton.disabled = true;
});

function calculateDates() {
  // Date() is a constructor that creates a Date object. When called as a function, it returns a string representing the current time.
  const dateSelected = new Date(dateInput.value);

  if (!dateInput.value) {
    alert('Please select a valid date!');
    return;
  }

  // Days to calculate
  const daysToSubtract = [7, 11, 12, 13, 14, 15, 26, 27, 28, 1, 2, 3];
  const daysToFilter = [3, 7, 13, 14, 15, 28];

  let regList = "";
  let specList = "";

  //.forEach() Array method executes a provided function once for each array element.
  daysToSubtract.forEach((days, index) => {
    const day = daysToSubtract[index];
    // Creates a copy of the Date object so that each calculation starts from the unmodified state of the initial date selected
    const dateCopy = new Date(dateSelected);

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

    const listItem = `Day ${day}: ${month}/${dayOfMonth}/${year}`;

    specList += `<li> ${listItem}</li>`;

    if (daysToFilter.includes(days)){
      regList += `<li>${listItem}</li>`
    }

    regular.innerHTML = regList;
    special.innerHTML = specList;
  });
};

// For loop that repeats creating a new row up to 15 rows containing the following data inputs: Name, Live-In, Split Shift, Expedited, Availability and Remaining
for (i=1; i<=15; i++){
  const row = document.createElement("tr");
  row.innerHTML = `
        <td><input type="text"></input></td>
        <td><input type="number" min="0" max="4"></input></td>
        <td><input type="number" min="0" max="4"></input></td>
        <td><input type="number" min="0" max="1"></input></td>
        <td><input type="number" min="0" max="6"></input></td>
        <td><input type="number" min="0" max="6"></input></td>
  `;
  reassignInput.appendChild(row);
};