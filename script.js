function saveText() {
  const userInput = document.getElementById('userInput').value;
  const displayArea = document.getElementById('savedText');
  displayArea.innerHTML = userInput;
}
