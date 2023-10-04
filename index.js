botaoAddReceita = document.querySelector("#btnAddReceita");
botaoAddExtra = document.querySelector("#btnAddExtra");
btnAddDispesa = document.querySelector("#btnDispesa");
aindaTenho = document.querySelector(".pTotal");
//Variáveis de controle do modal para adicionar receitas e despesas

inputReceita = document.querySelector("#InputaddReceita").value;
inputExtra = document.querySelector("#InputaddExtra").value;
inputDespesa = document.querySelector("#inputDispesa").value;

displaySaldo = document.querySelector("#labelSaldo");
displayReceita = document.querySelector("#labelRceita");
displayExtra = document.querySelector("#labelextra");
displayDespesa = document.querySelector("#labelDispesa");


somaSaldo = inputReceita+inputExtra;


botaoAddReceita.addEventListener("click", ()=>{
    valorReceita= parseFloat(document.querySelector("#InputaddReceita").value);
    displayReceita.innerHTML = "R$"+ valorReceita.toFixed(2);
    displaySaldo.innerHTML = "R$"+valorReceita.toFixed(2);
    if(isNaN(valorReceita)){
        alert("Digite um valor válido, por exemplo? 10,00");
        displayReceita.innerHTML = "R$00,00";
        displaySaldo.innerHTML = "R$00,00";
        
    }
    
} );

botaoAddExtra.addEventListener("click", ()=>{
    valorExtra= parseFloat(document.querySelector("#InputaddExtra").value);
    displayExtra.innerHTML = "R$"+ valorExtra.toFixed(2);
    if(isNaN(valorExtra)){
        alert("Digite um valor válido, por exemplo? 10,00");
        displayExtra.innerHTML = "R$00,00";
        
    }
    validacao();
} );

btnAddDispesa.addEventListener("click",() =>{
    inputDespesa =parseFloat(document.querySelector("#inputDispesa").value);
    displayDespesa.innerHTML = "R$"+inputDespesa.toFixed(2);
    totalDespesa = somaSaldo - inputDespesa;
    aindaTenho.innerHTML = "R$"+totalDespesa.toFixed(2);
    if(inputDespesa > 0 && somaSaldo> 0){
        displaySaldo.innerHTML = "R$"+totalDespesa.toFixed(2);
        
     }
    if(isNaN(inputDespesa)){
        alert("Digite um valor válido, por exemplo? 10,00");
        displayDespesa.innerHTML = "R$00,00";
    }
    addvalorTabela();
})


function validacao(){
    inputReceita =parseFloat(document.querySelector("#InputaddReceita").value);
    inputExtra =parseFloat(document.querySelector("#InputaddExtra").value);
    displaySaldo = document.querySelector("#labelSaldo");
    somaSaldo = inputReceita+inputExtra;

    if(inputReceita > 0 && inputExtra >0 ){
        displaySaldo.innerHTML ="R$"+somaSaldo.toFixed(2);
        displayReceita.innerHTML ="R$"+inputReceita.toFixed(2);
        return;
    }
    
};
function addvalorTabela(){
        
        let categorias = document.querySelector("#selectCategoria");
        let categoria = categorias.value;

        let formaPagameto = document.querySelector("#selectformaPagamento");
        let formasPagamento = formaPagameto.value;

        let inputDispesa = document.querySelector("#inputDispesa");
        let valorDespesa = parseFloat(inputDispesa.value);

        let tabela = document.querySelector("#tabela");

        if(categoria ==0 && formaPagameto ==0 && valorDespesa ==0 ){
            console.log("Selecione uma categoria e a forma de pagamento");
            return;
        }
        else {
            var novaLinha = tabela.insertRow();
            var novaCategoria = novaLinha.insertCell();
            var novaFormaPagamento = novaLinha.insertCell();
            var vDespesa = novaLinha.insertCell();

            novaCategoria.innerHTML = categoria;
            novaFormaPagamento.innerHTML = formasPagamento;
            vDespesa.innerHTML = "R$"+valorDespesa.toFixed(2);
            
        }
        
};   
