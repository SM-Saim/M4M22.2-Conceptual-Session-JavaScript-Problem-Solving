/*
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5

*/
function mindGame(input) {
  if (typeof input !== "number") {
    return "Please provite a number type";
  } else if (input <= 0) {
    return "Please provide a positive number";
  } else {
    // const result = input * 3;
    // const result1 = result + 10;
    // const result2 = result1 / 2;
    // const finalResult = result2 - 5;
    const res = (input * 3 + 10) / 2 - 5;
    return res;
  }
}
let value = mindGame(5);
console.log(value);
