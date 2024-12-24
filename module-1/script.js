// Appends a value to the display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Clears the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Calculates the result of the expression in the display
function calculateResult() {
  try {
    const expression = document.getElementById("display").value;
    // Validate the expression to prevent invalid inputs
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error("Invalid characters");
    }
    document.getElementById("display").value = eval(expression);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
