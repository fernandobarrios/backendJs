class Persona{
  constructor (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    var {nombre, apellido} = this
    
    if(fn){
      fn(nombre, apellido)
    }else{
      console.log(`hola soy ${nombre} ${apellido} `)
    }
  }
  soyAlto(){
    const ALTURA = 1.8
    return this.altura > ALTURA
  }
 }

class Desarrollador extends Persona{
   constructor (nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(fn){
    // var nombre = this.nombre
    // var apellido = this.apellido
    var {nombre, apellido} = this
    
    if(fn){
      fn(nombre,apellido,true)
    }else{
      console.log(`hola soy ${nombre} ${apellido} y soy programador`)
    }
  }
 }

 function responderSaludo(nombre, apellido, esDev){
   console.log(`buen dia ${nombre} ${apellido}`)
   if(esDev){
     console.log(`no sabia q eras programador`)
   }
 }

 var juan = new Desarrollador('juan','Roman',1.78)
 juan.saludar()
 juan.saludar(responderSaludo)