const a =() => {
    b();
    console.log("A is in stack")
};
const b =() =>{
    c();
    console.log("B is in stack");
};
const c =() =>{
    console.log("C is in the stack");
};

a();
