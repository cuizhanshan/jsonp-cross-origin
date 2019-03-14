var a = 10;

(function a (){
    a = 20;
    console.log(this)
    console.log(a)
})()

console.log(a)