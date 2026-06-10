// template String

let age = 22;
let first_name= "Yatin";

age=10;
first_name="harshada";

// "my name is Yatin and my age is 22 "

let about_me = "my name is "+first_name+ " and my age is " + age;
console.log(about_me);
console.log("name= "+first_name+" and age = "+age);

// ---------------------------------------------------
// other method
// template strings 

let about =`my name is ${first_name} and my age is ${age}`;
console.log(about);
console.log(`name= ${first_name} and age = ${age}`);

/*
In JavaScript, the template string implements the string 
interpolation. A template string is defined by wrapping 
a sequence of characters into a pair of backticks 
`I'm template string` . 
The template string placeholders have the format ${expression} , 
for example `The number is ${number}` .

*/