/*
ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/
function isJavaScriptFile(input) {
  if (typeof input !== "string") {
    return "Prease provide a string typr input";
  }
  if (input.toLowerCase().endsWith(".js") === true) {
    return true;
  } else {
    return false;
  }
  //   return input.toLowerCase().endsWith(".js") Output: true /false
}
let output = isJavaScriptFile("index.jS");
console.log(output);

// OR without using endsWith
function isJavaScriptFiles(input) {
  if (typeof input !== "string") {
    return "Prease provide a string typr input";
  }
  let split = input.split(".");
  console.log(split);
  const values = split.pop();
  if (values.toLowerCase() === "js") {
    return true;
  } else {
    return false;
  }
}
let outputs = isJavaScriptFiles("index.S");
console.log(outputs);
