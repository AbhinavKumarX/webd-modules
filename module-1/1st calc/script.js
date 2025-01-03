// Appends a value to the display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Clears the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Calculates the result of the expression in the display and updates the history
function calculateResult() {
  try {
    const expression = document.getElementById("display").value;
    // Validate the expression to prevent invalid inputs
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error("Invalid characters");
    }

    const result = eval(expression);
    document.getElementById("display").value = result;

    // Add to history
    addToHistory(`${expression} = ${result}`);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// Adds an entry to the calculation history
function addToHistory(entry) {
  const historyList = document.getElementById("history-list");
  const listItem = document.createElement("li");
  listItem.textContent = entry;
  historyList.prepend(listItem); // Add to the top of the list
}
