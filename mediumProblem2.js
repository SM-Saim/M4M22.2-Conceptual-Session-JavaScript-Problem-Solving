/*
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303
*/
function gemsToDiamond(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return "Please provide all number type ";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Please provide positive number type ";
  } else if (num1 % 1 !== 0 || num2 % 1 !== 0 || num3 % 1 !== 0) {
    return "Please provide all integer numbers";
  } else {
    const friend1 = 21;
    const friend2 = 32;
    const friend3 = 43;
    const total = num1 * friend1 + num2 * friend2 + num3 * friend3;
    if (total > 2000) {
      return total - 2000;
    } else {
      return total;
    }
  }
}
let result = gemsToDiamond(20, 200, 50);
console.log(result);
