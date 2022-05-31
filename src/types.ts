interface Param {
    firstName:string;
    lastName:string;
}

//try to use types for functions
type fullName = (x:Param) => string

const person:fullName = x => {
    return x.firstName + x.lastName;
}

console.log(person({firstName:"John", lastName:"Doe"}))




