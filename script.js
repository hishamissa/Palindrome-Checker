let result = document.getElementById("result");
let checkButton = document.getElementById("check-btn");
var inputWord = "";

function check() {
  inputWord = document.getElementById("text-input").value;
  if (inputWord === "") {
    alert("Please input a value");
    return;
  }
  if (isPalindrome(inputWord)) {
    result.innerHTML = inputWord + " is a palindrome.";
  } else {
    result.innerHTML = inputWord + " is not a palindrome.";
  }
}

function cleanInputString(str) {
  const regex = /[\/\\\\,._()|:+-\s]/g;
  return str.replace(regex, '');
}

function reverseString(str) {
  return str.split("").reverse().join("")
}

function isPalindrome(word) {
  word = cleanInputString(word);
  if (word.toLowerCase() === reverseString(word.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

checkButton.addEventListener("click", check);
