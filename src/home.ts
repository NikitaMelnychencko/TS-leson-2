// first tusk
//Задайте правильные ts типы, для классических js;

let age:number = 50;
let name1:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:undefined = undefined;
let callback = (a: number): number => { return 100 + a };

// second tusk
//Задавайте тип для переменной в которую можно сохранить любое значение

let anything:any = -20; 
anything = 'Text';
anything = {};

//Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some1:unknown;
some1 = 'Text';

let str1: string;

if (typeof some === 'string') {
  str = some;
}

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
let person1: [string, number];
person1 = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Status { LOADING, READY };

const page = {
  load: Status.READY
}

if (page.load === Status.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Status.READY) {
  console.log('Страница загружена');
}
// Сделайте переменную, которая может принимать или строку или число.
let moo: number|string
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let literal: 'enable' | 'disable';
// Укажите типы для следующих функций

function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}
//Создайте свой тип данных на основе имеющихся данных.

type DbDate =  {
  title: string,
  likes: number,
  accounts: string[],
  status:'open' | 'close'
  details?: {
    createAt: string,
    updateAt: string,
  }
}

const page1:DbDate = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2:DbDate = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
let vart:number