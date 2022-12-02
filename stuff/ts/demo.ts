// https://www.typescriptlang.org/play?#code/C4TwDgpgBAysCuATCA7YUC8UDeAoKBUKAhgLYQBcUAzsAE4CWKA5gDT6HXx0nlW2MW7QlGLNKReKQBGEOrgC+uXADN4KAMbAGAexRQNdCMWAQ4SVMAAUvCQKZsa3W-3oPWo8VRRTZdAJRQVObIaIR4IkYIPDhEZBAeXDzxHmLQSkq4GnrUOgA2EAB0eTrMVobGpiGWVgDkAJLU1MQatR61AOLEdBoMxG1QAIwATP7+uEA

type Student = {
    name: string,
    surname: string,
    age: number
}

function createStudent(name: string, surname: string, age: number) : Student   {
    return { name, surname, age }
}

console.log(createStudent('Issac', 'Garcia', 12))

// in local machine
// $ ts-node demo.ts
// { name: 'Issac', surname: 'Garcia', age: 12 }