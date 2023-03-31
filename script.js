const error = document.getElementById("error");
const button = document.getElementById("button_1");
const input = document.getElementById("input_1");

button.addEventListener("click", emailValidation);
function emailValidation() {
    if (regex.test(input.value)) {
        error.style.display = "none";
        input.style.border = "2px solid green";
        setTimeout(() => {
            input.style.border = "none"
        }, "2000")
    } else {
        error.style.display = "block";
        input.style.border = "2px solid red"
        setTimeout(() => {
            error.style.display = "none";
            input.style.border = "none"
        }, "2000")
    }
    
}
let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
