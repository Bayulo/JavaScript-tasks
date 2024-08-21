// function convert(){
//     var celcius = document.getElementById("temp").value;
//     const far = ((9/5)*celcius) + 32;
//     console.log(far);
//     const ans = document.getElementById("answer");
//     ans.textContent = far;
// }


const but = document.getElementById("butt");

but.addEventListener("click", convert);

function convert(){
    var celcius = document.getElementById("temp").value;
    const far = ((9/5)*celcius) + 32;
    const ans = document.getElementById("answer");
    ans.textContent = far;
}