const select = document.querySelectorAll('.currency');
const button = document.getElementById('btn');
const number_box = document.getElementById('number_box');
const answer_box = document.getElementById('answer_box');

fetch(`https://api.frankfurter.app/currencies`)
  .then(resp => resp.json())
  .then((data) => {
    show(data);
  })

  function show(data) {
    const asArray = Object.entries(data);
    
    for (let i = 0; i < asArray; i++) {
       select[0].innerHTML += `<option value ="${asArray[i][0]}">"${asArray[i][1]}"</option>`
       select[1].innerHTML += `<option value ="${asArray[i][0]}">"${asArray[i][1]}"</option>`
    }
  }

  button.addEventListener('click', ()=>{
    let currency_one = select = select[0].value;
    let currency_two = select = select[1].value;

    let value = number_box.value;
    if (currency_one != currency_two) {
        convert(currency_one, currency_two, value);
    } else {
        alert("Pilih Mata Uang!");
    }
  });

  function convert(currency_one, currency_two, value) {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${value}&from=${currency_one}&to=${currency_two}`);
    .then((val) => val.json())
    .then((val) => {
        answer_box.value = Object.values(val.rates)[0];
    })
   
  } 