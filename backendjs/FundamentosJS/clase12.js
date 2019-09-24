var kurt = {
  nombre: 'kurt',
  apellido: 'cobain',
  edad: 27,
  peso : 75
}

var larry = {
  nombre: 'Larry',
  apellido: 'Carda',
  edad: 15,
  peso : 75
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})

function imprimirMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('Acceso Denegado')
  }
}
