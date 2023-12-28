function setUserName(userName){   // the execution context of this method is getting deleted once the function completed it processing.
    this.userName=userName   // before calling it with call method the userName is getting stored in the current context of setUserName function.
}                            // but after calling with call method the this is refer as the current context of userDetail function

function userDetail(userName,job,age){
    // setUserName(userName); // it will not set userName value in userDetail function current context

    setUserName.call(this,userName)  // call method pass current context of function to other function. we can provide this as its first argument. call method is holding the refrence of current function this
    this.job=job;
    this.age=age;
}

const user=new userDetail('ritik','developer',22);