import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";


const listaDeCompras = document.getElementById("lista-de-compras");

export function verificarLocalStorageComprar() {

    debugger
    const arrayCompras = JSON.parse(localStorage.getItem('itemArrayCompras')) || [];

    if (arrayCompras.length > 0) {
        arrayCompras.forEach(arrayComprasItem => {
            const itemDaLista = criarItemDaLista(arrayComprasItem.descricao);
            listaDeCompras.appendChild(itemDaLista)
        });
    }
        verificarListaVazia(listaDeCompras);
}