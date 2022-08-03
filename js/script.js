function add() {
    var num1js = window.document.getElementById("numero1")
    var n1 = num1js.value
    var texto = document.createElement("li");
    texto.id = `${n1}`;
    texto.className = "linhas";

    texto.innerText = `${n1}`
    document.getElementById("myDIV").appendChild(texto);
}

function del() {
    num1js = window.document.getElementById("numero1")
    n1 = num1js.value
    const del = document.getElementById(`${n1}`)
    const parent = del.parentNode;
    parent.removeChild(del)
}