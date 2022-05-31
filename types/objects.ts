//try to use interfaces for objects
interface Person{
    firstName:string;
    lastName:string;
    age?:number
}

//adding field fullName 
const makeFullName = (obj: Person) => {
    return {
        ...obj,
        fullname:obj.firstName + " " + obj.lastName + " " + obj.age
    };
};

const personName = makeFullName({firstName:"John",lastName:"Doe", age:28});
console.log(personName);
//{
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 28,
//     "fullname": "John Doe 28"
//   }



//type declarations
const initialState : UserStateProps = {
    currentUser:null,
    isFetching: false,
    error: false,
    location: null
};
export type UserStateProps = {
    currentUser: CurrentUserType | null;
    isFetching:boolean;
    error:boolean;
    location?: number | null;
}

export type CurrentUserType = {
    id: number;
    accessToken: string;
    createdAt: string;
    email: string;
    emailToken: string;
    isAdmin: boolean;
    isReporter: boolean;
    rep_approval: boolean;
    updatedAt: string;
    username: string;
}