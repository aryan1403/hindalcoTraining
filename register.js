function register() {
    // unhide the pass field
    // change the submit btn to register

    document.querySelector("div#passform").style.display = ""; 
    document.querySelector("button.authbtn").innerHTML = "Register";
}