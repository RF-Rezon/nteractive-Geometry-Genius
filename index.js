
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

let cards = document.getElementsByName("kalar");
const message = document.getElementById("p01");
message.innerHTML = "";

for (var i = 0; i < cards.length; i++) {
  cards[i].onmouseover = function () {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    var colorString = "0px 0px 30px 0px " + color;
    this.style["background-color"] = colorString;
    this.style["-webkit-box-shadow"] = colorString;
    this.style["-moz-box-shadow"] = colorString;
  };
}

let bigX = function (name, final) {
  let div = document.createElement("div");
  let textNode = document.createTextNode(`${name} : ${final} cm`);
  let sup = document.createElement("sup");
  let power = document.createTextNode("2");
  sup.appendChild(power);
  div.appendChild(textNode);
  div.appendChild(sup);

  let containerDiv = document.querySelector("#sideTextArea");
  containerDiv.appendChild(div);
};

let mathOperationOne = function (width, length) {
  return +width.value * +length.value;
};
let mathOperationTwo = function (width, length) {
  return +width.value * +length.value * 0.5;
};
let mathOperationThree = function (width, length) {
  let bigNum = Math.PI * +width.value * +length.value;
  return bigNum.toFixed(2);
};

let fuctions_caller_fuction = function (targetBtn, width, length, targetPropety) {
  targetBtn.addEventListener("click", function () {

    try{
        if (width.value == "" || length.value == "") throw "Inputs shouldn't empty. Fill it please.";
        if(width.value <= 0 || length.value <= 0) throw "Invalid input. Please input greater than 0";

        if (targetPropety == "#paraName" || targetPropety == "#recName") {
            let x = mathOperationOne(width, length);
            let name = document.querySelector(targetPropety).innerText;
            bigX(name, x);
          } else if (targetPropety == "#elliName") {
            let x = mathOperationThree(width, length);
            let name = document.querySelector(targetPropety).innerText;
            bigX(name, x);
          } else {
            let x = mathOperationTwo(width, length);
            let name = document.querySelector(targetPropety).innerText;
            bigX(name, x);
          }
    }catch(ex){
        message.innerHTML = ex;
    }
   

     
  });
};

fuctions_caller_fuction(triButton, triWidth, triLength, "#triName");
fuctions_caller_fuction(recButton, recWidth, recLength, "#recName");
fuctions_caller_fuction(paraButton, paraWidth, paraLength, "#paraName");
fuctions_caller_fuction(rhombusButton, rhombusWidth, rhombusLength, "#rhombusName");
fuctions_caller_fuction(pantaButton, pantaWidth, pantaLength, "#pantaName");
fuctions_caller_fuction(elliButton, elliWidth, elliLength, "#elliName");
