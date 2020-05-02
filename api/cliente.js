const listarClientes = () => {
    return fetch("http://localhost:4000/clientes")
        .then(resposta => { return resposta.json() })
        .then(json => { return json });
};

const cadastrarCliente = (nome, cpf) => {
    return fetch("http://localhost:4000/clientes/cliente", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ nome:nome, cpf:cpf }),
    }).then(resposta => {return resposta.body});
}