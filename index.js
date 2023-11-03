
const btnAddReceita = document.querySelector("#btnAddReceita");
const btnAddExtra = document.querySelector("#btnAddExtra");
const btnAddDespesa = document.querySelector("#btnAddDespesa");

var labelSaldo;
var labelExtra ;
var labelDespesa;
var pSala_bruto;
var despesa_fixa;


var receita ;
var extra ;
var despesa ;

var salario_bruto ;
var despesa_fixa ;
var despesa_variavel ;
var lucro_liquido ;




btnAddReceita.addEventListener("click", () => {
    receita =parseInt(document.querySelector("#inputReceita").value);
    extra = parseInt(document.querySelector("#inputExtra").value);
    despesa =parseInt(document.querySelector("#inputDespesa").value);
    salario_bruto = receita + extra;
    despesa_total =receita -despesa;

    if(receita > 0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" + receita.toFixed(2);
    }
    if(salario_bruto> 0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" + salario_bruto.toFixed(2);
        pSala_bruto.innerHTML = "R$" + salario_bruto.toFixed(2);
    }else if(despesa > 0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" + despesa_total.toFixed(2);

    }else if(extra && despesa >0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" + despesa_total.toFixed(2);
    }
    else{
        labelSaldo.innerHTML =  "R$0,00";
        pSala_bruto.innerHTML =  "R$0,00";
    }

    if(isNaN(receita)){
        alert ("Digite o valor da Receita!"); 
        return;
    }
    
    
});



btnAddExtra.addEventListener("click", () => {
    receita =parseInt(document.querySelector("#inputReceita").value);
    extra = parseInt(document.querySelector("#inputExtra").value);
    despesa =parseInt(document.querySelector("#inputDespesa").value);
    pSala_bruto = document.querySelector("#pSala_bruto");
    despesa_total =receita -despesa;
    salario_bruto = receita + extra;

    if(extra && receita >0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" + salario_bruto.toFixed(2);
        pSala_bruto.innerHTML = "R$" + salario_bruto.toFixed(2);
    }
    if(isNaN(extra)){
        alert ("Digite o valor da Receita Extra!");
    }
    if(despesa > 0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" +(salario_bruto- despesa_total).toFixed(2);
    }
    
    
});
btnAddDespesa.addEventListener("click", ()=>{
    despesa =parseInt(document.querySelector("#inputDespesa").value);
    receita =parseInt(document.querySelector("#inputReceita").value);
    extra = parseInt(document.querySelector("#inputExtra").value);
    labelDespesa = document.querySelector("#labelValorDisplayDespesa");
    despesa_total = receita - despesa;
    salario_bruto = receita + extra;
    labelDespesa.innerHTML = "R$" + despesa.toFixed(2);
    
    if(receita && extra > 0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" + (salario_bruto - despesa ).toFixed(2);
    }
    else if(receita > 0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" + (receita - despesa ).toFixed(2);
    }

    if(extra < 0){
        labelSaldo = document.querySelector("#labelValorDisplaySaldo").innerHTML ="R$" + (receita - despesa ).toFixed(2);
    }


    if(isNaN(despesa)){
        alert ("Digite o valor da Receita Despesa!");
        labelDespesa = document.querySelector("#labelValorDisplayDespesa").innerHTML ="R$00,00";
    }

    
});
