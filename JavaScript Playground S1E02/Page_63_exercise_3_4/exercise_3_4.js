let myCar = {
    color: "blue",
    mark: "toyota",
    model: "corolla",
    top_speed: 250
};
let newVar= "color";
console.log(myCar[newVar]);
myCar[newVar]="red";
console.log(myCar[newVar]);

newVar="forSale";
myCar[newVar]="Yes";
console.log(myCar[newVar]);

console.log(myCar["mark"]);
console.log(myCar.model);