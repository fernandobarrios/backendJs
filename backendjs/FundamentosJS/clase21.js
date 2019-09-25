function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function name() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function(){
  console.log(`hola soy ${this.nombre} ${this.apellido} y me vole la gorra`)
}

Persona.prototype.soyAlto = function(){
  const ALTURA = 1.8
  return this.altura > ALTURA
}

function Desarrollador(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
  console.log(`hola soy ${this.nombre} ${this.apellido} y soy programador`)
}



