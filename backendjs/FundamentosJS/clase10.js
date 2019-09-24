var choco = {
  nombre : 'choco',
  apellido : 'barrios',
  edad : 30,
  ingeniero : false,
  cocinero : true,
  developer : true
}
function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es :`)
  if(persona.ingeniero){
    console.log('ingeniero')
  }

  if(persona.cocinero){
    console.log('cocinero')
  }

  if(persona.developer){
    console.log('developer')
  }
  
}

function imprimirMayorDeEdad(persona){
  if(persona.edad >= 18){
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} es menor de edad`)
  }
}
imprimirProfesiones(choco)
imprimirMayorDeEdad(choco)