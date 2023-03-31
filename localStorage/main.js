let form = document.querySelector('form');

form.addEventListener('input',(e) =>{
    let formData = new FormData(form);

    let user_data_form = {

        name : formData.get('name'),
        email : formData.get('email'),
        password : formData.get('senha')

    }
    sessionStorage.setItem("user_form_data",JSON.stringify(user_data_form));
   })


Object.keys(sessionStorage).forEach((e) => {
    console.log
})

window.onload = (e) =>{
    let inputName = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("senha");
    let data_form = JSON.parse(sessionStorage.getItem('user_form_data'));

    inputName.value = data_form.name;
    inputEmail.value = data_form.email;
    inputPassword.value = data_form.password;

    console.log(data_form);

}