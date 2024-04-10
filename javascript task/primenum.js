function isPrime(number) {
  if (number == 1) {
    return true;
  }
  if (number == 2) {
    return true;
  }
  if (number == 3) {
    return true;
  }
  if (number % 2 == 0) {
    return false;
  }
  if (number % 5 == 0) {
    return false;
  }
  if (number % 7 == 0) {
    return false;
  }
  if (number % 3 == 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isPrime("25"));
