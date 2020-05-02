


const corpoTabela = document.querySelector('[data-conteudo-tabela]');

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement("tr");
    const conteudoLinha = ` 
        <td>${cpf}</td>
        <td>${nome}</td>
    `;
    linha.innerHTML = conteudoLinha;
    return linha;
}

/* infoCliente.forEach(i =>
    corpoTabela.appendChild(exibe(i.cpf, i.nome))); */

listarClientes().then(exibe => {
    exibe.forEach(i =>
        corpoTabela.appendChild(exibeCliente(i.cpf, i.nome)));

})
