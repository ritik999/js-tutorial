// premitive datatypes  --- callbyvalue(copy value change)

// 7 types-- Number, String, Null, undefined, Symbol, Boolean, bigInt

let num=2;
let bool=true;
let id=Symbol('123');  // Symbol use to store unique data
let newId=Symbol('123'); 
let bigNumber=2342349465149158615904165848n  // bigInt is use to store very big values and adding n at end of any number make it of bigInt type

console.log(id === newId);  // values of to Symbols are not same;

// Non-premetive datatypes --  callbyRefrence(actual value changes)
// Type-- Array, Object, Function;

const arr=['a','b','c'];
const obj={
    name:'rohan',
    class:12
}

const fun=function(){   // the type of function is called objectFunction
    console.log('hellow world');
}

console.log(typeof arr, typeof obj, typeof fun);
