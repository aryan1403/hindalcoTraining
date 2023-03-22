function login() {
    // name;
    // email;
    // pass;

    var name = document.querySelector("input#namebox").value;
    var email = document.querySelector("input#emailbox").value;
    var pass = document.querySelector("input#passbox").value;

    document.querySelector("input#passbox").style.display = "none";
    console.log(name, email, pass);
}