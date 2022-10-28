function log(level, message) {
    var style
    
    if (level === 'DEBUG')         //log('DEBUG', 'hola mundo')  DEBUG: hola mundo
        style = 'color: green'    
    else if (level === 'INFO')    //log('INFO', 'server starting') INFO: server starting
        style = 'color: dodgerblue'
    else if (level === 'WARN')   //log('WARN', 'wrong password') WARN: wrong password
        style = 'color: gold'
    else if (level === 'ERROR')  
        style = 'color: tomato'
    else if (level === 'FATAL')   //log('FATAL', 'server on fire1') FATAL: server on fire1
        style = 'color: white; background-color: tomato'
    
    console.log('%c' + level + ': ' + message, style)
}


 


 


 


 
