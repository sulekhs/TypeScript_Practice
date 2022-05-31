class EmployeeObj {
    public empName: string;
    protected empCode: number;

    constructor(empName: string, empCode: number){
        this.empName = empName;
        this.empCode = empCode;
    }
}

class SalesEmployee extends Employee{
    private department: string;

    constructor(empName:string, empCode:number, department:string){
        super(empCode, empName);
        this.department = department;
    }
    
    // constructor(empName: string, empCode: number, department: string) {
    //     super(empName, empCode);
    //     this.department = department;
    // }
}

let empObj = new SalesEmployee("John Smith", 123, "Sales");
empObj.empCode; //123