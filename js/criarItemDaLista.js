import { criarItemData } from "./criarItemData.js";
import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

const arrayCompras = JSON.parse(localStorage.getItem('itemArrayCompras')) || [];
const arrayComprados = JSON.parse(localStorage.getItem('itemArrayComprados')) || [];

let contador = 0;

export function criarItemDaLista(item) {
    const objeto = {
        descricao: item.value
    };

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const objeto = {
            descricao: item
        };

        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        verificarListaVazia(listaDeCompras);

        if (checkboxInput.checked) {
            // Marcar como comprado
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);

            // Remove do array de compras
            const novoArray = arrayCompras.filter(obj => obj.descricao !== objeto.descricao);
            localStorage.setItem('itemArrayCompras', JSON.stringify(novoArray));
            if (localStorage.length == 0) {
                localStorage == '';
            }
            arrayCompras = novoArray;

            // Adiciona ao array de comprados
            arrayComprados.push(objeto);
            localStorage.setItem('itemArrayComprados', JSON.stringify(arrayComprados));
        } else {
            // Desmarcar como comprado
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);

            // Remove do array de comprados
            const novoArray = arrayComprados.filter(obj => obj.descricao !== objeto.descricao);
            localStorage.setItem('itemArrayComprados', JSON.stringify(novoArray));
            arrayComprados = novoArray;

            // Adiciona ao array de compras
            arrayCompras.push(objeto);
            localStorage.setItem('itemArrayCompras', JSON.stringify(arrayCompras));
        }

        verificarListaComprados(listaComprados);
        verificarListaVazia(listaDeCompras);
    });

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function () {
        const descricaoItem = objeto.descricao;

        // Tenta remover do array de compras
        let novoArrayCompras = arrayCompras.filter(obj => obj.descricao !== descricaoItem);
        let novoArrayComprados = arrayComprados.filter(obj => obj.descricao !== descricaoItem);

        // Atualiza o localStorage de compras
        localStorage.setItem('itemArrayCompras', JSON.stringify(novoArrayCompras));

        // Atualiza o localStorage de comprados
        localStorage.setItem('itemArrayComprados', JSON.stringify(novoArrayComprados));

        // Remove o item da tela
        excluirItem(itemDaLista);

        // Atualiza os arrays em memória também
        arrayCompras.length = 0;
        arrayComprados.length = 0;
        novoArrayCompras.forEach(item => arrayCompras.push(item));
        novoArrayComprados.forEach(item => arrayComprados.push(item));
    });



    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button")

    const itemData = criarItemData();

    botaoEditar.addEventListener("click", function () {
        editarItem(itemDaLista, itemData)
    })


    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);



    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);


    return itemDaLista;

}