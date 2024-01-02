const form = document.querySelector('#form')
const nameInput = document.querySelector('#nome')
const apelidInput = document.querySelector('#subnome')
const com =document.querySelector('#commen')

form.addEventListener("submit",(event) => {

    event.preventDefault();

    if(nameInput.value == 0){
        alert('Prencha o seu nome!')
        return
    }
    if(apelidInput.value == 0){
        alert('Preenha o seu Apelido!')
    }
    form.submit();
});
function isNameValid(nome) {
    const nameRegex = new RegExp(
       /^/ [a-zA-Z]
    );
    if(nameRegex.test(nome)){
        return true;
    }
    return false;
}