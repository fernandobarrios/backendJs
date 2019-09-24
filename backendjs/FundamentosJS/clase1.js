var nombre = 'choco', apellido ='barrios'
var nombreEnMayuscula = nombre.toLocaleUpperCase()
var apellidoEnMinuscula = apellido.toLocaleLowerCase()

var primeraLetraNombre = nombre.charAt(0)
var cantidadDeLetrasNombre = nombre.length
var nombreCompleto = `${nombre} ${apellido.toLocaleUpperCase()}`

var str = nombre.substr(1,2)

var ultimaLetra = nombre.substr(nombre.length-1)

var precioDeVino = 200.3
var precioTotal = Math.round(precioDeVino *100 * 3) / 100 
var precioTotalStr = precioTotal.toFixed(2)
var precioTotal2 = parseFloat(precioTotalStr)