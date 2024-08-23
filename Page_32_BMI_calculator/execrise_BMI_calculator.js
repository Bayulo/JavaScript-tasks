let weight = 90;
let height = 40;

centi_height = (2.54*weight);
kilo_weight = (weight/2.2046);
console.log(height, "inches =", centi_height, "centimeters");
console.log(weight, "pounds =", kilo_weight, "kilograms");

let metre_height = 100*centi_height;
let BMI = (kilo_weight/((metre_height)**2));
console.log("Body Mass Index =", BMI);