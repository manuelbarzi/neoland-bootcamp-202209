try {
    ...
} catch(error) {
    if (error instanceof TypeError)
        alert('error with type: ' + error.message)
    else if (error instanceof SyntaxError)
        alert('error with syntax: ' + error.message)
    ...
}