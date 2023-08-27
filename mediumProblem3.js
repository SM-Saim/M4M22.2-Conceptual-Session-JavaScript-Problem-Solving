// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/

function printDetails(input) {
  if (typeof input !== "object") {
    return "Please provide an object";
  } else {
    const names = input.name || "nai";
    const ages = input.age || "nai";
    const emails = input.email || "nai";
    const tesla = input.tesla || "nai";
    console.log(names, ages, emails, tesla);
    return (
      "My name is " +
      names +
      ". I am " +
      ages +
      " years old. " +
      "My email id is " +
      emails +
      ". Amar tesla " +
      tesla
    );
  }
}
const obj = {
  name: "mehedy",
  age: 26,
  email: "abc@gmail.com",
};

console.log(printDetails(obj));
