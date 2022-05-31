const express = require('express');

const dotenv = require('dotenv');
dotenv.config();
const app = express();


app.use(express.json());

//function with return type string and params as number
const add = (x:number, y:number) => {
    return x + y;
};

//function with undefined parameter 1st way 
const subtract = (x:number, y?:number) => {
    if(y){
        return x - y;
    }
    else {
        return x
    }
};

//function with undefined parameter useSparingly
const useSparingly = (x:number, y?:number) => {
    //@ts-ignore
    return x + y;
};

//function with undefined parameter useSparingly
const ifuKnowItisDefined = (x:number, y?:number) => {
    return x + y!;
};

app.get("/", (req: any) => {
    req.name = 'john';
    console.log(req.name);
    console.log(add(10,20));
    console.log(subtract(20));
    console.log(useSparingly(20));
    console.log(ifuKnowItisDefined(20,30));
})
app.listen(7500, '0.0.0.0', () => {
    console.log("Backend started on port 5500")
})


console.log("starting with typescript with node");