interface Usuario {
    nome: string;
    cpfcnpj: string
}

interface Colaborador extends Usuario {
    type: string
}

const colaborador: Colaborador = {
    nome: 'Luciano',
    cpfcnpj: '123',
    type: 'adm'

}

let nome = document.querySelector('#nome');

if (nome !== null) {
    nome.innerHTML = colaborador.nome
}
