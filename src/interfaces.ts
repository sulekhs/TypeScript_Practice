//try to use interfaces for objects
interface Params{
    a:number;
    b:number;
}

const addTwo = (x: Params) => {
    return x.a + x.b;
}
console.log(addTwo({a:10,b:20}))