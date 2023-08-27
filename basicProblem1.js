/*
তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

সংখ্যাটি integer হলে true রিটার্ন করবে। 
অন্যথায় false রিটার্ন করবে।
*/

function isInteger(num) {
  if (typeof num !== "number") {
    return "Please provide a valid number";
  }
  if (num % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
let value = isInteger("3");
console.log(value);
