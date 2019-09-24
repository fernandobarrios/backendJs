var choco={
  nombre : 'choco',
  apellido : 'barrios'
}

function imprimirNombreMayuscula(persona){
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona){
  var { nombre } = persona
  var { apellido } = persona
  console.log(`mi nombre es ${ nombre } y mi apellido es ${ apellido }`)
}
imprimirNombreMayuscula(choco)
imprimirNombreYEdad(choco)
