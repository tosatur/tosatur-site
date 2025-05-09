var consonants = "bcdfghjklmnprstvwyz";
var vowels = "aeio";
var numbers = "12345";
var symbols = "@!";

function rcfs(string) {
    return string.charAt(Math.floor(Math.random() * string.length));
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

var checkbox = document.getElementById("symbolscheckbox");

function getpassword() {
    let number1 = rcfs(numbers);
    let number2 = parseInt(number1) + 1;

    let number3 = rcfs(numbers);
    if (number3 == number1) {
        number3 = parseInt(number3) + 2;
    } else if (number3 == number2) {
        number3 = parseInt(number3) + 1;
    }
    
    if (parseInt(number3) - 1 == parseInt(number2)) {
        number3 = parseInt(number3) + 1;
    }

    let number4 = parseInt(number3) + 1;

    let password;
    if (checkbox.checked == true) {
        password = capitalize(rcfs(consonants)) + rcfs(vowels) + rcfs(consonants) + rcfs(vowels) + number1 + number2 + number3 + number4 + symbols;
    } else {
        password = capitalize(rcfs(consonants)) + rcfs(vowels) + rcfs(consonants) + rcfs(vowels) + number1 + number2 + number3 + number4;
    }

    if (password[3] == password[1]) {
        password = password.replaceAt(3, "u");
    }

    if (password.slice(-2) == "10") {
        password = password.replaceAt(7, "");
        console.log(password);
    }

    document.getElementById("password").innerHTML = password;
}

getpassword();

document.getElementById("password").addEventListener("click", copypassword);

function copypassword() {
    var copyText = document.getElementById("password");
    navigator.clipboard.writeText(copyText.innerHTML);
}