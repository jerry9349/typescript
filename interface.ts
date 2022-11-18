/*let user:object;

user = {
    name : 'xx',
    age : 30
}
// object는 특정 속성 값에 대한 정보가 없다.
console.log(user.name);
*/
type Score = 'A' | 'B' | 'C' | 'D' | 'F';

interface User{
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number; // readonly의 값은 최초만 간으하고 이후 수정 불가능
    [grade:number] : Score;
}

let user : User = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'F',
}
user.age = 10;
user.gender = "male"
//user.birthYear = 1900;

console.log(user.age);



interface Add {
    (num1:number, num2:number) : number;
}

const add : Add = function(x,y){
    console.log(x+y);
    return x + y;
}

add(10,20);


interface IsAdult {
    (age:number):boolean;
}

const a: IsAdult = (age) =>{
    return age > 19;
}

console.log(a(18)); //true








////////////////////////////////////////////////


// implements

interface Car {
    color : string;
    wheels : number;
    start() : void;
}

interface Benz extends Car{
    door : number;
    stop(): void;
}

const benz : Benz = {
    color : 'white',
    wheels : 4,
    door : 5,

    start(){
        console.log('go..');
    },
    
    stop(){
        console.log('stop');
    }
}

class Bmw implements Car {
    color;
    wheels = 4;

    constructor(c:string){
        this.color = c;
    }


    start(){
        console.log('go..');
    }
}

const b = new Bmw('green');
//console.log(b);

console.log(benz);


// 확장을 여러개도 가능하다
interface Toy {
    name : string;
}

interface ToyCar extends Car, Toy {
    price : number;
}
