let shop_list = [];

shop_list.push("Milk","Bread","Apples");
console.log(shop_list);

shop_list.splice(1,1,"Bananas","Eggs");
console.log(shop_list);

console.log(shop_list.pop());

shop_list.sort()
console.log(shop_list);

console.log(shop_list.indexOf("Milk"));

shop_list.splice(1,0,"Carrots", "Lettuce");
console.log(shop_list);

let new_list=["Juice", "Pop"];

combined_list=shop_list.concat(new_list,new_list);
console.log(combined_list);