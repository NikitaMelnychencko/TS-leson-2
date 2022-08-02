class House{
  private tenants: string[]=[];


  constructor(public readonly type:string, protected street: string) {
  }

  public showAddres(this:House, add: string):void {
    console.log('Address'+ this.street+' '+add);
  }
  public showType(this:House):void {
    console.log('Type'+this.type);
    
  }
  public addTenat(name:string) {
    this.tenants.push(name);
  }
  public showTenats() {
    console.log(this.tenants);
    
  }
}

const house = new House('wood','Middle-earth')
house.addTenat('Max')
house.addTenat('Nikita')

//house.tenants.push('Ann')//error

// const copyHouse = { showAddres: house.showAddres , street:'New Address'}

// copyHouse.showAddres('add')
class StoneHouse extends House{
  private chatgeOfTheHouse:string
  constructor(street:string, general:string) {
    super('stone', street)
    this.chatgeOfTheHouse = general
  }
  public showAddres():void {
    console.log('Address'+ this.street);
  }
  public showTenats() {
    console.log('General:'+this.chatgeOfTheHouse );
    super.showTenats()
  }
}
const stoneHouse = new StoneHouse('Stone-world','Max')

stoneHouse.addTenat('Max')
stoneHouse.addTenat('Nikita')
stoneHouse.showTenats()

//Static

class UseStatic{
  private static count = 0

  constructor() {
    UseStatic.count+=1
  }

  public static isStaticMethod() {
    console.log('I am static');
    
  }
  public showCount() {
    console.log(UseStatic.count);
    
  }
}

const obj1 = new UseStatic()
const obj2 = new UseStatic()
const obj3 = new UseStatic()

obj1.showCount()
obj2.showCount()
obj3.showCount()

UseStatic.isStaticMethod()

function count() {
  
}
function substringCustom() {
  
}

class MyLib{
  public static count() {
    
  }
  public static substringCustom() {
    
  }
}
MyLib.count()
MyLib.substringCustom()

//Abstract

abstract class Plane{
  protected pilotInCabin = false

  public sitInPlane() {
    this.pilotInCabin = true
  }
  public abstract startEngine():string
}

class Maize extends Plane{
  public startEngine() {
    return 'ta-ta-ta'
  }
}

class Boeing extends Plane{
  public startEngine() {
    return 'Buuuuu'
  }
}

const maize = new Maize()
const boeing = new Boeing()

maize.sitInPlane()
boeing.sitInPlane()

// interface obj

interface IPerson {
  readonly name: string
  age: number
  
  greet:(phrase:string)=>void
}
let user: IPerson

user = {
  name: 'Max',
  age: 21,
  greet(phrase: string) {
    console.log(phrase + " "+ this.name);
    
  }
}
// interface class

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  constructor(public name: string, public age: number) {
    this.checkAge()
  }
  private checkAge() {
    if (this.age < 28) {
      throw new Error ('Pilot to young')
    }
  }
  public greet(phrase: string) {
    console.log(phrase + " "+ this.name);
  }
  flyMessage(): void {
    console.log('Літак набрав висоту, приємного польоту');
    
  }
}

abstract class PrivatePlane{
  protected pilot?:IPilot

  public sitInPlane(pilot:IPilot) {
    this.pilot = pilot
  }
  public abstract startEngine():boolean
}

class ExOne extends PrivatePlane{
  public startEngine() {
  if (!this.pilot) {
      throw new Error('No pilot in cabin')
    }
    console.log('Запуск турбин');
    this.pilot.flyMessage()
    
    return true
  }
}

const exOne = new ExOne()


// const pilot = new Pilot('Max', 32)
// pilot.greet('Вас вітає капітан')
// pilot.flyMessage()
// exOne.sitInPlane(pilot)
// exOne.startEngine()


// home task 4 


interface Home {
  flyMessage(): void;
}

class Key {
  private signature: number
  constructor() {
    this.signature=Math.random()
  }
  public getSignature():number{
    return this.signature
  }
}
class Person {

  constructor(private key:Key) {}
  public getKey():Key{
    return this.key
  }
}

abstract class ComoonHouse {
  protected door = false;
  private tenants: Person[] = [];
  constructor (protected key:Key) {}

  comeIn (person: Person):void {
    if (!this.door) {
      throw new Error('Door is close');
    }

    this.tenants.push(person);
    console.log('Person inside');
  }

  abstract openDoor (key:Key): boolean;
}
class MyHouse extends ComoonHouse {
  openDoor (key:Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }

    return this.door = true;
  }
}

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);