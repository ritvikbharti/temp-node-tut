const amount= 12;
if(amount < 10){
    console.log("small number");
}else{
    console.log("large number");
}
console.log("My first node program");

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(()=>{
    console.log("hello babe");
},1000)