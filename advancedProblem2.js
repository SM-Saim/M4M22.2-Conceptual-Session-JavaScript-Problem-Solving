/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 
*/
function primeNumber(prime) {
  if (!Array.isArray(prime)) {
    return "Please provide an array type input";
  } else {
    let br = [];
    for (let item of prime) {
      if (item > 1) {
        let isPrime = true;
        for (let i = 2; i < item; i++) {
          console.log("conf", i);
          if (item % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime === true) {
          br.push(item);
        }
      }
    }
    return br;
  }
}
let value = [0, 2, 5, 1, 7, 5];
console.log(primeNumber(value));
