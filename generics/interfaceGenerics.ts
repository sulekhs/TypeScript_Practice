interface Tab <T>{
    id:number;
    position: number;
    data:any;
}

type numberTab = Tab <number>

type stringTab = Tab <string>


interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number:number) => number; // arrow function
    getManagerName(number:string): string; 
}

//Interface function Type
interface KeyValueProcessor
{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value:string):void { 
    console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}
    
let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 


//Interface as ArrayType
interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];
console.log(numArr);//[1,2,3]

interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

console.log(strArr);//{"TS":"Typescript", "JS":"Javascript"}