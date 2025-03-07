
let emailId = document.getElementById("input").value;


document.getElementById("email").value = emailId;
function validateForm() {
    var username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var cpasswordError = document.getElementById("cpasswordError");

    usernameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    cpasswordError.innerHTML = "";


    if (username === "") {
    usernameError.innerHTML = "*Username is required.";
    return false;
    }


    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos) < 2) {
        emailError.innerHTML = "*Please enter a valid email address.";
        return false;
    }


    if (password.length < 8) {
        passwordError.innerHTML = "*Password must be at least 8 characters long.";
        return false;
    }  


    if (password !== cpassword) {
        cpasswordError.innerHTML = "*Passwords do not match.";
        return false;
    }

    return true; 
}