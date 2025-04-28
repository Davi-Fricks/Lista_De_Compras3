const conteinerListaComprado = document.getElementById("conteiner-lista-comprado");

const arrayComprados = JSON.parse(localStorage.getItem('itemArrayComprados')) || [];

export function verificarListaComprados() {
    debugger

    if (arrayComprados.length == 0) {
        conteinerListaComprado.style.display = "none";
    } else {
        conteinerListaComprado.style.display = "block";
    }

}