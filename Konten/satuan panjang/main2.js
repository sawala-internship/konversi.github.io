var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

//now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult () {


    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // now compare thr input and resultType value and add formula

    if(inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        // meter to km
        result.value = Number(input.value) *0,001;

    }else if(inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        // meter to cm
        result.value = Number(input.value) *100;
    }else if(inputTypeValue === "meter" && resultTypeValue === "meter") {
        // meter to meter
        result.value = input.value;
    }



    if(inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        // km to m
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        // km to cm
        result.value = Number(input.value) * 100000;
    }else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        // km to km
        result.value = input.value;
    }



    if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
        // cm to km
        result.value = Number(input.value) * 0.00001;

    } else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        //cm to m
        result.value = number(input.value) * 0.01;
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
        //cm to cm
        result.value = input.value;
    }


}