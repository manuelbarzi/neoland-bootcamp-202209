new Promise((resolve, reject) => {
    const res = confirm('eres moreno?')

    res? resolve() : reject()    
})
    .catch(() => {
        const res = confirm('eres rubio?')

        if (res)
            return
        else
            throw ''
    })
    .catch(() => {
        const res = confirm('eres pelirrojo?')

        if (res)
            return
        else
            throw ''
    })
    .catch(() => {
        alert('da igual, buscate otro')

        throw 2
    })
    .then(() => {
        const age = prompt('qué edad tienes?')

        return age < 18
    })
    .then(lessThan18 => lessThan18? alert('a estudiar!') : alert('tienes una oferta de trabajo'))
    .catch(() => alert('game over'))
    
    
    