const form = document.getElementById('form-atividade')
const numeros = [];
const nomes = [];
let linhas = '';

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    adicionarLinha();
    atualizaTabela();

});

function adicionarLinha(){
    const inputNome = document.getElementById('name-contact');
    const inputNumero = document.getElementById('cellphone');
    
        if (numeros.includes(inputNumero.value)) {
            alert(`O número ${inputNumero.value} já foi adicionado`);
        } else {
            nomes.push(inputNome.value);
            numeros.push(inputNumero.value);
    
            let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputNumero.value}</td>`;
            linha += '</tr>';
        
            linhas += linha;

            inputNome.value = '';
            inputNumero.value = '';
        }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}