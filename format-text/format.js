
function format(changeCase) {
    if (changeCase == "upper") {
        document.form1.texto.value = document.form1.texto.value.toUpperCase()
    } else {
        document.form1.texto.value = document.form1.texto.value.toLowerCase()
    }
    if (changeCase == "capitalized") {
        document.form1.texto.value = document.form1.texto.value.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        })

    }
}

function justifyText() {
    document.getElementById("myText").style.textAlign = "justify";

}

function alignRight() {
    document.getElementById("myText").style.textAlign = "right";

}
function alignLeft() {
    document.getElementById("myText").style.textAlign = "left";

}
function alignCenter() {
    document.getElementById("myText").style.textAlign = "center";

}

function Copy() {

    var copyText = document.getElementById("myText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("texto copiado: " + copyText.value);
}

