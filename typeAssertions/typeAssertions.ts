//Type assertion allows you to set the type of a value and tell the compiler not to infer it. 
let code: any = 123; 
let employeeCode = <number> code; 
console.log(typeof(employeeCode)); //Output: number


//type asseertion with object
let employeet = { };
employeet.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
employeet.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'


//Example: Type Assertion with Object Copy
interface Employee { 
    name: string; 
    code: number; 
} 

let emplyee = <Employee> { }; 
emplyee.name = "John"; // OK
emplyee.code = 123; // OK
console.log(emplyee);


//we can also do it like this
interface Employe<T = string> { 
    name: T; 
    code: number; 
} 

let emplye : Employe = ({ name : "John",code : 123 })

console.log(emplye);


//type assertion
const x = "hello" as number;//error so convert like below 
const y = ("hello" as unknown) as number;
console.log(y);