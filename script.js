const rColor = document.getElementById("red")
const gColor = document.getElementById("green")
const bColor = document.getElementById("blue")
const copyBtn = document.getElementById("copy-btn")
const result = document.querySelector(".result input")
const sliders = document.querySelectorAll(".wrapper input[type='range']");


let generateColor= ()=>{

     let rColorValue = rColor.value;
     let gColorValue = gColor.value;
     let bColorValue = bColor.value;

     let finalColor = `rgb(${rColorValue}, ${gColorValue},${bColorValue})`
     result.value=finalColor;
     document.body.style.backgroundColor = finalColor;


};

sliders.forEach((a)=>{
     a.addEventListener("input", generateColor);
})
