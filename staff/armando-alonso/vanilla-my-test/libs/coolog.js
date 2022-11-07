console.log('%cMy Console Log', 'color:blue; font-size: 20px');

function log(level, message) {

    let color
    if (level === 'DEBUG') {
        color = 'color: orange'
    } else if(level === 'ALERT'){
        color = 'color: green'
    } else if(level === 'ERROR'){
        color = 'color: red'
    }

    console.log('%c' + level + ', ' + message,color )

}