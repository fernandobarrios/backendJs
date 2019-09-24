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
const INCREMENTO_DE_PESO = 0.2
const DIAS_DEL_ANIO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
const bajarDePeso = (persona)=> persona.peso -= INCREMENTO_DE_PESO

 for (let index = 0; index <= DIAS_DEL_ANIO; index++) {
   let random = Math.random()

   if(random < 0.2){
    aumentarDePeso(kurt)
   }else if (random < 0.5) {
    bajarDePeso(kurt)
   }
   
 }

 console.log(`Al final del anio ${kurt.nombre} pesa ${kurt.peso.toFixed(1)} kg`)