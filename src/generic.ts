//Есть функция которая возвращает Promise, он возвращает массив строк и чисел, опишите правильно тип.
function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(['Text', 50])
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});

//У вас есть следующий тип данных

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

//Есть функция, она принимает два аргумента, в один попадает name и color в другую часть position и weight. 
//Нужно явно указать, что эти поля из AllType.И сама функция возвращает AllType.Воспользуйтесь Pick.

function compare(top: Pick<AllType,'name'|'color' > , bottom: Pick<AllType,'position'|'weight' >) {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

//Укажите дженерики для функции объединения объектов.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//У вас есть следующие классы
//Только добавляя дженерики для классов и интерфейс уберите ошибку.
class Component<T> {
  constructor (public props:T) {

  }
}

interface IProps {
  title: string
}

class Page extends Component<IProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}