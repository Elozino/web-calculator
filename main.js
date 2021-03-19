//Selecting document from the DOM
//Declaring variables for JS manipulation (To use is JS)
const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector("#text-output");
const btn = document.querySelectorAll(".btn");
const equalButton = document.querySelector(".btn-green");
const clearButton = document.querySelector(".btn-red");
const sinButton = document.querySelector(".sin");
const cosButton = document.querySelector(".cos");
const tanButton = document.querySelector(".tan");
const lnButton = document.querySelector(".ln");
const logButton = document.querySelector(".log");
const sqrtButton = document.querySelector(".sqrt");


//Creating all my the necessary event listener
equalButton.addEventListener("click", equalFunction);
clearButton.addEventListener("click", clearFunction) ; 

//Creating a Loop to loop through all the button & adding an event listener 
for(let i=0; i<btn.length; i++){
   btn[i].addEventListener("click", function(){
      //To get an attribute when looping through the button
      let parseInt = btn[i].getAttribute("data-num");
      textInput.value += parseInt; 
   } )
}

//Creating an equal button function
function equalFunction(){
   if (textInput.value === ""){
      alert("Input is empty")
   }
   else{
      let inputOperand = eval(textInput.value);
      textOutput.value = inputOperand;
   }
}

//Creating a clear button function
function clearFunction(){
   textOutput.value = "";
   textInput.value = "";
}

//To calculate square root
sqrtButton.addEventListener("click", function(){
      if(textOutput.value !== ""){
         textOutput.value = ""
      }
      else{
         var toSqrt = parseInt(textInput.value);
         var sqrtVal = Math.sqrt(toSqrt);
         textOutput.value = sqrtVal;
      }
   }
) 

//To calculate sin
sinButton.addEventListener("click", function(){
   var toSin = parseInt(textInput.value);
   var sinVal = Math.sin(toSin);
   textOutput.value = sinVal;
   }
) 

//To calculate cos
cosButton.addEventListener("click", function(){
   var toCos = parseInt(textInput.value);
   textOutput.value = Math.cos(toCos)
})

//To calculate tan
tanButton.addEventListener("click", function(){
   var toTan = parseInt(textInput.value);
   textOutput.value = Math.tan(ToTan);
})

//To calculate ln
lnButton.addEventListener("click", function(){
   var toLn = parseInt(textInput.value);
   textOutput.value = Math.LN10(toLn);

})
//To calculate log
logButton.addEventListener("click", function(){
   var toLog = parseInt(textInput.value);
   textOutput.value = Math.log(toLog);

})