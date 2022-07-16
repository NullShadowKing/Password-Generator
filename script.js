"Use Strict";

const minesBtnEl = document.getElementById("minesBtn");
const plusBtnEl = document.getElementById("plusBtn");
const passLengthEl = document.getElementById("passLength");
const passHolderEl = document.getElementById("passHolder");
const generatePassBtnEl = document.getElementById("PassGenBtn");
const copyToClipBoardBtnEl = document.getElementById("copyToClipBoard");

minesBtnEl.addEventListener("click", () => {
  let number1 = Number(passLengthEl.innerText);
  if (number1 > 6) {
    number1--;
    passLengthEl.innerText = number1;
  }
});

plusBtnEl.addEventListener("click", () => {
  let number2 = Number(passLengthEl.innerText);
  if (number2 < 25) {
    number2++;
    passLengthEl.innerText = number2;
  }
});

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHARS = arrayFromLowToHigh(48, 57);
const SYMBOLS_CHARS = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

generatePassBtnEl.addEventListener("click", () => {
  let charCodes = UPPERCASE_CHAR_CODES.concat(LOWERCASE_CHAR_CODES)
    .concat(NUMBER_CHARS)
    .concat(SYMBOLS_CHARS);

  const passwordCharacters = [];
  let length = Number(passLengthEl.innerText);
  for (let i = 0; i < length; i++) {
    let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  passHolderEl.innerText = passwordCharacters.join("");
});

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

copyToClipBoardBtnEl.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const pass = passHolderEl.innerText;

  if (!pass || pass === "Password") {
    return;
  }

  textArea.value = pass;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password copied to clipboard");
});
