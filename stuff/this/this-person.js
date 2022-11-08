// CASE
// creamos una variable objeto y declaramos 3 llaves (string, number y función)
var person = {}

person.name = 'Peter'
person.age = 40
person.salute = function Salute(to){ //to = 'Jhon'
    console.log (this.name /* 'Peter' */ + ':Hello ' + to)  
}
 
// llamamos a la función salute, con la propiedad to = 'Jhon'
person.salute('Jhon') === 'Peter: Hello Jhon'


// CASE with call and bind
{
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
// declaramos un segundo objeto llamado 'member' con dos llaves parecidas al objeto anterior
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  // llamo al método fullName de person con el contexto de member
  const fullNameOfMember = person.fullName.call(member)
  // imprime el resultado de la función pero para el objeto member
  console.log(fullNameOfMember)
  
  // creo una nueva función a partir del método fullName de person
  // Esta nueva función va a tener el contexto de member
  const getFullNameOfMember = person.fullName.bind(member);
  const fullName = getFullNameOfMember()
  console.log(fullName)
}

// CASE with call and bind
{
const person = {
    firstName:"John",
    lastName: "Doe",
    salute: function (to) {
      return this.firstName + ' ' + this.lastName + ": Hello " + to;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  // llamo al método fullName de person con el contexto de member
  const fullNameOfMember = person.salute('Maria').call(member)
  console.log(fullNameOfMember)
  
  // creo una nueva función a partir del método fullName de person
  // Esta nueva función va a tener el contexto de member
  
    //person.salute.bind(member)('María');

    const saluteTo = person.salute.bind(member);  
    saluteTo('María')

    const saluteMethod = person.salute
    const saluteFunctionBinded = saluteMethod.bind(member)
    const saluteString = saluteFunctionBinded('María')

const fullName = getFullNameOfMember()
  console.log(fullName)
}
