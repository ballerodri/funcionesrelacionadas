var costo = 0;
var tasa = 0;
var iva = 0;
var total = 0;


costo = +prompt("Ingrese el precio de costo");
tasa = +prompt("Ingrese el porcentaje de IVA");
ingresaPrecio(costo);
IVA(tasa);
calculoIVA(costo,tasa);


function ingresaPrecio(costo){
    if (Number.isInteger(costo)){
        return costo;
    }else{
        alert("Debe ingresar un numero");
    }
}


function IVA(tasa){
    if (Number.isInteger(tasa)){
        return tasa;
    }else{
        alert("Debe ingresar un numero");
    }
}

function calculoIVA(costo,tasa){
    iva = (costo * tasa)/100;
    total = +iva + +costo;
    alert("El total es: " +total);
}




