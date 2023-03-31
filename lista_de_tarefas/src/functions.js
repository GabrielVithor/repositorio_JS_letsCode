let tarefaTitulo = document.getElementById("tarefaTitulo");
let tarefaDescricao = document.getElementById("tarefaDescricao");
let btnAdicionar = document.getElementById("btnAdicionar");
let lista = document.getElementById("tabela");

btnAdicionar.addEventListener('click', adicionarItem);


function adicionarItem() {
    adicionarEmLista();
    limparInputs();
}


function limparInputs() {
    tarefaTitulo.value = "";
    tarefaDescricao.value = "";
}

function adicionarEmLista() {
    let td = [];
    const TOTAL_COLUNAS = 3;
    let linha = document.createElement('tr');
    const checkBox = document.createElement('input');
    const btnDelete = document.createElement("button");

    for (i = 0; i < TOTAL_COLUNAS; i++) {
        td[i] = document.createElement('td');
    }


    td[0].innerHTML = '<td><span>' + tarefaTitulo.value + '</span></td>';
    td[1].innerHTML = '<td><span>' + tarefaDescricao.value + '</span></td>';
    td[2].appendChild(checkBox);
    td[2].appendChild(btnDelete);

    checkBox.setAttribute('type', 'checkbox');
    btnDelete.classList.add('delete');
    btnDelete.textContent = "Delete";


    for (i = 0; i < TOTAL_COLUNAS; i++) {
        linha.appendChild(td[i]);
    }
    checkBox.addEventListener('click', checkItem);
    btnDelete.addEventListener('click', removerItem);

    lista.appendChild(linha);
}



function removerItem(event) {
    let linha = event.target.parentElement;
    lista.removeChild(linha.parentElement);
}

function checkItem(event) {
    let linha = event.target.parentElement;
    let spans = linha.parentElement.getElementsByTagName('span');
    if (event.target.checked) {
        for (i = 0; i < spans.length; i++) {
            spans[i].style.textDecoration = "line-through";
        }
    } else {
        for (i = 0; i < spans.length; i++) {
            spans[i].style.textDecoration = "none";
        }
    }

}