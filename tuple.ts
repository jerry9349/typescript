// 튜플 (Tuple)

let b:[string, number];
b = ['z',1];
console.log(b);

b[0].toLowerCase();
//b[1].toLowerCase();


// void, never
function sayHello():void{
    console.log('hello');
}
function showError():never{
    throw new Error();
}
function infLoof():never{
    while(true){
        // do something..
    }
}


// enum
enum Os {
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}
let myOs:Os;
myOs = Os.Window;


// null, undefined
let aa:null = null;
let bb:undefined = undefined;


