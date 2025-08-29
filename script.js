//Function para Converter Valores
async function convertsValues() {
    //Valor digitado pelo usuário
    const enteredValue = document.querySelector("#value")
    //Trasformando em Float
    const formatEnteredValue = parseFloat(enteredValue.value)
    //Valor Real Brasileiro
    const valueConvertsIt = document.querySelector("#value-converts-it")
    //Valor Estrangeiro
    const foreignerValue = document.querySelector("#foreigner-value")

    //Fetch
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())
    console.log(data);

    //Try- Catch
    try {
        //Formatando o REAL
        if (!isNaN(formatEnteredValue)) {

            if (primarySelect.value === "BRL") {
                //Formatar o valor Digitado pelo Usuário
                valueConvertsIt.innerHTML = new Intl.NumberFormat('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                }).format(formatEnteredValue)

                if (secondSelect.value === "BRL") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('pt-BR', {
                        style: "currency",
                        currency: "BRL"
                    }).format(formatEnteredValue)
                }

                //Condição para DOLAR
                if (secondSelect.value === "USD") {

                    foreignerValue.innerHTML = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(enteredValue.value / data.USDBRL.high)
                    //Mostrar valor Estrangeiro Formatado
                }
                //Condição para EURO
                if (secondSelect.value === "EUR") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(enteredValue.value /data.EURBRL.high)
                }

                //Condição para Libra
                if (secondSelect.value === "LIB") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'GBP'
                    }).format(enteredValue.value / 7.51)
                }

                //Condição para Bitcoin
                if (secondSelect.value === "BIT") {
                    //const valueBitcoin = en-US
                    foreignerValue.innerHTML = new Intl.NumberFormat('en-US', {
                        style: 'decimal',
                        minimumFractionDigits: 8,
                        maximumFractionDigits: 8
                    }).format(enteredValue.value / data.BTCBRL.high)
                }
            }
            if (primarySelect.value === "USD") {
                valueConvertsIt.innerHTML = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(formatEnteredValue)

                if (secondSelect.value === "USD") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(formatEnteredValue)
                }
                if (secondSelect.value === "BRL") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(enteredValue.value * 5.65)
                }
                if (secondSelect.value === "EUR") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(enteredValue.value * 0.89)
                }
                if (secondSelect.value === "LIB") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'GBP'
                    }).format(enteredValue.value * 0.75)
                }
                if (secondSelect.value === "BIT") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('en-US', {
                        style: 'decimal',
                        minimumFractionDigits: 8,
                        maximumFractionDigits: 8
                    }).format(enteredValue.value * 0.0000096)
                }
            }
            if (primarySelect.value === "EUR") {
                valueConvertsIt.innerHTML = new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                }).format(formatEnteredValue)

                if (secondSelect.value === "EUR") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(formatEnteredValue)
                }
                if (secondSelect.value === "BRL") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(enteredValue.value * 6.27)
                }
                if (secondSelect.value === "USD") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(enteredValue.value * 1.12)
                }
                if (secondSelect.value === "LIB") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'GBP'
                    }).format(enteredValue.value * 0.84)
                }
                if (secondSelect.value === "BIT") {
                    foreignerValue.innerHTML = new Intl.NumberFormat('en-US', {
                        style: 'decimal',
                        minimumFractionDigits: 8,
                        maximumFractionDigits: 8
                    }).format(enteredValue.value * 0.000011)
                }
            }
            //Caso um valor não seja Digitado
        } else {
            valueConvertsIt.innerHTML = "Digite um Valor!!!"
        }
    } catch (err) {
        console.error("Erro" + err)
    }
}

//Botão
const button = document.querySelector("#button")
//Select para a Mudança de Valor
const secondSelect = document.querySelector("#second-select")
//Select converte de
const primarySelect = document.querySelector("#primary-select")
//Icone
const icone = document.querySelector('#icone')
//Icone do Primeiro Select
const iconeOne = document.querySelector("#icone-one")
//Texto do Icone secound
const foreignerParagraph = document.querySelector("#foreigner-paragraph")
//Texto do Icone Primary
const primaryParagraph = document.querySelector("#primary-paragraph")

//Quando clica no Botão irá executar a Function
button.addEventListener('click', convertsValues)

//Mudança do Select 


primarySelect.addEventListener('change', function () {
    if (primarySelect.value === "BRL") {
        iconeOne.src = "./assets/img/Logo Brasil.png"
        primaryParagraph.innerHTML = "Real"
    }
    if (primarySelect.value === "USD") {
        iconeOne.src = "./assets/img/Logo USA.png"
        primaryParagraph.innerHTML = "Dólar"
    }
    if (primarySelect.value === "EUR") {
        iconeOne.src = "./assets/img/Logo Euro.png"
        primaryParagraph.innerHTML = "Euro"
    }
    convertsValues()
})

secondSelect.addEventListener('change', function () {
    if (secondSelect.value === "BRL") {
        icone.src = "./assets/img/Logo Brasil.png"
        foreignerParagraph.innerHTML = "Real"
    }
    if (secondSelect.value === "USD") {
        icone.src = "./assets/img/Logo USA.png"
        foreignerParagraph.innerHTML = "Dolár"
    }
    if (secondSelect.value === "EUR") {
        icone.src = "./assets/img/Logo Euro.png"
        foreignerParagraph.innerHTML = "Euro"
    }
    if (secondSelect.value === "LIB") {
        icone.src = "./assets/img/Logo Libra.png"
        foreignerParagraph.innerHTML = "Libra"
    }
    if (secondSelect.value === 'BIT') {
        icone.src = "./assets/img/Logo Bitcoin.png"
        foreignerParagraph.innerHTML = "Bitcoin"
    }
    //Chamando a função de converte Valores
    convertsValues()
})





