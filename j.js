$(document).ready(function () {
  //Store the inputs from the user
  var inputs =[""];
  //String storing current input
  var totalString;
  //validation variable without .
  var operators1 = ["+", "-", "/", "*"];
  //validation variable with .
  var operators2 = ["."];
  //valitadtion of numbers
  var nums = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input) {
    if (operators2.includes(inputs[inputs.length-1]===true && input===".")) {
      console.log("Dot duplication");
    }
    else if (inputs.length===1 && operators1.includes(input)===false) {
      inputs.push(input);
    }
    //operator duplication
    else if (operators1.includes(inputs[inputs.length-1])===false) {
      inputs.push(input);
    }
    //check if we add the number
    else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }
//always updates the input from the users input
  function update(){
    totalString=inputs.join("");
    $("#steps").html(totalString);
  }
//result
  function getTotal() {
    totalString=inputs.join("");
    $("#steps").html(eval(totalString));
  }

  $("a").on("click", function() {
  if(this.id==="deleteAll"){
  inputs=[""]; //reset
  update();
  }
  else if (this.id==="backOne") {
    inputs.pop(); //popping off the last value
    update();
  }
  else if (this.id==="total") {
    getTotal();
  }
  else {
    if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1) {
      getValue(this.id);
    }
    else {
      getValue(this.id);
    }
  }
});

});
