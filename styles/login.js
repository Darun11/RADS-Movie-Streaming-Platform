let username="";
function validateForm() {
  username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  localStorage.setItem('username',username);

  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");

  usernameError.innerHTML = "";
  passwordError.innerHTML = "";

  if (username === "") {
      usernameError.innerHTML = "*Username is required.";
      return false;
  }

  if (password.length < 8) {
      passwordError.innerHTML = "*Password must be at least 8 characters long.";
      return false;
  }


  return true; 
}

function nameDisplay(){
  let value1=document.getElementById("profileName");
  value1.innerHTML=localStorage.getItem('username');
  value1.style.opacity=1;
}
function nameRemove(){
  let value2=document.getElementById("profileName");
  value2.style.opacity=0;

}
