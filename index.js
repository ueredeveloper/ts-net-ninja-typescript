var colaborador = {
    nome: 'Luciano',
    cpfcnpj: '123',
    type: 'adm'
};
var nome = document.querySelector('#nome');
if (nome !== null) {
    nome.innerHTML = colaborador.nome;
}
