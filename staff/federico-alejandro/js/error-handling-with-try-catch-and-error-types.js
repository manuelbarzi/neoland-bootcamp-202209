try {
    //...
} catch(error) {
    if (error instanceof TypeError)// identificamos que tipo de error es
        alert('error with type: ' + error.message)
    else if (error instanceof SyntaxError) // identificamos que tipo de error es
        alert('error with syntax: ' + error.message)
    //...
}