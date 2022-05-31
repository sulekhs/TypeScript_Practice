abstract class Person {
    abstract name: string;

    display(): void{}
        
}

class Emply extends Person { 
    name: string;
    empCode: number;
    
    constructor(name: string, empCode: number) { 
        super(); // must call super()
        
        this.empCode = empCode;
        this.name = name;
    }
    display(): void {
        console.log(this.name + " " + this.empCode);
    }
}

let emp4: Person = new Emply("James", 100);
emp4.display(); //James 100