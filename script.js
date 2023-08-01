// //Example :-Print the odd numbers in an array
// //Function Method

// var arr = [12, 13, 14, 15, 16];
// var result = [];
// function odd(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(odd(arr));

// //Anonyomus Function

// var arr = [12, 13, 14, 15, 16];
// var result = [];
// var odd = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(odd(arr));

// //IIFE (Immediately Invoked Function Expression)

// (function odd(arr) {
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// })([12, 13, 14, 15, 16]);

// //Arrow Function (ES6)

// const od = (arr) => {
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(od([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// //Convert all the strings to title caps in a string array
// //Function Method

// const a = "hello how are you";
// function caps(a) {
//     let b = a[0].toUpperCase() + a.slice(1);
//     return b;
// }

// console.log(caps(a))

// //Anonyomus Function
// const a = "hello how are you";

// var caps = function (a) {
    
//     let b = a[0].toUpperCase() + a.slice(1);
//     return b;
// }

// console.log(caps(a))

// //IIFE (Immediately Invoked Function Expression)

// (function caps (a)
// {
//     let b = a[0].toUpperCase() + a.slice(1);
    
// console.log (b)
// }) ("hello how are you");

//Arrow Function (ES6)
// const a = "hello how are u";
// const caps = (a) => {
//     let b = a[0].toUpperCase() + a.slice(1);
//     return b;
// };
// console.log(caps(a));



// //Sum of all numbers in an array 
// //Function Method

// var a = [1,2,3,4,5];
// var s = 0;
// function sum (a)
// {
//     for (let i=1; i<=a.length; i++) 
//     {
// s = s+ i
//     }
//     return s;
// }
// console.log (sum(a));

// //Anonyomus Function

// var a = [1,2,3,4,5];
// var s = 0;
// var sum = function  (a)
// {
//     for (let i=1; i<=a.length; i++) 
//     {
// s = s+ i
//     }
//     return s;
// }
// console.log (sum(a));

// //IIFE (Immediately Invoked Function Expression)

// (function sum(a){
//             var s=0;
//             for(let i=1; i<=a.length; i++)
//             {
//                  s=s+i;
//             }
//             console.log(s);
//         })([1,2,3,4,5]);

//         Arrow Function

//         var sum = (a) =>{
//             var s=0;
//             for(let i=1;i<=a.length;i++)
//             {
//                 s=s+i;
//             }
//             return s;
//           }
//           console.log(sum([1,2,3,4,5]));