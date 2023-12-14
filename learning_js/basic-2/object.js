// object are of two type 
// 1- singleton. (object created using constructor is called singleton obj);
// Object.create

// 2- non-singleton obj. (object created using object literals.)


// take symbol and add it into obj keys
const smbl=Symbol('key1');   // declear symbol

const obj1={
    name:'Ritik',   // system process name as "name"(string)
    'full name':'Ritik Upadhyay',   // this value can only be access by using [] notation
    age:21,
    location:'Ghaziabad',
    email:'abc@gmail.com',
    isLoggedIn:false,
    lastLoginDay:['Monday','Sunday'],
    //smbl:'first'   // can use symbol like this as obj key. its datatype is string 
    [smbl]:'first'  // to use symbol as obj key use []. now it refer to symbol smbl 
}


// way for access obj values
// 1- using dot notation(.)

console.log(obj1.name);

// 2- using square bracket notation ([])

console.log(obj1['age']) // 'age' because system consider key as string in obj

//console.log(obj1["full name"])
//console.log(obj1.'full name') // can access

console.log(obj1[smbl])   // to access smbl key in obj use []


obj1.email='abb@gmail.com'   // can change obj value like this
// Object.freeze(obj1)  // it will free obj1 now its value can't change
// obj1.name='rohan'   // can't change value the obj1 is freezed


obj1.count=5  // can add property in obj like this outside object


obj1.greeting=function(){
    console.log(`hellow ${this.name}`);   // this.name will refer the name key of obj1. this refer all the properties of its object
}

// console.log(obj1);

// console.log(obj1.greeting)  // it will return the refrence of function greeting
// console.log(obj1.greeting())  // it will execute the function and return its value

const obj2={}

obj2.name='ritik';
obj2.age=24;
obj2.isLoggedIn=false;

// console.log(obj2);

// console.log('assign obj');
// const asgObj=Object.assign({},obj1,obj2);  // assign operator work as spreed operator and combine obj1 and obj2 into a new {} obj.
// const spreedOpe={...obj1,...obj2};  // work same as assign and commanly used
// console.log(asgObj);

// console.log(Object.keys(obj1))  // will give all the keys from obj1 in array form
// console.log(Object.values(obj2))   // will give all the values from obj2 in array form
// console.log(Object.entries(obj2))  // will give all entities as key value in array form