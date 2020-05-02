
const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener("submit", (event) => {
    event.preventDefault();

    const cpf = event.target.querySelector('[data-cpf]');
    const nome = event.target.querySelector('[data-nome]');

    console.log(nome.value ," ", cpf.value );
    
    cadastrarCliente(nome.value, cpf.value);
} )