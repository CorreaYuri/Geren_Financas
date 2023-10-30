botaoAddReceita = document.querySelector("#btnAddReceita");
botaoAddExtra = document.querySelector("#btnAddExtra");
btnAddDispesa = document.querySelector("#btnDispesa");

//Variáveis de controle do modal para adicionar receitas e despesas

let receita = document.querySelector("#InputaddReceita").value;
let renda_extra = document.querySelector("#InputaddExtra").value;
let despesa_fixa = document.querySelector("#inputDispesa").value;

displaySaldo = document.querySelector("#labelSaldo");
displayReceita = document.querySelector("#labelRceita");
displayExtra = document.querySelector("#labelextra");
displayDespesa = document.querySelector("#labelDispesa");


salario_bruto = receita + renda_extra;
despesa_fixa = salario_bruto / 2;
despesa_variavel = (receita - (salario_bruto / 4));
lucro_liquido = salario_bruto - (despesa_fixa + despesa_variavel);


botaoAddReceita.addEventListener("click", () =>{
    receita = document.querySelector("#InputaddReceita").value;
    alert(receita);

});

