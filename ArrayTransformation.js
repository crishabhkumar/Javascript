//Constructor Array
// var arr = new Array()
// var arr = new Array(2,3,4,5)

// var arr = new Array(3)
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// console.log(arr)

//Array Literal
// let arr = [2,3,4]
// console.log(arr)


//Array of objects
// let arr = [
//     {
//         fname : "Rishabh",
//         age : 22
//     },
//     {
//         lname : "Chaudhary",
//         city : "Delhi"
//     }
// ]
// console.log(arr);


//Traversal in array
// var num = [1,2,3,4,5]
// for(let i = 0;i<num.length;i++){
//     console.log(num[i]);
// }

//Map method concept -> Makes a copy of array with given work or logic of the method
// var num = [1,2,3,4,5]
// function fun(val){
//     return val+1;
// }
// //1st way
// var temp = num.map(fun);
// //2nd way
// var tempC = num.map(
//     (n) => {
//         return n * 2;
//     }
// )
// console.log(num);
// console.log(temp);
// console.log(tempC);

//Map method takes 3 arguments
// Array.map(function(currValue,index,arr))

//Filter method
//Filtered array can be lesser or equal in size with original array
// const num = [14,15,16,19,25]
// const result = num.filter(checkAdult)
// console.log(num)
// console.log(result)
// function checkAdult(age){
//     if(age >= 18){
//         return true;
//     }else{
//         return false;
//     }
// }

//Reduce Method
//array.reduce(function(total,currVal,currIndex,arr))

let arr = [2,2,5,3,5,26,4,3,5,1,52,4,2]
let ans = arr.reduce(addNum)

console.log(arr)
console.log(ans)

function addNum(a,b){       //a -> totalValue //b ->currValue
    console.log(a)
    console.log(b)
    console.log(a+b);
    console.log()
    return a+b;
}

