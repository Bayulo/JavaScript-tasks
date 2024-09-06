let num = prompt("Enter a number: ");
let randNum = Math.random();
randNum *= 10;
randNum = Math.floor(randNum);
if(num>randNum){
    console.log(num, "is greater than", randNum);
}
else if(num<randNum){
    console.log(num, "is less than", randNum);
}
else{
    console.log(num, "is equal to", randNum);
}