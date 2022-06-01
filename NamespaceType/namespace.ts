namespace StringUtility 
{
    function ToCapital(str: string): string {
        return str.toUpperCase();
    }
    console.log(ToCapital("Typescript"))
    function SubString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }
    console.log(SubString("Typescript", 2, 6))
}


//By default, namespace components cannot be used in other modules or namespaces.
// You must export each component to make it accessible outside, using the export keyword as shown below.

//Use export in Namespace Copy
namespace StringUtility {

    export function ToCapital(str: string): string {
        return str.toUpperCase();
    }

    export function SubString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }
}

export class Emploe {
    empCode: number;
    empName: string;
    constructor(empName: string, empCode: number) {
        this.empName = StringUtility.ToCapital(empName);//using utility
        this.empCode = empCode;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}