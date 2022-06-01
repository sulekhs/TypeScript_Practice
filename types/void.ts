//if a function does not return any value then you can specify void as return type.
function sayHi(): void { 
    console.log('Hi!')
} 

let speech: void = sayHi(); 
console.log(speech); //Output: undefined


//There is no meaning to assign void to a variable, as only null or undefined is assignable to void.