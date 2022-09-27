//Este es mi archivo JS. Me dijeron que estos comentarios como documentacion de que hace que recuerde para que servía.//

/*let numeroA = 5
let numeroB = 10
let resultado = numeroA + numeroB

console.log ("Este es el resultado de la suma:", resultado)

let texto = "Hola"
let texto2 = "mundo"

let texto3 = texto + " " + texto2
console.log (texto3) 

let union = numeroA + texto
console.log (union) */


alert("Bienvenido!")

/* let numeroIngresado = prompt("Ingrese un numero:")

console.log(numeroIngresado) */

//2 productos -> mostrar productos -> si quiere comprar -> cuantos? 
//-> mostrar precio total de la compra


    /*let compra= prompt("Ingrese SI quiere comprar:" + "Mesa" + " y " + "Silla")

if (compra == "SI"){ 

/*let nombreProductoA = "Mesa"
let precioProductoA = "100"

let nombreProductoB = "Silla"
let precioProductoB = "10" */



/*let cantidadProductoA = prompt ("ingrese cantidad de " + nombreProductoA + "desea comprar:")
let cantidadProductoB = prompt ("ingrese cantidad de" + nombreProductoB + "desea comprar:")

let precioTotalA = cantidadProductoA * precioProductoA
let precioTotalB = cantidadProductoB * precioProductoB

let precioTotal = precioTotalA + precioTotalB

alert ("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita")
} */





//let verdadero = true
//let esFalso = false 


/*for (let i = 1; i <= 10; i + 1) {
    console.log("Buenas")
    
} */


let entrada = prompt("1 - Cuentas\n2 - Cajero\n3 - Contador\ ESC - Salir");
    while (entrada != "ESC") {
        alert("El usuario ingresó" + entrada);
        entrada = prompt("1 - Cuentas\n2 - Cajero\n3 - Contador\ ESC - Salir");
    }   


    let it = 0

    do{
        console.log("Solo una vez!");
    }
        while (false) 

    let  nombreProductoA  =  'Mesa'
    let precioProductoA  =  100
    let  stockProductoA  =  10
        
    let  nombreProductoB  =  'Silla'
    let precioProductoB  =  10
    let  stockProductoB  =  20
        
    let  nombreProductoC  =  'Lampara'
    let  precioProductoC  =  20
    let  stockProductoC  =  50
        
    let precioTotal  =  0  



    alert( "Estos son nuestros productos: \n - Mesa\n - Silla\n - Lampara" )


    let opcion  =  prompt ( "Ingrese que es lo que quiere comprar o ESC para salir" )

    while ( opcion  !=  "ESC" ) {
    
    if (opcion  ==  'Mesa' ) {
    let  cantidadProductoMesa  =  parseInt ( prompt ( "ingrese que cantidad de"  +  nombreProductoA  +  "quiere comprar:" ) )
    if ( cantidadProductoMesa  <=  stockProductoA ) {
    precioTotal  =  precioTotal  +  ( cantidadProductoMesa * precioProductoA )
    }
    else {
    alert ( "Actualmente tenemos "  +  stockProductoA  +  " unidades de este producto" )
    }
    }

    else  if ( opcion  ==  'Silla' ) {
    let  cantidadProductoSilla  =  parseInt ( prompt ( "ingrese que cantidad de "  +  nombreProductoB  +  " quiere comprar:" ) )
    if ( cantidadProductoSilla  <=  stockProductoB ) {
    precioTotal  =  precioTotal  +  ( cantidadProductoSilla * precioProductoB )
    }
    else {
    alert ( "Actualmente tenemos "  +  stockProductoB  +  " unidades de este producto" )
    }
    }
    else  if ( opcion  ==  'Lampara' ) {
    let  cantidadProductoLampara  =  parseInt ( prompt ( "ingrese que cantidad de"  +  nombreProductoC  +  "quiere comprar:" ) )
    if ( cantidadProductoLampara  <=  stockProductoC ) {
    precioTotal  =  precioTotal  +  ( cantidadProductoLampara * precioProductoC )
    }
    else {
    alert ( "Actualmente tenemos "  +  stockProductoC  +  " unidades de este producto" )
    }
    }
    else {
    alert ( "No tenemos ese producto a la venta" )
    }
    opcion  =  prompt ( "Ingrese que producto quiere comprar: \n - Mesa\n - Silla\n - Lampara\n - ESC" )
    }
    
    if ( precioTotal  !=  0 ) {
        alert ( "El precio total es: "  +  precioTotal )
        }
        else {
        alert ( "¡Gracias por su visita!" )
        }


    function bienvenida (nombre, apellido){
        alert("Bienvenida" + nombre + " " + apellido)
    }


bienvenida (" Renata ", " Sabbatini ")
bienvenida (" Gonzalo ", " Astorga ")
bienvenida (" Chinche ", " CuloConCaca ") 

function suma (a, b){
    return a + b;
}
let resultado = suma (5, 10)

console.log (resultado)