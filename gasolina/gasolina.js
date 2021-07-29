let precioGrifo=document.getElementById("grifo");
/* Para obtener el valor */
let cod = document.getElementById("producto").value;
/* Para obtener el texto */
let combo = document.getElementById("producto");

let venta=document.getElementById("precioDeVenta");

let division=document.getElementById("division");

let boton=document.getElementById("enviar")
boton.addEventListener("click",enviarDatos)


function enviarDatos()
{
    
    let selecionar = combo.options[combo.selectedIndex].text;
    if(!precioGrifo.value){
        swal({
            text: "Ingrese el precio del galon",
            icon: "warning"})
        return
    }
    if(precioGrifo.value <10){
        swal({
            text: "Precio incorrecto",
            icon: "warning"});
        return
    }
    if(venta.value<=0){
        swal({
            text: "Numero incorrecto",
            icon: "warning"});
        return
    }
    if(!venta.value){
        swal({
            text: "Ingrese el precio de la venta",
            icon: "warning"});
        return
    }
    if(division.value<=0){
        swal({
            text: "Numero incorrecto",
            icon: "warning"});
        return
    }
    if(!division.value){
        swal({
            text: "Ingrese la division",
            icon: "warning"});
        return
    }
    if(selecionar=="MONTO") return swal("Especifique el monto");
    
    let galonPrecio = precioGrifo.value; //a

    let inversion = selecionar; //b

    let galonesComprados = inversion / galonPrecio; //c
    let porongosP=0; //d
    let totalP=0; //e

    while(porongosP<inversion){
        porongosP+=50;
        totalP+=1;
    }
    mostrarDatos(galonPrecio,inversion,galonesComprados,porongosP,totalP,venta.value,division.value);   
}

function mostrarDatos(a,b,c,d,e,f,g)
{
    let GALONCITOS = c / e;
    let LITROS =GALONCITOS * 4;
    let PRECIO =GALONCITOS * a;

    let litrosDeVenta = LITROS / g;
    let precioDeVenta = g * f;
    let ganancia = (precioDeVenta * e)-b;    
    
    document.getElementById("galones").innerHTML=`${GALONCITOS.toFixed(2)}`;
    document.getElementById("litrosG").innerHTML=`${LITROS.toFixed(2)}`;
    document.getElementById("precio").innerHTML=`${PRECIO}`;
    document.getElementById("litrosDeVenta").innerHTML=`${litrosDeVenta.toFixed(2)}`;
    document.getElementById("gananciaG").innerHTML=`${(precioDeVenta-PRECIO).toFixed(2)}`;

    document.getElementById("monto").innerHTML=`${d}`;
    document.getElementById("galoneras").innerHTML=`${e}`;
    document.getElementById("gananciaT").innerHTML=`${ganancia.toFixed(2)}`;
}








