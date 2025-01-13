
const displayInput = document.querySelector(".display input");
const buttons = document.querySelectorAll('.calculator input[type="button"]');

let currentInput = ""; 


function updateDisplay(value) {
  displayInput.value = value;
}


function clearAll() {
  currentInput = "";
  updateDisplay("");
}


function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}


function handleButtonClick(buttonValue) {
  if (buttonValue === "=") {
  
    try {
      currentInput = eval(currentInput).toString();
    } catch (error) {
      currentInput = "Error";
    }
  } else if (buttonValue === "AC") {
    clearAll();
    return;
  } else if (buttonValue === "DE") {
    deleteLast();
    return;
  } else {
   
    currentInput += buttonValue;
  }

  updateDisplay(currentInput);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.value;
    handleButtonClick(buttonValue);
  });
});
