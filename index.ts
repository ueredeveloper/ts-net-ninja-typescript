interface Usuario {
    nome: string;
    cpfcnpj: string
}

const usuario : Usuario ={
    nome: 'João',
    cpfcnpj: '123.456.789-45'
}

const div = document.getElementById('nome') as HTMLDivElement;

div.innerHTML = usuario.nome;