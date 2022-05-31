//class
class Employee {
    empCode: number;
    empName: string;

    constructor(empCode: number, name: string) {
            this.empName = name;
            this.empCode = empCode;
    }

    getSalary() : number {
        return 10000;
    }
}

const emp = new Employee(25, "Johndoe");
console.log(emp.empCode + " " + emp.empName + " " +emp.getSalary());//"25 Johndoe 10000"



//interface class 
interface IPerson {
    name: string;
    display():void;
}

interface IEmployee {
    empCode: number;
}

class Emp implements IPerson, IEmployee {
    empCode: number;
    name: string;
    
    constructor(empCode: number, name:string) {
        this.empCode = empCode;
        this.name = name;
    }
    
    display(): void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let per:IPerson = new Emp(100, "Bill");
per.display(); // Name = Bill, Employee Code = 100

let empl:IEmployee = new Emp(100, "Bill");
empl.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee' use IPerson extends IEmployee to make it work 


