console.log('%cCOOL lög %cv0.1', 'font-size: 24px;', 'font-size: 12px;')

function log(level, message) {
    let style

    if (level === 'DEBUG')
        style = 'color: green'
    else if (level === 'INFO')
        style = 'color: dodgerblue'
    else if (level === 'WARN')
        style = 'color: orange'
    else if (level === 'ERROR')
        style = 'color: tomato'
    else if (level === 'FATAL')
        style = 'color: white; background-color: tomato'

    console.log('%c' + level + ': ' + message, style)
}

log.debug = function (message) {
    this('DEBUG', message)
}

log.info = function (message) {
    this('INFO', message)
}

log.warn = function (message) {
    this('WARN', message)
}

log.error = function (message) {
    this('ERROR', message)
}

log.fatal = function (message) {
    this('FATAL', message)
}