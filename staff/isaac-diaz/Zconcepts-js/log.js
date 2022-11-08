function log(level, message) {
    var style
    
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
undefined
log('DEBUG', 'hola mundo')
VM5927:15 DEBUG: hola mundo
undefined
log('INFO', 'server starting')
VM5927:15 INFO: server starting
undefined
log('WARN', 'wrong password')
VM5927:15 WARN: wrong password
undefined
log('FATAL', 'server on fire1')
VM5927:15 FATAL: server on fire1
undefined