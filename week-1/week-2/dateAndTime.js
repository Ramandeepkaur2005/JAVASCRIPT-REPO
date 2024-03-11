// DATE AND TIME IN JS 
let date1 = new Date()
console.log(date1)//yy,mm,dd 

console.log(date1.toISOString())//yy,mm,dd
console.log(date1.toJSON())//yy,mm,dd

//to make the above date understand, we use various conversions
console.log(date1.toString())//mm,dd,yy -> string representation of date
console.log(date1.toDateString())//mm,dd,yy -> string representation of date excluding time specifications

console.log(date1.toLocaleDateString())//dd,mm,yy
console.log(date1.toLocaleString())//dd,mm,yy

console.log(typeof date1)

//to declare a specific date
let date2 = new Date(2005,0,27)//year,month,date
console.log(date2.toLocaleString()) //0 -> January

let date3 = new Date(2024,0,27,4,3)//year,month,date,hr,min
console.log(date3.toLocaleString())

let date4 = new Date("01-14-2023")//mm-dd-yy
console.log(date4.toLocaleString())

//milliseconfds counted from 1stJan1970 till the specified date
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(date4.getTime())

//to convert milliseconds into seconds - w/o decimal
console.log(Math.floor(Date.now()/1000))

console.log(date1.getFullYear())
console.log(date1.getMonth()+1)
console.log(date1.getDate())
console.log(date1.getDay())//5 -> friday


