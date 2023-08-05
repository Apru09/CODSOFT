let displayValue = '';

// Function to append value to the display
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

// Function to calculate and display the result
function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}
