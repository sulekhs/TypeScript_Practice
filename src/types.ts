interface Param {
    firstName:string;
    lastName:string;
}

//try to use types for functions
type fullName = (x:Param) => string

const person:fullName = x => {
    return x.firstName + x.lastName;
}

console.log(person({firstName:"John", lastName:"Doe"}));


//Extending a type via intersections

type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}
const getBear  = (props:Bear)  => {
    console.log(props.name + " " + props.honey);
}
const bear = getBear({name:'lion',honey: true}) 
  

//Extending an interface

interface Animl {
    name: string
  }
  
  interface Beaar extends Animl {
    honey: boolean
  }
  
  const getBeaar  = (props:Beaar)  => {
    console.log(props.name + " " + props.honey);
}
const beaar = getBeaar({name:'lion',honey: true})




