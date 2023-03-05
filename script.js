let button = document.getElementById("submit");

button.addEventListener('click', (event)=> {
    let pass = document.getElementById("password");
    let confirm = document.getElementById("confirm_password");
    if(pass.value !== confirm.value){
        confirm.setCustomValidity("Password does not match.");
    } else {
        confirm.setCustomValidity("");
    }
})