let botaoAddReceita = document.querySelector("#btnAdd");
let btnAddDispesa = document.querySelector("#btnDispesa");
let inputReceita = document.querySelector("#InputaddReceita");
let inputExtra = document.querySelector("#InputaddExtra");
let inputDespesa = document.querySelector("#inputDispesa");
let displaySaldo = document.querySelector("#labelSaldo");
let displayReceita = document.querySelector("#labelRceita");
let displayExtra = document.querySelector("#labelextra");
let displayDespesa = document.querySelector("#labelDispesa");
let saldoTotal = inputReceita.value + inputExtra.value;
let despesaTotal = saldoTotal - inputDespesa.value;



function soma(receita, extra){
    let saldoTotal = receita + extra;
    return saldoTotal;
}
function subtraiDespesaDoSaldo(totalSaldo,valorDespesa){
    let subtrair= totalSaldo-valorDespesa;
    return subtrair;
}





botaoAddReceita.addEventListener("click", ()=>{
    let valorReceita = parseFloat(inputReceita.value);
    let valorExtra = parseFloat(inputExtra.value);
    
    
    
    if(isNaN(valorReceita)){
        alert("Digite um valor par adicionar Receita!");
        
    } 
    else{
        displayReceita.innerHTML = "R$"+valorReceita.toFixed(2);
        displaySaldo.innerHTML = "R$"+valorReceita.toFixed(2);
    }
    
    if(isNaN(valorExtra)){
        alert("Digite um valor par adicionar Extra!");
        displaySaldo.innerHTML = "R$00,00";
        
    } else{
        displayExtra.innerHTML = "R$"+valorExtra.toFixed(2);
        displaySaldo.innerHTML = "R$"+soma(valorReceita,valorExtra).toFixed(2);
    }
    
});



btnAddDispesa.addEventListener("click", () => {
    let valorReceita = parseFloat(inputReceita.value);
    let valorExtra = parseFloat(inputExtra.value);
    let TatalSaldo = valorReceita +valorExtra;

    let valorDespesa = parseFloat(inputDespesa.value);
    let categorias = document.querySelector("#selectCategoria");
    let categoria = categorias.value;
    let formaPagameto = document.querySelector("#selectformaPagamento");
    let formasPagamento = formaPagameto.value;
    if (isNaN(valorDespesa)) {
        alert("Digite um valor para adicionar Despesa!");
        return;
    }
    if( categoria==0 || formasPagamento ==0){
        alert("Selecione uma categoria e a forma de pagamento");
        return;
    }
    else{
        addvalorTabela()
    }
    
    
    displayDespesa.innerHTML= "R$"+valorDespesa.toFixed(2);
    displaySaldo.innerHTML= "R$"+subtraiDespesaDoSaldo(TatalSaldo,valorDespesa).toFixed(2);
});

function addvalorTabela(){
        
        let categorias = document.querySelector("#selectCategoria");
        let categoria = categorias.value;

        let formaPagameto = document.querySelector("#selectformaPagamento");
        let formasPagamento = formaPagameto.value;

        let inputDispesa = document.querySelector("#inputDispesa");
        let valorDespesa = parseFloat(inputDispesa.value);

        let tabela = document.querySelector("#tabela");

        if(categoria ==0 && formaPagameto ==0 && valorDespesa ===0 ){
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




function subtraiDespesaDoSaldo(totalSaldo,valorDespesa){
    let subtrair= totalSaldo-valorDespesa;
    return subtrair;
};