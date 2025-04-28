import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";
import {verificarLocalStorageComprados} from "./js/verificarLocalStorageComprados.js";
import {verificarLocalStorageComprar} from "./js/verificarLocalStorageComprar.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);
debugger
verificarLocalStorageComprar();
verificarLocalStorageComprados();
verificarListaComprados();
