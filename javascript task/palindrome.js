function palindrome(str) {
  let low = str.toLowerCase();
  var plndr = low.split("").reverse().join("");

  if (plndr === low) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("Eye"));
console.log(palindrome("eyfydeuf"));
