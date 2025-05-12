//Function para Converter Valores
function convertsValues() {
    //Valor digitado pelo usuário
    const enteredValue = document.querySelector("#value")
    //Trasformando em Float
    const formatEnteredValue = parseFloat(enteredValue.value)
    //Valor Real Brasileiro
    const brazilianReal = document.querySelector("#brazil-value")
    //Valor Estrangeiro
    const foreignerValue = document.querySelector("#foreigner-value")

    //Try- Catch
    try {
        //Formatando o REAL
        if (!isNaN(formatEnteredValue)) {
            //Formatar o valor Digitado pelo Usuário
            const realFormatted = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(formatEnteredValue)

            //Mostrar valor Real Brasileiro formatado
            brazilianReal.innerHTML = realFormatted

            //Condição para DOLAR
            if (select.value === "USD") {
                const valueDolar = enteredValue.value / 5.65
                const valueDolarFor = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(valueDolar)
                //Mostrar valor Estrangeiro Formatado
                foreignerValue.innerHTML = valueDolarFor

            } 
            //Condição para EURO
            if (select.value === "EUR") {
                const valueEuro = enteredValue.value / 6.37
                const valueEuroFor = new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                }).format(valueEuro)
                foreignerValue.innerHTML = valueEuroFor
            }
            //Condição para Libra
            if(select.value === "LIB"){
                const valueLibra = enteredValue.value / 7.51
                const valueLibraFor = new Intl.NumberFormat('en-GB',{
                    style: 'currency',
                    currency: 'GBP'
                }).format(valueLibra)
                foreignerValue.innerHTML = valueLibraFor
            }
            //Condição para Bitcoin
            if(select.value === "BIT"){
                const valueBitcoin = enteredValue.value / (581.494,51)
                const valueBitcoinFor = new Intl.NumberFormat('en-US',{
                    style: 'decimal',
                    minimumFractionDigits: 8,
                    maximumFractionDigits: 8
                }).format(valueBitcoin)
                foreignerValue.innerHTML = valueBitcoinFor
            }
        //Caso um valor não seja Digitado
        } else {
            brazilianReal.innerHTML = "Digite um Valor!!!"
        }
    } catch (err) {
        console.error("Erro" + err)
    }
}

//Botão
const button = document.querySelector("#button")
//Select para a Mudança de Valor
const select = document.querySelector("#select")
//Icone
const icone = document.querySelector('#icone')
//Texto do Icone
const foreignerParagraph  = document.querySelector("#foreigner-paragraph")

//Quando clica no Botão irá executar a Function
button.addEventListener('click', convertsValues)

//Mudança do Select 
select.addEventListener('change', function () {
    if (select.value === "USD") {
        icone.src = "./assets/img/Logo USA.png"
        foreignerParagraph.innerHTML = "Dolár amerciano"
    }
    if (select.value === "EUR") {
        icone.src = "./assets/img/Logo Euro.png"
        foreignerParagraph.innerHTML = "Euro"
    }
    if (select.value === "LIB") {
        icone.src = "./assets/img/Logo Libra.png"
        foreignerParagraph.innerHTML = "Libra"
    }
    if(select.value === 'BIT'){
        icone.src = "./assets/img/Logo Bitcoin.png"
        foreignerParagraph.innerHTML = "Bitcoin"
    }
    //Chamando a função de converte Valores
    convertsValues()
})




