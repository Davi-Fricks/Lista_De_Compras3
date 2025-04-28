import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js"; 

const arrayCompras = JSON.parse(localStorage.getItem('itemArrayCompras')) || [];
const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    evento.preventDefault()

    if (item.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    
    const objeto = {
        descricao: item.value
    };

    arrayCompras.push(objeto);
    localStorage.setItem('itemArrayCompras', JSON.stringify(arrayCompras));

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras);
    item.value = "";
}