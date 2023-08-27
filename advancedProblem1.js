/*
Problem 1:
আপনার কাছে একটি জাভাস্ক্রিপ্ট ফাংশন রয়েছে যার নাম হলো isValidPhotoName(photoName, imageExtensions)। এই ফাংশনটি দুটি প্যারামিটার গ্রহণ করে: photoName, যা একটি ছবির নাম প্রদর্শন করে, এবং imageExtensions Array, যা .jpg, .png, ইত্যাদি ছবির এক্সটেনশন গুলি ধারণ করে।
আপনার কাজ হলো isValidPhotoName ফাংশনটি সম্পূর্ণ করা যাতে এই ফাংশনের মাধ্যমে পরীক্ষা করা যায় আপনি দেওয়া প্যারামিটার photoName সঠিক ছবির নাম কিনা তা। এই ফাংশনের কাজ হলো true রিটার্ন করা যদি photoName একটি বৈধ ছবির নামের শেষে বিদ্যমান ছবির এক্সটেনশন গুলির মধ্যে যেকোনটি শেষ হয়; অন্যথায়, ফাংশনটি false রিটার্ন করবে।
*/
// .jpg .jpeg .png .gif .ico .JPEG

function isValidPhotoName(photoName, imageExtensions) {
  if (typeof photoName !== "string" || !Array.isArray(imageExtensions)) {
    return "Please provide valid photo name and valid array for extension check";
  } else {
    for (let image of imageExtensions) {
      if (photoName.toLowerCase().endsWith(image.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
}
let photoname = "nature.iCO";
let extensions = ["jpg", "JPEG", "png", "svg", "ico"];
console.log(isValidPhotoName(photoname, extensions));
