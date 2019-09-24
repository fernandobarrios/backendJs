var choco={
  nombre : 'choco',
  apellido : 'barrios',
  edad : 30
}

function cumpleanios(persona){
  return {
    ...persona,
    edad : persona.edad += 1
  }
}