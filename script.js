const covertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function corvetVales() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  // Em real 
    const currencyValue = document.querySelector(".currency-value") //Dolar /Outras Moedas


    const dolarToday = 5.2
    const euroToday = 6.2


    if (currencySelect.value == "dolar") {   // 
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)


    }

    if (currencySelect.value == "euro") {
         currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue/euroToday)

    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency(){
const currencyName = document.getElementById("currency -name")
const currencyImage = document.querySelector(".currency-img")


 if (currencySelect.value == "dolar") {
currencyName.innerHTML = "Dolar americano"

currencyImage.src = "./Dolar.png"
 }

 if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./Euro.png"

   }

   corvetVales


}
currencySelect.addEventListener("change" , changeCurrency)
covertButton.addEventListener("click", corvetVales)