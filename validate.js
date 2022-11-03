function validateEmail(text) {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!text.value.match(emailFormat)) {
        document.getElementById("message").innerHTML = "Please provide a valid email";
        document.getElementById("email").style.border = "3px solid var(--softred)";
    }
    else {
        document.getElementById("message").innerHTML = "";
    }
}