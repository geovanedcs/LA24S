const form = document.querySelector('#my-form');
//console.log(form);

const inputs = document.querySelectorAll('.required'); //nodelist
console.log(inputs);

const spanError = document.querySelectorAll('.error-message');
//console.log(spanError);

const messages = {
    emptyfield: "Preencha o campo {field}",
    shortName: "O campo nome deve ter no mínimo 2 caracteres",
    invalidEmail: "Informe um endereço de email válido. "
}

function validateInput(input, spanError){
    let error = false;
    let message;

    if(input.value.trim() ===''){
        error = true;
        message = messages.emptyfield.replace('{field}', input.name);
    }
    else if(input.name === 'name' && input.value.length < 2){
        error = true;
        message = messages.shortName;
    }
    else if(input.name === 'email' && !/\S+@\S+\.\S+/.test(input.value)){
        error = true;
        message = messages.invalidEmail;
    }

    if(error){
        spanError.textContent = message;
        spanError.style.display = 'block';
        spanError.classList.add('errofont');
        input.classList.add('erroinput');
    }else{
        spanError.textContent = '';
        spanError.style.display = 'none';
        input.classList.remove('errorinput');
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    inputs.forEach((input, index) => {
        validateInput(input, spanError[index]);
        
    })
})

form.addEventListener('blur', (e)=>{
    if(e.target.classList.contains('required')){
        validateInput(e.target, e.target.nextElementSibling);
    }
}, true)