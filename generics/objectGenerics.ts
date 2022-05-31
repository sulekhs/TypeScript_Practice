//try to use interfaces for objects
interface Person1{
    firstName:string;
    lastName:string;
    age?:number
}

//Extending Person Interface Generic Object adding personFullname field
const makePersonName = <T extends Person1 > (obj: T) => {
    return {
        ...obj,
        personFullDetails:obj.firstName + " " + obj.lastName + " " + obj.age
    };
};

const personNameWithGenerics = makePersonName({firstName:"John",lastName:"Doe", age:28});
console.log(personNameWithGenerics.personFullDetails);//accessing created field personfullname


//Generic for Object with two params default adding personFullname field
const makePersonNam = <T extends {firstname:string, lastname: string} > (obj: T) => {
    return {
        ...obj,
        personFullname:obj.firstname + " " + obj.lastname 
    };
};

const personNameWithGeneric = makePersonNam({firstname:"John",lastname:"Doe", age:28});
console.log(personNameWithGeneric.age);//accessing age field