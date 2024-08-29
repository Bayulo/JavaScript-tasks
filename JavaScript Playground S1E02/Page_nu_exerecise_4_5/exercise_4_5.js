let num = prompt("Enter a number between 0 and 10: ");
let new_number = Number(num);
let outPutVar = "My Selection: ";
switch(new_number){
    case 1:
    case 2:
    case 3:
        console.log("You've won a car and a house");
        break;
    case 4:
    case 5:
    case 6:
        console.log("You've won a car");
        break;
    case 7:
    case 8:
        console.log("You've won a 5000");
        break;
    case 9:
    case 10:
        console.log("You've won a 500 francs airtime");
        break;
    default:
    console.log("You entered an invalid number.");
    }