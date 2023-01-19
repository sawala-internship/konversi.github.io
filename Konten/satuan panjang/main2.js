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

    if(inputTypeValue === "Meter" && resultTypeValue ==="Kilometer") {
        // meter to km
        result.value = Number(input.value) * 0.001;

    }else if(inputTypeValue === "Meter" && resultTypeValue ==="Centimeter") {
        // meter to cm
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "Meter" && resultTypeValue ==="Meter") {
        // meter to meter

        result.value = input.value;

    }



    if(inputTypeValue === "Kilometer" && resultTypeValue === "Meter") {
        // km to m
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter") {
        // km to cm
        result.value = Number(input.value) * 100000;
    }else if (inputTypeValue === "Kilometer" && resultTypeValue === "kilometer") {
        // km to km
        result.value = input.value;
    }



    if(inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer") {
        // cm to km
        result.value = Number(input.value) * 0.00001;

    } else if (inputTypeValue === "Centimeter" && resultTypeValue === "Meter") {
        //cm to m
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter") {
        //cm to cm
        result.value = input.value;
    }


}