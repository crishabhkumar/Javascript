// //Function composition
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function multi(a,b){
//     return a*b;
// }
// function pow(a){
//     return multi(sub(add(Math.pow(a,a),2),2),2);
// }

// const res = add(2,1);
// console.log(pow(res))

// //Best example
// function f1(a,b){
//     return a+b;
// }
// function f2(a){
//     return f1(a,a);
// }

// function compose(f1,f2){
//     return function(a,b){
//         return f2(f1(a,b));
//     }
// }
// //No need to make with same name f1,f2
// const result = compose(f1,f2);
// console.log(result(2,2))


//Modern JS
//BAsically return follows right to left
// const composeTwo = (f1,f2) => (a,b) => f2(f1(a,b))

// const resTwo = composeTwo(f1,f2);
// console.log(resTwo(5,5));


// function composeAll(...func){       //...fun means multiple aruments
//     return function(...Value){
//         return func.reduce((val,fn) => fn(val),Value);
//     }
// }

// const result = composeAll(add,mulit,square)
//... is called Spread operator means args can be n numbers
//Writing composeAll in Modern JS
const composeAll = 
    (...func) => 
    (...value) => 
    func.reduce((val,fn) => fn(val), value);

const result = composeAll(add,mulit,square)
console.log(result(2,6));

function add(args){
    return args[0] + args[1];
}
function square(val){
    return val * val;
}
function sub(args){
    return args[0] - args[1];
}
function mulit(val){
    return val * val;
}

