var kurt = {
  nombre : 'kurt',
  apellido : 'cobain',
  edad : 27
}

var MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirMayorDeEdad(persona){
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} es menor de edad`)
  }
}
// imprimirMayorDeEdad(kurt)