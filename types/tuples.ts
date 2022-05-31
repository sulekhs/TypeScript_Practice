//tuples
const user:[string, number] = ["Johndoe", 28];
console.log(user);

const employee: [number, string, boolean] = [1, "Steve", true];

var users: [number, string, boolean, number, string];// declare tuple constiable
users = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

//array of tuple
var emp1: [number, string][];
emp1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
//accessing array elements
emp1[0]; // returns [1 "Steve"]
emp1[1]; // returns [2 "Bill"]


//push in tuples
var emp2: [number, string] = [1, "John"];
emp2.push(2, "Bill"); 
console.log(emp2); //Output: [1, 'John', 2, 'Bill']


//concat
var emp3: [number, string] = [1, "John"];

// retrieving value by index and performing an operation 
emp3[1] = emp3[1].concat(" doe"); 
console.log(emp3); //Output: [1, 'John doe']
