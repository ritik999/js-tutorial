function user(name,age){
    this.name=name;   // name is same as perameter in function so we have to use this keyword to tell to store name in context of user function
    this.age=age;
    
    console.log(name,age);
    return this;   // this return current context of function
}

// console.log(user('ritik',25))

const userObj={
    name:'ritik',
    age:20,
    roll:123,

    detail:function(){
        // console.log(`name is ${this.name} and age is ${this.age}`);
        console.log(this);  // will return all the propertis of userObj
    }
}

// console.log(userObj.detail);
// userObj.detail();


console.log(this)   // this will return empty {} as the global context

function fun1(userName, userAge){
    this.userName=userName;  // this.userName create property with name userName inside global context
    this.userAge=userAge;

    return this;
}

// console.log(fun1('ritik',22));

const UserDetail1=fun1('ritik',22);
const UserDetail2=fun1('rohit',40);  // this fun overright the value of userName and age

const UserDetail3= new fun1('mohan',10)  // new keyword is a constructor function and it create new instinct or context or copy of fun1. it will not effect UserDetail2 function 

console.log(UserDetail1);
console.log(UserDetail3);  // new function will return all values and refrence of function implicitly even if function not return any value

