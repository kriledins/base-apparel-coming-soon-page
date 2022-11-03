function validateEmail(text) {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!text.value.match(emailFormat)) {
        document.getElementById("message").innerHTML = "Please provide a valid email";
    }
}