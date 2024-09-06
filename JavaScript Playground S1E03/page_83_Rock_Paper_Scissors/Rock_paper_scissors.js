let choiceList = ["rock", "paper", "scissors"];
let randChoice = (Math.random()) * 10;
randChoice = Math.floor(randChoice);
randChoice %= 3;
let choice = prompt("rock, paper or scissors:");
if(choice.toLowerCase() === choiceList[randChoice]){
    console.log("its a tie");
}
else if(choice.toLowerCase() === "rock" && choiceList[randChoice] === "scissors"){
    console.log("The computer picked ", choiceList[randChoice], ". congratulations, you won");
}
else if(choice.toLowerCase() === "rock" && choiceList[randChoice] === "paper"){
    console.log("Oops you lost. The computer picked", choiceList[randChoice]);
}
else if(choice.toLowerCase() === "paper" && choiceList[randChoice] === "scissors"){
    console.log("Oops you lost. The computer picked", choiceList[randChoice]);
}
else if(choice.toLowerCase() === "paper" && choiceList[randChoice] === "rock"){
    console.log("The computer picked ", choiceList[randChoice], ". congratulations, you won");
}
else if(choice.toLowerCase() === "scissors" && choiceList[randChoice] === "rock"){
    console.log("Oops you lost. The computer picked", choiceList[randChoice]);
}
else if(choice.toLowerCase() === "scissors" && choiceList[randChoice] === "paper"){
    console.log("The computer picked ", choiceList[randChoice], ". congratulations, you won");
}
else{
    console.log("Invalid input. Check spelling and try again");
}