const abc=(name, ...rest)=>{  // name is parameter of function which is hold by abc variable. ...rest is rest-operator it will represent all remaning paremeters
    console.log(name);
    console.log(rest);   // all rest paremeters will print here in array form
}

// abc('ritik',23, 24)  // abc function exicute here and a argument passed 'ritik'. 23,24 are rest-operators arguments

const obj={
    name:'Ritik',
    age:25,

    getData:function(){
        console.log(this)    // this key-word will refer current context of obj 
    }
};

// console.log(obj.getData());

// console.log(this)  // this will refer current context of node. and current context of node and browser is different

// IFFE -- immeditly invoked function Expression

(   // () create a block automaticaly in js in which we can write iffe
    // function chai()=> console.log('it is named iffe')
    (name)=>{console.log(`db connected ${name}`);}   // function can take argument in it. it is simple iffe because it does not have name
)('ritik');   // ; is important to tell function to end its context. also we can pass argument will excutioing iffe
