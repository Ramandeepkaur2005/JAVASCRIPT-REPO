// INTRO TO ARRAYS 
/*
store multiple items under a single variable name; can conatin any datatype; resizeable; not associative; zero-indexed, JS array copy operation create shallow copies(a copy whose properties share the same reference point), rather than deep copies(a copy whose properties do not share the same reference point)
*/
const arr1 = ["blue",5,null,true]
console.log(arr1)
arr1[4] = "hello"
console.log(arr1)
//it shows that js arrays are resizeable
console.log(arr1[0])
// console.log(arr1["zero"])//we can't write like this, hence these are not associative arrays


//declaring an array
const arr2 = ["a","b","c"]
const arr3 = new Array("a","b","c")

console.log(arr2)
console.log(arr3)

//array methods
const arr4 = [1,2,3,4]
arr4.push(10,5)//add value at last
console.log(arr4)
arr4.pop()//remove last value
console.log(arr4)
arr4.unshift(9)//add value at start
console.log(arr4)
arr4.shift()
console.log(arr4)

console.log(arr4.includes(9))
console.log(arr4.includes(10))
console.log(arr4.indexOf(9))//-1 -> not present
console.log(arr4.indexOf(10))

const arr5 = arr4.join()//array to string
console.log(arr5,typeof arr5)

//slice and splice
/*Difference b/w slice and splice:-
Slice do not manipulate original array but splice manipulate the original array
*/
console.log(arr4)
console.log("slice:",arr4.slice(1,3))
console.log("array after slice:",arr4)
console.log("splice:",arr4.splice(1,3))
console.log("array after splice",arr4)
