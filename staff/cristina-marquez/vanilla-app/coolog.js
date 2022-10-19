function log(level, message) {
    let style

    if (level === 'DEBUG')
        style = 'color: green'
    else if (level === 'INFO')
        style = 'color: dodgerblue'
    else if (level === 'WARN')
        style = 'color: gold'
    else if (level === 'ERROR')
        style = 'color: tomato'
    else if (level === 'FATAL')
        style = 'color: white; background-color: tomato'

    console.log('%c' + level + ': ' + message, style)
}