let userArr = []


// input field value function here

const getInputValue = (inputId) => {
  const inputField = document.getElementById(inputId);
  const inputStringValue = inputField.value;
  const inputValue = parseFloat(inputStringValue);
  inputField.value = "";
  if (typeof inputValue === "number") {
    if (inputValue > 0) {
      return inputValue;
    } else {
      return alert(
        "Input should be Number also number should be gatter than 0"
      );
    }
  }
};

// element value function here

const getElementValue = (inputId) => {
  const element = document.getElementById(inputId);
  const elementStringValue = element.innerText;
  const value = parseFloat(elementStringValue);
  return value;
};

// set input value to element
const setElementValue = (elementId, inputValue)=>{
  const element = document.getElementById(elementId);
  const previousAmount = getElementValue(elementId)
  element.innerText = previousAmount + inputValue
}

const substractionValue = (elementId, inputValue)=>{
  const element = document.getElementById(elementId);
  const previousAmount = getElementValue(elementId)
  element.innerText = previousAmount - inputValue
}

const getRadioInput = (radioId)=>{
  return document.getElementById(radioId).checked
}

const randomNumber = ()=>{
  return Math.floor(Math.random()*256)
}

const getInputElement = (elementId)=>{

  const inputvalue = document.getElementById(elementId).value
  document.getElementById(elementId).value = ''
  return inputvalue
}

const saveData = ()=>{
  localStorage.setItem('userArr', JSON.stringify(userArr))
}