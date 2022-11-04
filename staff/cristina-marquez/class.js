
//  Class declarations and this with animals

class Animal {
    constructor(specie, diet) {
        this.specie = specie;
        this.diet = diet;
    }

    saySomething() {
        console.log('I am an animal');
    }

}

class Dog extends Animal {
    constructor(breed, name) {
        super('dogus', 'omnivores')
        this.breed = breed
        this.name = name

    }

    saySomething() {
        console.log('Bark!');
    }

    sit() {
        console.log(`I am ${this.name} and I can sit`)
    }

}

class Cat extends Animal {
    constructor(breed, name) {
        super('gatus', 'tuna')
        this.breed = breed
        this.name = name
    }

    saySomething() {
        console.log('Miau faaatima miauu')
    }

    scareYou() {
        console.log(`I am ${this.name} and I can scare you`)
    }

}

class Hen extends Animal {
    constructor(breed, name) {
        super('common hen', 'corn')
        this.breed = breed
        this.name = name
    }

    saySomething() {
        console.log('kikirikiiiii')
    }

    wakeUp() {
        console.log(`I am ${this.name} and it's time to wake up`)
    }

}



myFarm = [];

const myDog = new Dog('Pug', 'Bob')
const myCat = new Cat('Siameese', 'Fatima')
const myHen = new Hen('nugget', 'Turuleta')



myFarm.push(myDog)
myFarm.push(myHen)
myFarm.push(myCat)

myFarm.map((e) => {
    e.saySomething()

})

