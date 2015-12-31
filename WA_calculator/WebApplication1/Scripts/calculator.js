var results = 0.00;
var sign = "", number = "", operation = "", operationSqrt = "";

function joinChars(sign) {
    if (txtResultOperation.value.indexOf(".") != -1 && sign == ".") {
        return true;
    } else {
        number = number + sign + "";
        txtResultOperation.value = number;
        return true;
    }
}
//------------------
function selectOperation(localOperation) {
    if (operation == "" && localOperation != "sqrt") {
        operation = localOperation;
        txtResultOperation.value = number;
        results = parseFloat(number);
        number = "";
        return;
    }

    if (operation == "plus" && localOperation != "sqrt") {
        if (number != "")
            results += parseFloat(number);
        txtResultOperation.value = results;//.toFixed(4);
        operation = localOperation;
        number = "";
        return;
    } else
        if (operation == "minus" && localOperation != "sqrt") {
            if (number != "") {
                results -= parseFloat(number);
                txtResultOperation.value = results;
            }
            operation = localOperation;
            number = "";
            return;
        } else
            if (operation == "multiplication" && localOperation != "sqrt") {
                if (number != "")
                    results *= parseFloat(number);
                txtResultOperation.value = results;
                operation = localOperation;
                number = "";
                return;
            } else
                if (operation == "division" && localOperation != "sqrt") {
                    if (number != "")
                        results /= parseFloat(number);
                    txtResultOperation.value = results;
                    operation = localOperation;
                    number = "";
                    return;
                } else
                    if (localOperation == "sqrt") {
                        if (!isNaN(parseFloat(txtResultOperation.value)) && parseFloat(txtResultOperation.value) >= 0) {
                            txtResultOperation.value = Math.sqrt(parseFloat(txtResultOperation.value));
                            results = txtResultOperation.value;
                            operation = "";
                            number = txtResultOperation.value;
                        }
                        return;
                    }
    return true;
}
//-------------------
function Results() {
    if (operationSqrt == "sqrt")
        return;
    if (operation == "") {
        txtResultOperation.value = number;
        results = parseFloat(number);
        operation = "";
        return;
    }

    if (operation == "plus") {
        if (number != "")
            results += parseFloat(number);
        txtResultOperation.value = results;
        number = results+"";
        operation = "";
        return;
    } else
        if (operation == "minus") {
            if (number != "") {
                results -= parseFloat(number);
                txtResultOperation.value = results;
            }
            number = results + "";
            operation = "";
            return;
        } else
            if (operation == "multiplication") {
                if (number != "")
                    results *= parseFloat(number);
                txtResultOperation.value = results;
                number = results + "";
                operation = "";
                return;
            } else
                if (operation == "division") {
                    if (number != "")
                        results /= parseFloat(number);
                    txtResultOperation.value = results;
                    number = results + "";
                    operation = "";
                    return;
                }                    
}
//-------------------------
function changeSign() {
    if (txtResultOperation.value != "") {
        var res2 = parseFloat(txtResultOperation.value);
        if (res2 > 0) {
            res2 = res2 * (-1);
            txtResultOperation.value = res2;
            number = parseFloat(txtResultOperation.value)
        } else
            if (res2 < 0) {
                res2 = res2 * (-1);
                txtResultOperation.value = res2;
                number = parseFloat(txtResultOperation.value)
            }
    }
}
//--------------------------
function Clear() {
    results = 0.00;
    sign = "";
    number = "";
    operation = "";
    operationSqrt = "";
    txtResultOperation.value = "";
    return;
}