//Array Generics
type numberArray = Array<number>//array of numbers generic

//Generic Array
const last = <T>(arr: Array<T>) => {
    return arr[arr.length - 1];
};

const l = last([1,2,3]);

const l2 = last(['s','v','p','c']);

//Also can be done like this
const lastNum = <T>(arr: T[]) => {
    return arr[arr.length - 1];
};

const l3 = last([42,73]);

const l4 = last(['s','v','t','p']);


//explicitly mentioning type and return type
const lastNumber = <T>(arr: T[]) : T=> {
    return arr[arr.length - 1];
};

const l5 = last<number>([42,73,85,95]);

const l6 = last<string>(['s','v','t','p']);

//Taking Two Types like Tuples Generics
const makeArray = <X, Y>(x:X, y:Y) : [X, Y] => {
    return [x, y];
};

const v = makeArray(5, 'b');
const v2 = makeArray('a', 7);


//Taking Two Types like Tuples Generics
const makeArrayExp = <X, Y>(x:X, y:Y) : [X, Y] => {
    return [x, y];
};

const v5 = makeArrayExp(5, 'b');
const v6 = makeArrayExp<string|null, number>('a', 7);
