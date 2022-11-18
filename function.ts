// 함수

function hello(name:string, age?:number | undefined):string {
    if (age !== undefined){
        return `Hello, ${name}. You ar ${age}.`;
    } else {
        return `Hello, ${name}.`;
    }
}

console.log(hello("sam"));
console.log(hello("sam",30));
console.log(hello("sam",undefined));

// 여러개의 숫자를 array로 받는다
function add(...nums: number[]){
    return nums.reduce((result, num) => result + num, 0);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);


///////////////////////////////////////////////////////////////

interface User {
    name : string;
}

const Sam : User = {name:'sam'}

// 1번째 방법
function showName(this:User){
    console.log(this.name); // this타입이 결정되지 않음
}

// 두번째 방법
function showName2(this:User, age:number, gender:'m'|'f'){
    console.log(this.name, age, gender);
}


const a = showName.bind(Sam);
const a2 = showName2.bind(Sam);
a();
a2(30,'m');



///////////////////////////////////////////////////////////////

interface User {
    name : string;
    age : number;
}

// 데이터 역할을 하는 join 함수
// 오버로드 작성
function join(name:string, age:string) : string;
function join(name:string, age:number) : User;
function join(name:string, age:number | string) : User | string{
    if (typeof age === "number"){
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요.";
    }
}

const sam:User = join("sam",30);
const jane:string = join("jane","30");
