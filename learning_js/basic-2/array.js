// array create shallow copy

const arr1=[1,2,'name',true];

let arr2=arr1; // create shallow copy. changes in arr2 will cause changes in arr1;

arr2.push(4);
// console.log(arr1);
// console.log(arr2);

// console.log(arr1);

let slic=arr1.slice(1,3);  // will splice array form index 1 to 2. 3 will not include in it. return new array. not cause any change in original array.
// console.log(slic);

let splic=arr2.splice(1,3);  // will slice array from index 1 to 3. will cause change in original array;

// console.log(splic);
// console.log(arr2);


const arr3=[1,3,4,4];
const arr4=['a','b','c','d'];

const newArr=arr3.concat(arr4);  // it will concat 2 array and return new array. will not cause any change to original array

// console.log(newArr);   // can use spread operator to concat. best way.

// console.log(Array.from('ritik'));   // will store char of ritik as an array element and return new array

// console.log(Array.isArray('ritik'));  // will check weather given argument is an array or not

let a=1;
let b=2;
let c=4;

// console.log(Array.of(a,b,c));   // make variables as array elements and return new array.

let d={name:'ritik', age:4, game:'football'};  

let arr8=[1,4,[1,4,4],[1,[2,[4]]]];

console.log(arr8.flat(2));   // flat() merge all depth into one single array. inside () we declear depth
console.log(arr8.flat(Infinity)); 


