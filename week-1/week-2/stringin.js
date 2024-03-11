// STRINGS

let name = "Ramandeep kaur"
console.log(`Hi, my name is ${name}`);

let myVar= new String('Raman-deep-kaur')
console.log(myVar[0]);

console.log(myVar.length);
console.log(myVar.toUpperCase());
console.log(myVar.charAt(2));
console.log(myVar.indexOf('k'));
console.log(myVar.split('-'));

const newString=myVar.substring(0,4);
console.log(newString);

const MyString=myVar.slice(6, 8);
console.log(MyString);

const str="     name     ";
console.log(str.trim());

const str1="You are not intelligent";
console.log(str1.replace('not', 'very'));
console.log(str1.includes('not'));