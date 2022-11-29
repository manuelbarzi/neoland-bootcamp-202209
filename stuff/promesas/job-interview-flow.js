new Promise ((resolve, reject) => {
    const age = prompt('que edad tienes?')

    (age > 18)? resolve() : reject()
    })   
    .then(() => {
        const res = confirm('tienes carnet?')
        if (res)
            return
        else
            throw ''
    })
    .catch(()=> {
        alert('estudia para sacárte el carnet')
    })
    .then(() => {
        const res = confirm('tienes coche?')

        if(res)
            return
        else
            throw ''
    })
    .then(() => {
        alert('puedes conducir')
    })
    .catch(()=> {
        alert('cómprate o alquila un coche')
    })
    .catch(() =>{
        alert ('todavía no te puedes sacar el carnet ')
        })
