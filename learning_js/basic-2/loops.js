const arr=[1,2,3,4,5];

// for-of loop use to ittrete array
for(const ele of arr){
    console.log(ele);
}

// const name='ritik';

// for(const ch of name){
//     console.log(ch);
// }


// MAP

//-- Map is type of array which store data in key value form
//-- Map have unique datas
//-- Map remember the insertion order
const mData=new Map();
mData.set('In', 'india');
mData.set('Aus', 'Austrila');
mData.set('Eng', 'England');

// console.log(mData);

for(const key of mData){   // it will return whole key-value paire as an array. to get key and value seprately de-structure the array
    console.log(key);
}

// destructuring process
// for(const [key,value] of mData){
//     console.log(`key is ${key} and its value is ${value}`);
// }


// if we try to itrate obj with for-of loop then it will throw error

const obj1={
    name:'ritik',
    age:22,
    place:'delhi'
};

// for(const item of obj1){      // it will throw error that obj1 is not iterable
//     console.log(item);
// }


// for iterating obj we have to use for-in loop

for(const item in obj1){   // for in will only return key of obj. to get both key and value we need to destructure array like we did above
    console.log(item);
}


// for(const arr in obj1){
//    console.log(item)   // here it will print key(index) of array because array is also a kind of obj.
// }

arr.forEach((ele)=>{  // for each does not return any thingh. it only use for print elements
    console.log(ele)
    //return ele;    // will not work
})
