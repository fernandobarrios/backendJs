const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const otps = {crossDomain: true}

function obetenerPersonaje(id){ 
  return new Promise((resolve, reject) =>{
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    
    $
    .get(url, otps, function (data){
       resolve(data)
      })
    .fail(() => reject(id))
  }) 
}

var onError = (id) => console.log(`Sucedio un error al obtener el personaje ${id}`)

async function obetenerPersonajes(){
  var ids = [1,2,3,4,5,6,7,8]
  var promesas = ids.map(id => obetenerPersonaje(                                          ))
  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)    
  } catch (id) {
    onError(id)
  }
}

obetenerPersonajes()




















  
  // Promise.all(promesas)
  // .then(personajes => console.log(personajes))
  // .catch(onError)  

  // obetenerPersonaje(1)
  // .then((personaje) =>{
  //   console.log(`el personaje es ${personaje.name} `)
  //   return obetenerPersonaje(2)
  // })
  // .then((personaje) =>{
  //   console.log(`el personaje es ${personaje.name} `)
  //   return obetenerPersonaje(3)
  // })
  // .then((personaje) =>{
  //   console.log(`el personaje es ${personaje.name} `)
  //   return obetenerPersonaje(4)
  // })
  // .then((personaje) =>{
  //   console.log(`el personaje es ${personaje.name} `)
  // })
  // .catch(onError)



