// Event listener to detect changes when a date is selected
document.getElementById("dateInput").addEventListener("change", calculateDates);

function calculateDates() {
  // Variable names for items
  const dateInput = document.getElementById("dateInput");
  const selectedDate = new Date(dateInput.value);

  // Days to calculate
  const daysToAdd = [3, 7, 12, 13, 14, 15, 16-25, 26, 27, 28];


}