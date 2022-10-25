class Persona {
    // let name
    constructor(name) {
        this.name = name;
    }
    presentate() {
        console.log('Me llamo' + this.name);
    }
}

class Estudiante extends Persona {
    constructor(name) {
        super(name)
    }
}

var estudiante1 = new Estudiante('Jaume')
estudiante1.presentate()