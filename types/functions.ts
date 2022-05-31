
//function with return type string and params as number
const calculateTax = (x:number, income:number) => {
    let y:number = income / x ;
    return `your tax is ${y}`;
};
console.log(calculateTax(10,20));


//function with undefined parameter 1st way if you know it is defined use !
const calculateTaxes = (x:number, income?:number) : string => {
    let y:number = income! / x ;//here income is undefined
    return `your tax is ${y}`;
};
console.log(calculateTaxes(10,30));

//function with undefined parameter 2nd way 
const subtractnumbers = (x:number, y?:number) => {
    if(y){
        return x - y;
    }
    else {
        return x;
    }
};
console.log(subtract(10))

//Function lacks ending return statement and return type does not include 'undefined' if else part condition is not specified
const calculateTaxs = (income:number) : number => {//error
    if(income < 50000)
        return income * 1.2;
    //return income * 1.3;  //to avoid error uncomment this statement  
};
console.log(calculateTaxs(10));