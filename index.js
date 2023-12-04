
function showResult(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let oparater = document.getElementById("oparater").value;
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = document.getElementById("result");

    if(oparater === "+"){
        result.value = number1 + number2;
    }
    else if(oparater === "-" ){
        result.value = number1 - number2;
    }
    else if(oparater === "*" ){
        result.value = number1 * number2;
    }
    else{
        result.value = number1 / number2;
     }
    }
    function reset(){

        let result = document.getElementById("result");
        result.value = '';
    }

   