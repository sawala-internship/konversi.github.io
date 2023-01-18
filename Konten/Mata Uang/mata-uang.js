const input = document.querySelector(".input");
const option = document.querySelector(".option");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

fetch("https://api.frankfurter.app/currencies")
.then ((data) => data.json())
.then ((data) => {
    display(data);
});

function display(data) {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++){
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;

    }
}

btn.addEventListener("click", () => {
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value = input.value;

    if(currency1 != currency2){
        convert(currency1, currency2, value);
    } else {
        alert("Pilih Mata Uang Yang Lain!")
    }
});

function convert(currency1, currency2, value){
    const host = "api.frankfurter.app";
    fetch{
        `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    }

    .then((val) => val.json())
    .then((val) => {
        console.log(Object.Values(val.rates)[0];)
        result.value = Object.values(val.rates)[0];
    }
}
    
