const temp1 = document.getElementById("tempValue1");
const temp2 = document.getElementById("tempValue2");
const tempUnit1 = document.getElementById("tempUnit1");
const tempunit2 = document.getElementById("tempUnit2");


// Ad Event Lishner
temp1.addEventListener("keyup",tempResult);
temp2.addEventListener("keyup",tempResult);
tempUnit1.addEventListener("change",tempResult);
tempUnit2.addEventListener("change",tempResult);

//function

function tempResult(){
    let temp = 0;
    let t1 = parseInt(temp1.value);

    // from unit value to set to celsius and converted unit values are changing

    if(tempUnit1.value === "celsius" && tempUnit2.value === "celsius"){
        temp2.value = temp + t1;
    }
    if(tempUnit1.value === "celsius" && tempUnit2.value === "fahrenheit"){
        temp2.value = ((temp + t1)*9)/5 + 32;
    }
    if(tempUnit1.value === "celsius" && tempUnit2.value === "kelvin"){
        temp2.value = ((temp + t1)+273.15);
    }


    // from unit value to set to fahrenheit and converted unit values are changing

    if(tempUnit1.value === "fahrenheit" && tempUnit2.value === "celsius"){
        temp2.value = ((temp + t1-32)*5)/9;
    }
    if(tempUnit1.value === "fahrenheit" && tempUnit2.value === "fahrenheit"){
        temp2.value = temp + t1;
    }
    if(tempUnit1.value === "fahrenheit" && tempUnit2.value === "kelvin"){
        temp2.value = ((temp + t1-32)*5)/9 + 273.15;
    }



    // from unit value to set to kelvin and converted unit values are changing

    if(tempUnit1.value === "kelvin" && tempUnit2.value === "celsius"){
        temp2.value = temp + t1 - 273.15;
    }
    if(tempUnit1.value === "kelvin" && tempUnit2.value === "fahrenheit"){
        temp2.value = ((temp + t1 - 273.15)*9)/5 + 32 ;
    }
    if(tempUnit1.value === "kelvin" && tempUnit2.value === "kelvin"){
        temp2.value = temp + t1;
    }

}