const botaoAdd = document.querySelector("#btnAdd");



botaoAdd.addEventListener("click", function(e){

    let valorInput = document.querySelector("#InputaddReceita");
    let valueInputReceita = parseInt(valorInput.value);

    document.querySelector("#labelRceita").innerHTML = "$" +valueInputReceita+",00";

    let valorInputExtra = document.querySelector("#InputaddExtra");
    let valueInputExtra = parseInt(valorInputExtra.value);


    document.querySelector("#labelextra").innerHTML = "$" +valueInputExtra+",00";

    let valorInputSaldo =document.querySelector("#labelSaldo");
    let valueInputSaldo = parseInt(valorInputSaldo.value);
    
    valorInputSaldo.innerHTML= valueInputSaldo=+valueInputExtra+valueInputReceita+",00";
    

})








