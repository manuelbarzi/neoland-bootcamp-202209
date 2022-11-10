//-----------------ADD LIFE JACKET DEBBUGER----------------------
console.log('%cLIFE JACKET DEBUGER %c||||||||_____v.2.0.0_____||||||||', 'font-size: 24px;', 'font-size: 12px;')

function log(level, message, file) {
    if (file === undefined) return console.log('%cLIFE JACKET NEED FILE FOR WORK', 'color: black; background-color: gold');

    var style

    if (level === 'DEBUG')
        style = "color: green"
    else if (level === 'DEBUG-PAGES')
        style = 'color: green; background-color: mangeta'
    else if (level === 'DEBUG-LOGIC')
        style = 'color: green; background-color: cyan'
    else if (level === 'TODO')
        style = 'color: white; background-color: purple'
    else if (level === 'DONE')
        style = 'color: white; background-color: grey'
    else if (level === 'INFO')
        style = 'color: dodgerblue'
    else if (level === 'WARN')
        style = 'color: black; background-color: gold'
    else if (level === 'ERROR')
        style = 'color: white; background-color: tomato; font-size: 16px'
    else if (level === 'FATAL')
        style = 'color: white; background-color: red; font-size: 60px'

    console.log('%c' + level + '___||___' + message + '___||___' + file, style)
}
log("DEBUG", "debug", "life-jaket.js")
log("INFO", "hellow world", "life-jaket.js")
log("WARN", "warning", "life-jaket.js")
log("ERROR", "fail", "life-jaket.js")
log("FATAL", "big fail", "life-jaket.js")