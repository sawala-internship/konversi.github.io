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

  
         // Dollar to Rupiah
    if(inputTypeValue === "Dollar" && resultTypeValue ==="Rupiah") {
        result.value = Number(input.value) * 16000;
          // Rupiah to Dollar
    }else if(inputTypeValue === "Rupiah" && resultTypeValue ==="Dollar") {
        result.value = Number(input.value) * 0.0000625;
         // Dollar to Dollar
    }else if(inputTypeValue === "Dollar" && resultTypeValue ==="Dollar") {
       result.value = input.value;

    }


         // Euro to Rupiah
    if(inputTypeValue === "Euro" && resultTypeValue === "Rupiah") {
       result.value = Number(input.value) * 17000;
       // Rupiah to Euro
    
        }else if(inputTypeValue === "Rupiah" && resultTypeValue === "Euro") {
        result.value = Number(input.value) * 0.00005882353;
         
        // Rupiah to Rupiah
    
        }else if (inputTypeValue === "Rupiah" && resultTypeValue === "Rupiah") {
       result.value = input.value;
    }


        // Dollar to Euro
    if(inputTypeValue === "Dollar" && resultTypeValue === "Euro") {
        result.value = Number(input.value) * 0.92;

          //Euro to Dollar
        } else if (inputTypeValue === "Euro" && resultTypeValue === "Dollar") {
        result.value = Number(input.value) * 1.08;

        // Euro to Euro
        }else if(inputTypeValue === "Euro" && resultTypeValue === "Euro") {
        result.value = input.value;
    }


}