// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// const twoSum =(ar, target)=> {
//     const obj = {};
//     for(let i=0; i<ar.length; i++){
//         let num = ar[i];
//         const differences = target - num;
//         if(obj[num] !=null){
//             return [obj[num], i];
//         } else {
//             obj[differences] = i;
//         }
//     }
// }
// console.log(twoSum([3,5,6],9))

// const addAllNums = (arr) => {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(addAllNums([3,6,7,4,10]));

// const reverseStr = (st) => {
//     let newStr = "";
//     for(let i=st.length-1; i>=0; i--){
//         newStr += st[i]; 
//     }
//     return newStr;
// }
// console.log(reverseStr("hello there!"))

// const reverStr = (st) => {
//   return [...st].reverse().join(" ");
// }
// console.log(reverStr("hey there!"))

const capitalizeLetters = (str) => {
    return str.split(" ").map((str) => str[0].toUpperCase() + str.slice(1)).join(" ");
}
console.log(capitalizeLetters("the good book the bible"))