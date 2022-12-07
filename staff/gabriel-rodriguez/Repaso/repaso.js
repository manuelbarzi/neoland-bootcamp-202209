function pintarObjeto() {

    var tareas = [{
            id: 'task-1',
            user: 'pepito@grillo.com',
            text: 'buy milk',
            status: 'todo'
        },
        {
            id: 'task-2',
            user: 'wendy@darling.com',
            text: 'go to yoga',
            status: 'todo'
        },
        {
            id: 'task-3',
            user: 'wendy@darling.com',
            text: 'prepare for exam',
            status: 'todo'
        },
        {
            id: 'task-4',
            user: 'pepito@grillo.com',
            text: 'buy eggs',
            status: 'doing'
        },
        {
            id: 'task-5',
            user: 'wendy@darling.com',
            text: 'visit grandma',
            status: 'done'
        },
        {
            id: 'task-6',
            user: 'pepito@grillo.com',
            text: 'buy tomatoes',
            status: 'done'
        },
        {
            id: 'task-7',
            user: 'mickey@mouse.com',
            text: 'ask money to donald',
            status: 'todo'
        },
        {
            id: 'task-8',
            user: 'mickey@mouse.com',
            text: 'buy present to mini',
            status: 'doing'
        }
    ]
    var array = ['hola', 'pepe', 'coche', 'adio'];

    var usuarios = [{
            name: 'Pepito Grillo',
            email: 'pepito@grillo.com',
            password: '123123123'
        },
        {
            name: 'Mickey Mouse',
            email: 'mickey@mouse.com',
            password: '123123123'
        },
        {
            name: 'Wendy Darling',
            email: 'wendy@darling.com',
            password: '123123123'
        },
    ]

    for (i = 0; i < array.length; i++) {
        //console.log(array[i],i)
    }

    // tareas.forEach(tarea => { 
    // console.log(tarea['text'])
    // console.log(tarea.text)
    //   for (let key in tarea) {

    //     console.log(`${key}: ${tarea[key]}`)
    //     console.log('--------')
    //   }
    //  })

    var names = [];

    usuarios.forEach(usuario => {
        names.push(usuario.name)
    })



}

function test(prueba, id) {
    console.log(prueba)
    console.log('El id de la tarea es ' + id)
}


function comprobarconSwitch() {

    var texto = document.getElementById('texto').value;

    var precios = {
        "Manzana": "1,50€",
        "Platano": "2€",
        "Melón": "1,90€"
    };


    switch (texto) {
        case 'Manzana':
            console.log('El precio de la manzana es ' + precios[texto]);
            break;
        case 'Platano':
            console.log('El precio del platano  es ' + precios[texto]);
            break;
        case 'Melón':
            console.log('El precio del melón es ' + precios[texto]);
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log(`Lo siento, no tenemos el producto ${texto}.`);
    }
}

function exampleWhile() {

    let n = 0;

    while (n < 100) {
        console.log(n, 'antes');
        n++;
        console.log(n, 'despues');
    }


}