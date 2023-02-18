let triWidth = document.querySelector("#triWidth");
let triLength = document.querySelector("#triLength");
let triButton = document.querySelector("#btnTri");

let recWidth = document.querySelector("#recWidth");
let recLength = document.querySelector("#recLength");
let recButton = document.querySelector("#btnRec");

let paraWidth = document.querySelector("#paraWidth");
let paraLength = document.querySelector("#paraLength");
let paraButton = document.querySelector("#btnPara");

let rhombusWidth = document.querySelector("#rhombusWidth");
let rhombusLength = document.querySelector("#rhombusLength");
let rhombusButton = document.querySelector("#btnRhombus");

let pantaWidth = document.querySelector("#pantaWidth");
let pantaLength = document.querySelector("#pantaLength");
let pantaButton = document.querySelector("#btnPanta");

let elliWidth = document.querySelector("#elliWidth");
let elliLength = document.querySelector("#elliLength");
let elliButton = document.querySelector("#btnElli");

let bigX = function(name,final){
    let div = document.createElement('div');
    let textNode = document.createTextNode(`${name}: ${final}`);
    div.appendChild(textNode);

    let containerDiv = document.querySelector("#sideTextArea");
    containerDiv.appendChild(div);
}

let mathOperationOne = function(width, length){
   return +width.value * +length.value;
}
let mathOperationTwo = function(width, length){
   return +width.value * +length.value * 0.5;
}

let fuctions_caller_fuction = function(targetBtn, width, length, targetPropety){
     targetBtn.addEventListener("click", function () {

        if(targetPropety !== '#paraName' || '#recName' || '#elliName'){
            let x = mathOperationTwo(width,length);
            let name = document.querySelector(targetPropety).innerText;
        bigX(name,x);
        }else{

            let x = mathOperationOne(width,length);
            let name = document.querySelector(targetPropety).innerText;
            bigX(name,x);
        }

      });
     
}

fuctions_caller_fuction(triButton,triWidth,triLength,'#triName');
fuctions_caller_fuction(recButton,recWidth,recLength,'#recName');
fuctions_caller_fuction(paraButton,paraWidth,paraLength,'#paraName');
fuctions_caller_fuction(rhombusButton,rhombusWidth,rhombusLength,'#rhombusName');
fuctions_caller_fuction(pantaButton,pantaWidth,pantaLength,'#pantaName');
fuctions_caller_fuction(elliButton,elliWidth,elliLength,'#elliName');

