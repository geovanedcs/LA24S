export function loginComponent() {
    const login = document.createElement('div');
    login.classList.add('container', 'mt-5');
    login.style.height = '75vh';

    const div = document.createElement('div');
    div.classList.add('row', 'justify-content-center');

    const div2 = document.createElement('div');
    div2.classList.add('col-lg-5');

    const div3 = document.createElement('div');
    div3.classList.add('card', 'shadow-lg', 'border-0', 'rounded-lg', 'mt-5');

    const div4 = document.createElement('div');
    div4.classList.add('card-header', 'bg-dark', 'py-3');

    const h3 = document.createElement('h3');
    h3.classList.add('text-center', 'font-weight-light', 'my-4', 'text-white');
    h3.textContent = 'Login';

    const div5 = document.createElement('div');
    div5.classList.add('card-body');

    const form = document.createElement('form');

    const div6 = document.createElement('div');
    div6.classList.add('form-floating', 'mb-3');

    const input1 = document.createElement('input');
    input1.type = 'email';
    input1.classList.add('form-control');
    input1.id = 'inputEmail';
    input1.placeholder = '';
    input1.required = true;

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'inputEmail');
    label1.textContent = 'Email';

    div6.appendChild(input1);
    div6.appendChild(label1);

    const div7 = document.createElement('div');
    div7.classList.add('form-floating');

    const input2 = document.createElement('input');
    input2.type = 'password';
    input2.classList.add('form-control');
    input2.id = 'inputPassword';
    input2.placeholder = '';
    input2.required = true;

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'inputPassword');
    label2.textContent = 'Senha';

    div7.appendChild(input2);
    div7.appendChild(label2);

    const div8 = document.createElement('div');
    div8.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'mt-4', 'mb-0');

    const button1 = document.createElement('button');
    button1.type = 'button';
    button1.classList.add('btn', 'btn-primary');
    button1.textContent = 'Login';
    button1.addEventListener('click', () => {
        const email = document.querySelector('#inputEmail').value;
        const senha = document.querySelector('#inputPassword').value;
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.users.find(user => user.email === email && user.password === senha);
        if(user){
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'index.html';
        }else{
            alert('Email ou senha incorretos');
        }
    });

    const a = document.createElement('a');
    a.href = '#';
    a.textContent = 'Esqueceu a senha?'; 

    div8.appendChild(button1);
    div8.appendChild(a);

    form.appendChild(div6);
    form.appendChild(div7);
    form.appendChild(div8);

    div5.appendChild(form);

    div4.appendChild(h3);

    div3.appendChild(div4);
    div3.appendChild(div5);

    div2.appendChild(div3);

    div.appendChild(div2);

    login.appendChild(div);

    return login;

}

export function registerComponent() {
    const divRegister = document.createElement('div');
    divRegister.classList.add('container');

    const div = document.createElement('div');
    div.classList.add('row');
    
    const div2 = document.createElement('div');
    div2.classList.add('mt-5');

    const h1 = document.createElement('h1');
    h1.classList.add('text-center');
    h1.textContent = 'Cadastro';

    const form = document.createElement('form');
    form.classList.add('w-75', 'm-auto');

    const div3 = document.createElement('div');
    div3.classList.add('row', 'mb-3');

    const div4 = document.createElement('div');
    div4.classList.add('col');

    const label1 = document.createElement('label');
    label1.classList.add('form-label');
    label1.setAttribute('for', 'inputNome');
    label1.textContent = 'Nome';

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.classList.add('form-control', 'required');
    input1.id = 'inputNome';
    input1.name = 'nome';

    const span1 = document.createElement('span');
    span1.classList.add('error-message');
    span1.id = 'error-message-nome';

    div4.appendChild(label1);
    div4.appendChild(input1);
    div4.appendChild(span1);

    const div5 = document.createElement('div');
    div5.classList.add('col');

    const label2 = document.createElement('label');
    label2.classList.add('form-label');
    label2.setAttribute('for', 'inputEmail');
    label2.textContent = 'Email';

    const input2 = document.createElement('input');
    input2.type = 'email';
    input2.classList.add('form-control', 'required');
    input2.id = 'inputEmail';
    input2.name = 'email';

    const span2 = document.createElement('span');
    span2.classList.add('error-message');
    span2.id = 'error-message-email';

    div5.appendChild(label2);
    div5.appendChild(input2);
    div5.appendChild(span2);

    div3.appendChild(div4);
    div3.appendChild(div5);

    const div6 = document.createElement('div');
    div6.classList.add('row', 'mb-3');

    const div7 = document.createElement('div');
    div7.classList.add('col');

    const label3 = document.createElement('label');
    label3.classList.add('form-label');
    label3.setAttribute('for', 'inputPassword');
    label3.textContent = 'Senha';

    const input3 = document.createElement('input');
    input3.type = 'password';
    input3.classList.add('form-control', 'required');
    input3.id = 'inputPassword';
    input3.name = 'password';

    const span3 = document.createElement('span');
    span3.classList.add('error-message');
    span3.id = 'error-message-password';

    div7.appendChild(label3);
    div7.appendChild(input3);
    div7.appendChild(span3);

    const div8 = document.createElement('div');
    div8.classList.add('col');

    const label4 = document.createElement('label');
    label4.classList.add('form-label');
    label4.setAttribute('for', 'inputPassword2');
    label4.textContent = 'Confirmar senha';

    const input4 = document.createElement('input');
    input4.type = 'password';
    input4.classList.add('form-control', 'required');
    input4.id = 'inputPassword2';
    input4.name = 'password2';

    const span4 = document.createElement('span');
    span4.classList.add('error-message');
    span4.id = 'error-message-password2';
    
    div8.appendChild(label4);
    div8.appendChild(input4);
    div8.appendChild(span4);

    div6.appendChild(div7);
    div6.appendChild(div8);

    const div9 = document.createElement('div');
    div9.classList.add('row', 'mb-3');

    const div10 = document.createElement('div');
    div10.classList.add('col');

    const button1 = document.createElement('button');
    button1.type = 'button';
    button1.classList.add('btn', 'btn-primary');
    button1.textContent = 'Cadastrar';
    button1.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.required'); 
        const spanError = document.querySelectorAll('.error-message');
        inputs.forEach((input, index) => {
            validateInput(input, spanError[index]);
        })
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = {
            id: users.length + 1,
            name: document.querySelector('#inputNome').value,
            email: document.querySelector('#inputEmail').value,
            password: document.querySelector('#inputPassword').value
        }
        console.log(users.find(u => u.email === user.email));
        if(users.find(u => u.email === user.email)){
            alert('Email já cadastrado');
            return;
        }else{
            users.push(user);
        }
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'index.html';
    });

    const button2 = document.createElement('button');
    button2.type = 'submit';
    button2.classList.add('btn', 'btn-secondary');
    button2.textContent = 'Cancelar';

    div10.appendChild(button1);
    div10.appendChild(button2);

    div9.appendChild(div10);

    form.appendChild(div3);
    form.appendChild(div6);
    form.appendChild(div9);

    div2.appendChild(h1);
    div2.appendChild(form);

    div.appendChild(div2);

    divRegister.appendChild(div);


    return divRegister;
}

const messages = {
    emptyfield: "Preencha o campo {field}",
    shortName: "O campo nome deve ter no mínimo 2 caracteres",
    invalidEmail: "Informe um endereço de email válido. ",
    passwordDiferent: "As senhas não conferem"
}

function validateInput(input, spanError){
    let error = false;
    let message;

    if(input.value.trim() ===''){
        error = true;
        message = messages.emptyfield.replace('{field}', input.name);
    }else if(input.name === 'name' && input.value.length < 2){
        error = true;
        message = messages.shortName;
    }else if(input.name === 'email' && !/\S+@\S+\.\S+/.test(input.value)){
        error = true;
        message = messages.invalidEmail;
    }else if(input.name === 'password2' && input.value !== document.querySelector('#inputPassword').value){
        error = true;
        message = messages.passwordDiferent;
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
