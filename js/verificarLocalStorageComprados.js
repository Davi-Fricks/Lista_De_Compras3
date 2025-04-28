import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-comprados");

export function verificarLocalStorageComprados() {
    debugger
    const arrayComprados = JSON.parse(localStorage.getItem('itemArrayComprados')) || [];

    if (arrayComprados.length > 0) {
        debugger
        arrayComprados.forEach(arrayComprasItem => {
            const itemDaLista = criarItemDaLista(arrayComprasItem.descricao);
            listaComprados.appendChild(itemDaLista);
            
            const checkboxCustomizado = document.querySelector(".checkbox-customizado");
            const itemTitulo = document.querySelector("#item-titulo");
            
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
        });
    }

}