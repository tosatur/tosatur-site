const natoPhoneticAlphabet = {
    'A': 'ALPHA', 'B': 'BRAVO', 'C': 'CHARLIE', 'D': 'DELTA', 'E': 'ECHO', 'F': 'FOXTROT',
    'G': 'GOLF', 'H': 'HOTEL', 'I': 'INDIA', 'J': 'JULIETT', 'K': 'KILO', 'L': 'LIMA',
    'M': 'MIKE', 'N': 'NOVEMBER', 'O': 'OSCAR', 'P': 'PAPA', 'Q': 'QUEBEC', 'R': 'ROMEO',
    'S': 'SIERRA', 'T': 'TANGO', 'U': 'UNIFORM', 'V': 'VICTOR', 'W': 'WHISKEY', 'X': 'X-RAY',
    'Y': 'YANKEE', 'Z': 'ZULU'
};

function toNatoPhonetic(str) {
    return str.toUpperCase().split('').map(char => {
        return natoPhoneticAlphabet[char] || char;
    }).join(' ');
}

function go () {
    var input = document.getElementById("input-string").value;
    var output = toNatoPhonetic(input);
    document.getElementById("output-string").innerHTML = output;
    if (input.length <= 0) {
        document.getElementById("output-string").innerHTML = "Output";
    }
}

document.getElementById("input-string").focus();