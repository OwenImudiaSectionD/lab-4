///TASK ONE

//N1
// function sum (a,b ){
//     return a + b;
// }

// let result = sum (5, 10);
// console.log(result);

//N2
// let product = function (a,b){
//     return a *b;
// }
// console.log(product(4,5))

//N3
// let diff = (a,b) => {
//     return a - b;
// };

// console.log(diff(10,5));

///TASK TWO

//N1
// function sum(...args) {
//     return args.reduce((acc, current) => acc + current, 0);
// }
// console.log(sum(10, 20, 30, 40)); 

//N2
// let greeting = function (name="Anonymous"){
//     return console.log(`Hello ${name}`)
// }
// greeting()
// greeting("Marvellous")

//N3
// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sum(10, 20, 30, 40));


///TASK THREE

//N1
// function createPerson(name, age) {
//     return {
//         name: name,
//         age: age
//     };
// }
// let person = createPerson("Owen", 19);
// console.log(person);

//N2
// function odd_even(a){
//     if( a%2 == 0){
//         console.log("True");
//     }else{
//         console.log("False");
//     };
// };
// odd_even(5);
// odd_even(4);

//N3
//  function maybeundefined(){

// };
// maybeundefined()


///TASK FOUR

//N1
// function fun1(message) {
//     return function() {
//         console.log(message);
//     };
// }

// const printHello = fun1("Hello, world!");

// printHello();

//N2
// function createCounter() {
//     let count = 0; 

//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count; 
//         },
//         getCount: function() {
//             return count; 
//         }
//     };
// }

// const counter = createCounter();

// console.log(counter.getCount());  
// console.log(counter.increment());  
// console.log(counter.increment());  
// console.log(counter.decrement());  
// console.log(counter.getCount());   
