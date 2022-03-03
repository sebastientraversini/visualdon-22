  
var input = document.querySelector("#rectangle");

console.log(input);
console.log(input.getAttribute("fill"));

input.addEventListener("click", function() {
    if ((input.getAttribute("fill"))=="red") {
        input.setAttribute("fill", "blue");
    }else{
        input.setAttribute("fill", "red");
    } 
});
