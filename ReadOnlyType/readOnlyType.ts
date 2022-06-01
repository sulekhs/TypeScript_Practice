//readOnly Interface
interface EEmplno {
    readonly empCode: number;
    empName: string;
}

let empOb:EEmplno = {
    empCode:1,
    empName:"Steve"
}

empOb.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'



//readOnly Type
interface IEmployaa {
    empCodeaa: number;
    empName: string;
}

let empono1: Readonly<IEmployaa> = {
    empCodeaa:1,
    empName:"Steve"
}

empono1.empCodeaa = 100; // Compiler Error: Cannot change readonly 'empCode'
empono1.empName = 'Bill'; // Compiler Error: Cannot change readonly 'empName'

let empono2: IEmployaa = {
    empCodeaa:1,
    empName:"Steve"
}

empono2.empCodeaa = 100; // OK