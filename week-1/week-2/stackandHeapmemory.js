//Stck memory (Primitive)

let myName= "Ramandeep kaur"
let otherName=myName
otherName= "Parneet kaur"
console.log(myName); //Ramandeep kaur
console.log(otherName); //Parneet kaur

//Heap memory (Non-Primitive)
let user1={
    user1Name: "Raman",
    age: 18
}
let user2=user1
user2.age=21;
console.log(user1.age); 
console.log(user2.age); 