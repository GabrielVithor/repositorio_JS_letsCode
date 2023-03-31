
let form = document.getElementsByTagName("form")[0];

let errorEmail = document.querySelector('.errorEmail');
errorEmail.style.display  = 'none'; 

let btnSubmit = document.querySelector('button[type=submit]')
btnSubmit.setAttribute('disabled',true)

let user = new User();

form.oninput = function(e){
    let formData = new FormData(form);

    user.nome = formData.get('nome');
    user.sobrenome = formData.get('sobrenome');
    user.cpf = formData.get('cpf');
    user.email = formData.get('email');

    let formValid = user.nome !="" && user.sobrenome != "" &&  user.cpf != "" && user.email.includes("@");
    console.log(formValid)

    if(formValid){
        btnSubmit.removeAttribute('disabled');
    }else{
        btnSubmit.setAttribute('disabled',true)
    }

    if(!user.email.includes("@")){
        errorEmail.style.display = 'block';
    }else{
        errorEmail.style.display = 'none';
    }


}


form.onsubmit = (e) =>{
    e.preventDefault();
    console.log(user)
}