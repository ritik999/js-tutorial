const descripter=Object.getOwnPropertyDescriptor(Math,'PI');  // getOwnPropertyDescriptor provider description about the property of specific object

// we can't overwrite PI in js because the hidden property writable is false
// and it is so in-detailed and in-deepth hardcoded that we can't overwrite them


// console.log(descripter);  // will print description

// Object.defineProperty(Math,'PI',{    // we can't do this with PI
//     writable:true
// })

Math.PI=4;   // will not get over-write
// console.log(Math.PI);

// we can define our own properties in such way

const chai={
    name:'abc',
    price: 250,
    avlb:false,

    check:function(){
        console.log('checking');
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,'name'))

Object.defineProperty(chai,'name',{
    writable:false,    // we are making writable property false so no one can overwrite name
    enumerable:false,  // it will stop name from getting iterate
})

chai.name='rmb';  // the property name will not get overwrite
// console.log(chai.name);


// for-of loop for iterating obj
// by default obj is not iteratable


for(let [key,val] of Object.entries(chai)){    // by doing Object.entries(chai) we can iterate it
    if(typeof val !== 'function'){
        console.log(val);      // as we have make name property of chai enumerable false so it will not show 
    }
}


// easy way of iterating obj using for in-loop

// for(let val in chai){
//     console.log(val);
// }