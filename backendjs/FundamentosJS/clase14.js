var kurt = {
  nombre: 'kurt',
  apellido: 'cobain',
  edad: 27,
  peso : 75
}

const INCREMENTO_DE_PESO = 0.2
const DIAS_DEL_ANIO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
const bajarDePeso = (persona)=> persona.peso -= INCREMENTO_DE_PESO

const comeMucho = () => Math.random() < 0.3
const haceEjercicio = () => Math.random() < 0.4

const META = kurt.peso - 3
var diasTranscurridos = 0

while (kurt.peso > META ) {

  if (comeMucho()) {
    aumentarDePeso(kurt)
  }
  if (haceEjercicio()) {
    bajarDePeso(Kurt)
  }
  diasTranscurridos ++
}

console.log(`${kurt.nombre} bajo a ${kurt.peso} kg en ${diasTranscurridos} `)