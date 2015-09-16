var wynik = 0.00;
var znak = "", number = "", dzialanie = "", dzialanie1 = "";

function laczenieZnakow(znak) {
    if (txtWynikDzialania.value.indexOf(".") != -1 && znak == ".") {
        return true;
    } else {
        number = number + znak + "";
        txtWynikDzialania.value = number;
        return true;
    }
}
//------------------
function wybraneDzialanie(dzialanie1) {
    if (dzialanie == "" && dzialanie1 != "sqrt") {
        dzialanie = dzialanie1;
        txtWynikDzialania.value = number;
        wynik = parseFloat(number);
        number = "";
        return;
    }

    if (dzialanie == "plus" && dzialanie1 != "sqrt") {
        if (number != "")
            wynik += parseFloat(number);
        txtWynikDzialania.value = wynik;//.toFixed(4);
        dzialanie = dzialanie1;
        number = "";
        return;
    } else
        if (dzialanie == "minus" && dzialanie1 != "sqrt") {
            if (number != "") {
                wynik -= parseFloat(number);
                txtWynikDzialania.value = wynik;
            }
            dzialanie = dzialanie1;
            number = "";
            return;
        } else
            if (dzialanie == "mnozenie" && dzialanie1 != "sqrt") {
                if (number != "")
                    wynik *= parseFloat(number);
                txtWynikDzialania.value = wynik;
                dzialanie = dzialanie1;
                number = "";
                return;
            } else
                if (dzialanie == "dzielenie" && dzialanie1 != "sqrt") {
                    if (number != "")
                        wynik /= parseFloat(number);
                    txtWynikDzialania.value = wynik;
                    dzialanie = dzialanie1;
                    number = "";
                    return;
                } else
                    if (dzialanie1 == "sqrt" ) {
                        if (!isNaN(parseFloat(txtWynikDzialania.value)) && parseFloat(txtWynikDzialania.value) >= 0) {
                            txtWynikDzialania.value = Math.sqrt(parseFloat(txtWynikDzialania.value));
                            wynik = txtWynikDzialania.value;
                            dzialanie = "";
                            number = txtWynikDzialania.value;
                        }
                        return;
                    }
    return true;
}
//-------------------
function wynik1() {
    if (dzialanie1 == "sqrt")
        return;
    if (dzialanie == "") {
        //dzialanie = dzialanie1;
        //poczatek = true;
        txtWynikDzialania.value = number;
        wynik = parseFloat(number);
        //number = "";
        dzialanie = "";
        return;
    }

    if (dzialanie == "plus") {
        if (number != "")
            wynik += parseFloat(number);
        txtWynikDzialania.value = wynik;
        number = wynik+"";
        dzialanie = "";
        return;
    } else
        if (dzialanie == "minus") {
            if (number != "") {
                wynik -= parseFloat(number);
                txtWynikDzialania.value = wynik;
            }
            number = wynik + "";
            dzialanie = "";
            return;
        } else
            if (dzialanie == "mnozenie") {
                if (number != "")
                    wynik *= parseFloat(number);
                txtWynikDzialania.value = wynik;
                number = wynik + "";
                dzialanie = "";
                return;
            } else
                if (dzialanie == "dzielenie") {
                    if (number != "")
                        wynik /= parseFloat(number);
                    txtWynikDzialania.value = wynik;
                    number = wynik + "";
                    dzialanie = "";
                    return;
                }                    
}
//-------------------------
function zmianaZnaku() {
    if (txtWynikDzialania.value != "") {
        var wynik2 = parseFloat(txtWynikDzialania.value);
        if (wynik2 > 0) {
            wynik2 = wynik2 * (-1);
            txtWynikDzialania.value = wynik2;
            number = parseFloat(txtWynikDzialania.value)
        } else
            if (wynik2 < 0) {
                wynik2 = wynik2 * (-1);
                txtWynikDzialania.value = wynik2;
                number = parseFloat(txtWynikDzialania.value)
            }
    }
}
//--------------------------
function Clear() {
    wynik = 0.00;
    znak = "";
    number = "";
    dzialanie = "";
    dzialanie1 = "";
    txtWynikDzialania.value = "";
    return;
}