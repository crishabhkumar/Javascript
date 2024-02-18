//Theory
// let ka ek block level scope hota hai but var ka globally
// const ek aage kuch bhi value se initialize nhi kr skte usko

// console.log("Hello World");

//Normal function
// function f(a,b){
//     const sum = a + b
//     sum = 3
//     return sum
// }

// console.log(f(2,3))

//Annonymous functions
// let f = function(a,b){
//     const sum = a + b
//     sum = 3
//     return sum
// }

// console.log(f(2,3))

//Immediate Invoke
// let f = function(a,b){
//     const sum = a + b
//     // sum = 3
//     return sum
// }(2,3)

// console.log(f)

//Arrow Function
// let f = (a,b) =>
// {
//     const sum = a+b
//     return sum
// }
// console.log(f(2,78))



//Functions within function

// function fun(){
//     function f(a,b){
//         const sum = a+b;
//         return sum;
//     }
//     return f;
// }

// var numsum = fun()
// console.log(numsum(5,6))


//Closure Concept
//Closure -> Function bounded with all its reference in lexical environment
//Lexical environment means upar niche jo variable hai uska use krna

// function fun(){
//     var a = 6;
//     function f(b){
//         const sum = a+b;
//         return sum;
//     }
//     a = 5;
//     return f;
// }

// var numsum = fun()
// console.log(numsum(6))


//Objects return in functions within function
//object is a collection of key-value pairs in js
//Object Literals 
// var obj = {
//     "name":"Rishabh",
//     "age": 22,

//     greet(){
//         return "Welcome";
//     }

// }
// console.log(obj.greet())

//Objects within Functions
// function calC(val){
//     // const obj = {
//     return {
//         add(val1){
//             var a = val+val1;
//             return a;
//         },
//         sub(val1){
//             var a = val-val1;
//             return a;
//         }
//     }
//     // return obj;
// }

// console.log(calC(10).add(45));
// console.log(calC(10).sub(45));

//Multiple functions within functions
function calC(val){
    function add(val1){
        return val + val1;
    }

    function sub(val1){
        return val - val1;
    }

    return {
        add,sub
    }
}


console.log(calC(10).add(45));
console.log(calC(10).sub(45));