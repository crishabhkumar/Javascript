//Promises Concept

//Synchronous Process -> Exceutes line by line consecutively in a  sequential manner
//Next line of code waits for execution of previous line of code

//Async Process -> Allows multiple operations to be performed at concurrently withour waiting
//Example -> I/O Operations,Fetching data,Handled wth call backs, promises

// setTimeout(function(){
//     console.log("Task-1"),1000
// })
// console.log("Task-2")
// console.log("Task-3")

//Promises
// const myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task")
//         resolve()
//     },2000)
// })

// myPromise.then(function(){
//     console.log("Promise Resolved.")

// })


// const myPromiseNew = new Promise(function(resolve,reject){
//     let fileLoader = true;
//     if(fileLoader){
//         resolve("File Loaded");
//     }else{
//         reject("File not loaded")
//     }
// })

// myPromiseNew.then(function(value){
//     console.log(value);
// }).catch(error => console.log(error))


//Resolved handle by .then
//Reject handeld by .catch

//Thre states of promises
//1.Pending
//2.Resolved
//3.Reject


//Async/Await
    //Async -> makes a fucntion return a promise
    //Await -> makes an async function wait for a promise

function LoadFile(){
    return new Promise((resolve,reject) => {
        let fileLoader = false;
        if(fileLoader){
            resolve("File Loaded.")
        }else{
            reject("File not loaded.")
        }
    })
}

//Async is making the myFunction to return a promise
async function myFunction(){
    try{
        const value = await LoadFile();
        console.log(value)
    }catch(error){
        console.log(error)
    }
}

myFunction()