//-----------------ADD LIFE JACKET DEBBUGER----------------------
console.log('%cLIFE JACKET DEBUGER %c||||||||_____v.1.0.0_____||||||||', 'font-size: 24px;', 'font-size: 12px;')

function log(level, message) {
    var style

    if (level === 'DEBUG')
        style = "color: green"
    else if (level === 'INFO')
        style = 'color: dodgerblue'
    else if (level === 'WARN')
        style = 'color: black; background-color: gold'
    else if (level === 'ERROR')
        style = 'color: white; background-color: tomato; font-size: 16px'
    else if (level === 'FATAL')
        style = 'color: white; background-color: red; font-size: 60px'

    console.log('%c' + level + ': ' + message, style)
    }
    log("DEBUG", "debug")
    log("INFO", "hellow world")
    log("WARN", "warning")
    log("ERROR", "fail")
    log("FATAL", "big fail")
