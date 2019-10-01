const API_URL = 'https://swapi.co/api/'
const  PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const otps = {crossDomain: true}


function obetenerPersonaje(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.
    get(url, otps, callback).
    fail(() =>{
      console.log(`Sucedio un error, No se pudo obtener el personaje{}`)
  })

}

obetenerPersonaje(1, function({name}){
  console.log(`hola yo soy ${name}`)
})

