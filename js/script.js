// ! Suhu Start

const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const reamurInput = document.getElementById("reamur");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);
    switch (e.target.name) {
      case "celcius":
        fahrenheitInput.value = value * 1.8 + 32;
        kelvinInput.value = value + 273.15;
        reamurInput.value = value * 0.8;
        break;
      case "fahrenheit":
        celciusInput.value = (value - 32) / 1.8;
        kelvinInput.value = (value - 32) / 1.8 + 273.15;
        reamurInput.value = ((value - 32) / 1.8) * 0.8;
        break;
      case "kelvin":
        celciusInput.value = value - 273.15;
        fahrenheitInput.value = (value - 273.15) * 1.8 + 32;
        reamurInput.value = (value - 273.15) * 0.8;
        break;
      case "reamur":
        celciusInput.value = value * 1.25;
        fahrenheitInput.value = value * 2.25 + 32;
        kelvinInput.value = value * 1.25 + 273.15;
        break;
    }
  });
}
// ! Suhu End

// ! Uang Start
let inputUang = document.getElementById("inputUang");
let resultUang = document.getElementById("resultUang");
let inputTypeUang = document.getElementById("inputTypeUang");
let resultTypeUang = document.getElementById("resultTypeUang");
let inputTypeValueUang, resultTypeValueUang;

//now add listener
inputUang.addEventListener("keyup", myResultUang);
inputTypeUang.addEventListener("change", myResultUang);
resultTypeUang.addEventListener("change", myResultUang);

// taking initial value
inputTypeValueUang = inputTypeUang.value;
resultTypeValueUang = resultTypeUang.value;

function myResultUang() {
  inputTypeValueUang = inputTypeUang.value;
  resultTypeValueUang = resultTypeUang.value;

  // Dollar to Rupiah
  if (inputTypeValueUang === "Dollar" && resultTypeValueUang === "Rupiah") {
    resultUang.value = Number(inputUang.value) * 16000;
    // Rupiah to Dollar
  } else if (
    inputTypeValueUang === "Rupiah" &&
    resultTypeValueUang === "Dollar"
  ) {
    resultUang.value = Number(inputUang.value) * 0.0000625;
    // Dollar to Dollar
  } else if (
    inputTypeValueUang === "Dollar" &&
    resultTypeValueUang === "Dollar"
  ) {
    resultUang.value = inputUang.value;
  }

  // Euro to Rupiah
  if (inputTypeValueUang === "Euro" && resultTypeValueUang === "Rupiah") {
    resultUang.value = Number(inputUang.value) * 17000;
    // Rupiah to Euro
  } else if (
    inputTypeValueUang === "Rupiah" &&
    resultTypeValueUang === "Euro"
  ) {
    resultUang.value = Number(inputUang.value) * 0.00005882353;

    // Rupiah to Rupiah
  } else if (
    inputTypeValueUang === "Rupiah" &&
    resultTypeValueUang === "Rupiah"
  ) {
    resultUang.value = inputUang.value;
  }

  // Dollar to Euro
  if (inputTypeValueUang === "Dollar" && resultTypeValueUang === "Euro") {
    resultUang.value = Number(inputUang.value) * 0.92;

    //Euro to Dollar
  } else if (
    inputTypeValueUang === "Euro" &&
    resultTypeValueUang === "Dollar"
  ) {
    resultUang.value = Number(inputUang.value) * 1.08;

    // Euro to Euro
  } else if (inputTypeValueUang === "Euro" && resultTypeValueUang === "Euro") {
    resultUang.value = inputUang.value;
  }
}

// ! Uang End

// ! Panjang Start
let input = document.getElementById("input");
let result = document.getElementById("result");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");
let inputTypeValue, resultTypeValue;

//now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  // now compare thr input and resultType value and add formula

  if (inputTypeValue === "Meter" && resultTypeValue === "Kilometer") {
    // meter to km
    result.value = Number(input.value) * 0.001;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Centimeter") {
    // meter to cm
    result.value = Number(input.value) * 100;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Meter") {
    // meter to meter

    result.value = input.value;
  }

  if (inputTypeValue === "Kilometer" && resultTypeValue === "Meter") {
    // km to m
    result.value = Number(input.value) * 1000;
  } else if (
    inputTypeValue === "Kilometer" &&
    resultTypeValue === "Centimeter"
  ) {
    // km to cm
    result.value = Number(input.value) * 100000;
  } else if (
    inputTypeValue === "Kilometer" &&
    resultTypeValue === "kilometer"
  ) {
    // km to km
    result.value = input.value;
  }

  if (inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer") {
    // cm to km
    result.value = Number(input.value) * 0.00001;
  } else if (inputTypeValue === "Centimeter" && resultTypeValue === "Meter") {
    //cm to m
    result.value = Number(input.value) * 0.01;
  } else if (
    inputTypeValue === "Centimeter" &&
    resultTypeValue === "Centimeter"
  ) {
    //cm to cm
    result.value = input.value;
  }
}
// ! Panjng End

// *untuk toggle slide
const toggle = document.querySelector(".menu-toggle input");
const slide = document.querySelector("nav ul");
const active = document.querySelector("input:checked");

toggle.addEventListener("click", function () {
  slide.classList.toggle("slide");
});

slide.addEventListener("click", function () {
  slide.classList.remove("slide");
  slide.classList.toggle("active");
});

window.addEventListener("click", function (e) {
  if (e.target != toggle && e.target != slide) {
    slide.classList.remove("slide");
    slide.classList.remove("active");
  }
});
