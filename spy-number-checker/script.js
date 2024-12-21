function checkSpyNumber() {
  const numberInput = document.getElementById('user-input').value;

  const digit = numberInput.toString().split('').map(Number);

  const sum = digit.reduce((acc, el) => acc + el, 0);
  const product = digit.reduce((acc, el) => acc * el, 1);

  if (sum === product) {
    document.getElementById(
      'result'
    ).textContent = `${numberInput} is a Spy Number!`;
  } else {
    document.getElementById(
      'result'
    ).textContent = `${numberInput} is Not a Spy Number.`;
  }
}
