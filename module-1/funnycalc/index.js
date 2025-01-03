// JavaScript for the calculator

// Get the display element
const display = document.querySelector(".display");

// Add text to the display
function addtodisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character in the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate and display the result
function calculateResult() {
  try {
    // Evaluate the expression
    const result = eval(display.value);

    // Update the display with the result
    display.value = result;
  } catch (error) {
    // Show error message for invalid input
    display.value = "Error";
    setTimeout(() => (display.value = ""), 2000);
  }
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
    // Add valid numbers and operators to the display
    addtodisplay(key);
  } else if (key === "Enter") {
    // Calculate result when Enter is pressed
    calculateResult();
  } else if (key === "Backspace") {
    // Delete last character when Backspace is pressed
    deleteLast();
  } else if (key === "Escape") {
    // Clear the display when Escape is pressed
    clearDisplay();
  }
});

// Add focus to the display for keyboard input
display.addEventListener("focus", () => {
  display.blur(); // Prevent users from typing directly into the input field
});
