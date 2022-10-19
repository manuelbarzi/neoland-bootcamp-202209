// imprimeme en la consola un estilo al aplicar la directiva %c -  puedes usarlo varias veces
console.log('%cCOOL lög %cv0', 'font-size: 24px;', 'font-size: 12px;')

// esta función crea una serie de estilos según el nivel de aletra del mensaje

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