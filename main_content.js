function searchMovie(){
  var value1=document.getElementById("textbox").value;
  value1+=".html";
  var value2=document.getElementById("linkMovie");
  value2.href=value1;
  console.log(value1);
}
var var1=document.getElementById("back");
var1.href="HomePage.html";
console.log(var1)

function Validate(){
  var name=document.getElementById("name");
  var cardnum=document.getElementById("cardnum");
  var month=document.getElementById("exp");
  var year=document.getElementById("ExpYear");
  var cvv=document.getElementById("cvv");

  isValid=true;

  if (!name.checkValidity()) {
    document.getElementById("nameerror").innerHTML = name.validationMessage;
    isValid=false;
  } 
  else{
    document.getElementById("nameerror").innerHTML = "";
  }
  if (!cardnum.checkValidity()) {
    document.getElementById("numerror").innerHTML = cardnum.validationMessage;
    isValid=false;
  } 
  else{
    document.getElementById("numerror").innerHTML = "";
  }
  if (!month.checkValidity()) {
    document.getElementById("montherror").innerHTML = month.validationMessage;
    isValid=false;
  } 
  else{
    document.getElementById("montherror").innerHTML = "";
  }
  if (!year.checkValidity()) {
    document.getElementById("yearerror").innerHTML = year.validationMessage;
    isValid=false;
  } 
  else{
    document.getElementById("yearerror").innerHTML = "";
  }
  if (!cvv.checkValidity()) {
    document.getElementById("cvverror").innerHTML = cvv.validationMessage;
    isValid=false;
  } 
  else{
    document.getElementById("cvverror").innerHTML = "";
  }
  if(isValid===true){
    window.location="Successful.html"
  }
  return isValid;

}

  






  // var isValid=true;

  // if(name===""){
  //     document.getElementById("nameerror").innerHTML="Enter the card name";
  //     isValid=false;
  // }
  // if(cardnum===""){
  //   document.getElementById("numerror").innerHTML="Enter the Card number";
  //    isValid=false;
  // }
  // if(month===""){
  //   document.getElementById("montherror").innerHTML="Select the month";
  //   isValid=false;
  // }
  // if(year===""){
  //   document.getElementById("yearerror").innerHTML="Select the Year";
  //   isValid=false;
  // }
  // return isValid;









