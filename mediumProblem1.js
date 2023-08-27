/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/

function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return "Please provide an array";
  } else {
    let box = [];
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (typeof value !== "number") {
        return "Please provide an array";
      } else {
        if (value < 0) {
          box.push(value);
        }
      }
    }
    // for (item of arr) {
    //   if (typeof item !== "number") {
    //     return "Please provide an array";
    //   } else {
    //     if (item < 0) {
    //       box.push(item);
    //     }
    //   }
    // }
    return box.length;
  }
}
let array = [2, -5, -7, -13];
let value = findingBadData(array);
console.log(value);
