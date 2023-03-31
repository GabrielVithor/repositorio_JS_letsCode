let btnAdd = document.getElementById('add');
let toDo = document.getElementById('toDo');
let keysBD = 0;

btnAdd.addEventListener('click', createCard);

function createCard() {
    let card = document.createElement('div');
    let form = document.createElement('form');
    let label_titulo = document.createElement('label');
    label_titulo.setAttribute('for', 'name');
    label_titulo.textContent = "Titulo";
    let titulo = document.createElement('input');
    titulo.setAttribute('name', 'titulo');
    let descricao = document.createElement('textarea');
    descricao.setAttribute('name', 'descricao');
    let label_descricao = document.createElement('label');
    label_descricao.setAttribute('for', 'descricao');
    label_descricao.textContent = "Descrição";
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    let btnSave = document.createElement('button');
    btnSave.classList.add('save');
    btnSave.addEventListener('click',saveCard);
    btnSave.innerHTML = `<i class="fas fa-save"></i>`;
    let btnCancel = document.createElement('button');
    btnCancel.classList.add('cancel');
    btnCancel.innerHTML = `<i class="fas fa-minus-circle"></i>`;

    card.classList.add('card')

    buttons.appendChild(btnSave);
    buttons.appendChild(btnCancel);

    form.appendChild(label_titulo);
    form.appendChild(titulo);
    form.appendChild(label_descricao);
    form.appendChild(descricao);
    form.appendChild(buttons);

    card.appendChild(form);

    toDo.insertBefore(card,add);

}

function saveCard(event){
    event.preventDefault();
    let form = event.target.parentElement.parentElement.parentElement;
    let formData = new FormData(form);
    let titulo_value = formData.get('titulo');
    let descricao_value = formData.get('descricao');
    let titulo = document.createElement('h3');
    let descricao = document.createElement('p');

    let icons = document.createElement('div');
    icons.classList.add('icons');

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit');
    btnEdit.addEventListener('click',editCard);
    btnEdit.innerHTML = `<i class="fas fa-edit"></i>`;

    let btnRemove = document.createElement('button');
    btnRemove.classList.add('remove');
    btnRemove.addEventListener('click',removeCard);
    btnRemove.innerHTML = `<i class="far fa-trash-alt"></i>`;

    titulo.textContent = titulo_value;
    icons.appendChild(btnEdit);
    icons.appendChild(btnRemove);

    titulo.appendChild(icons)

    descricao.textContent = descricao_value;

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    newCard.appendChild(titulo);
    newCard.appendChild(descricao);

    toDo.insertBefore(newCard,add);
    toDo.removeChild(form.parentElement);
}

function removeCard(e){
    e.preventDefault();

    let card = e.target.parentElement.parentElement.parentElement.parentElement;

    toDo.removeChild(card);
}

function editCard(e){

}