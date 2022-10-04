// console.log('%c COOL lög %c v.0', 'font-size: 24px ; color:maroon;', 'font-size: 18px; color: olive ')

function log(level, message) {
    var style
    
    if (level === 'DEBUG')
        style = 'color: green; background-color:greenyellow'
    else if (level === 'INFO')
        style = 'color: navy; background-color:lightblue'
    else if (level === 'WARN')
        style = 'color: gold ; background-color: red'
    else if (level === 'ERROR')
        style = 'color: red; background-color:lightcoral'
    else if (level === 'FATAL')
        style = 'color: white; background-color: red'
    
    // console.log('%c' + level + ': ' + message, style)
}
// log('FATAL', 'NO FUNCIONA LA CONSOLA')
