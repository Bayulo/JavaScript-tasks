let age=prompt("what is your age: ");
let newAge = Number(age);
if(newAge>=21){
    console.log("You are free to enter and buy alcohol");
}
else if(newAge>=19){
    console.log("You are free to enter, but you can not buy alcohol");
}
else{
    console.log("Acess denied");
}