

const name = document.querySelector('#name');
const year = document.querySelector('#year');
const submit = document.querySelector('#submit');
const p = document.querySelector('.card-footer p');

submit.addEventListener('click', () => {

    if (name.value == '' || year.value == '') {
       p.innerHTML= `<p class= "alert alert-danger">All fields are required</p>`
    }else{
        p.innerHTML = age_cal(name.value, year.value);
        name.value = '';
        year.value = '';
    }    
})