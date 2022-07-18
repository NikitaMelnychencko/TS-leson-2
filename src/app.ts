let num: number;

num = 10;
num = -10;
num = 10.1;

let str: string;
str = "ssss";

let bool: boolean;

bool = true;
//arr
let arr: string[] = [];

arr = ["1", "2"];

let arrNumber: number[] = [];

arrNumber = [1, 2, 3];
let arrAny: any[] = [];

arrAny = [1, 2, 3, {}, "sds"];

let arrObject: { name: string }[];
arrObject = [{ name: "Alex" }, { name: "Tox" }];

// obj

let obj: { name: string };
obj = { name: "Alex" };
obj.name;

let data: {
  id: number;
  price: number;
  permission: string[];
  details?: {
    title: string;
    description?: string;
  };
};
data = {
  id: 1,
  price: 10.99,
  permission: ["read", "write"],
  details: {
    title: "New product",
  },
};

// any
let some2: any;

some2 = 1;
some2 = {
  title: "New product",
};
let nowNumber: number;

nowNumber = some2;

//Unknown

let some: unknown;
some = 10;

let numTwo: number;

if (typeof some === "number") numTwo = some; //type guard

//tuple

let fixed: [string, number];
fixed = ["str", 1];

fixed.push("new");
fixed.pop(); // because we didn't specify a read-only option

//Enum
enum Role {
  ADMIN,
  USER,
}
enum Toggle {
  ENABLE,
  DISABLE,
}
const service = {
  status: Toggle.ENABLE,
};

if (service.status === Toggle.ENABLE) console.log("It is active");
// Union Type

let union: number | string;

union = 12;
union = "2122";

function combine(param1: string | number, param2: string | number) {
  if (typeof param1 === "string" || typeof param2 === "string") {
    return param1.toString() + param2.toString();
  }
  return param1 + param2;
}

//Literal Type

let active: "start" | "end";
active = "start";

const fruit: string[] = [];
function workWithArr(arr:string[], value: string, action: "add" | "delete") {
  if (action === "add") {
    arr.push(value);
  } else {
    const index = arr.indexOf(value);
    arr.splice(index, 1);
  }
  return arr;
}
workWithArr(fruit, "Banana", "add");
workWithArr(fruit, "Momo", "add");
workWithArr(fruit, "Banana", "delete");

//function type

function print(): void {
  console.log(111);
}

function Combine(num1: number, num2: number): number {
  return num1 + num2;
}
//sicle
function NeverFunction(): never {
  throw new Error("Some error");
}
function createServerPerson(name: string) {
  return eval(`
   (()=>{
     return {
       name: '${name}'
     }
   })()
  `);
}
function createParson(name: string): { name: string } {
  return createServerPerson(name);
}
const person = createParson("Alex");

// Function Types
let foo: (param1: number, param2: string) => void;

foo = (param1: number, param2: string) => {
  console.log(`Some ${param1}, ${param2}`);
};

function culc(
  num1: number,
  num2: number,
  callback: (arrg1: number, arrg2: number) => number
) {
  return callback(num1, num2);
}
function loo(num1: number,
  num2: number,) {
  return num1+num2
}

//console.log(culc(1,3,loo));

//Custom Types


type DatabaseDate =  {
  id: number;
  price: number;
  permission: string[];
  details: {
    title: string;
    description?: string;
  }
}


const kuza: DatabaseDate = {
  id: 1,
  price: 10.99,
  permission: ['read', 'write'],
  details: {
    title: 'New product',
    description: 'This is awesome product!'
  }
}


