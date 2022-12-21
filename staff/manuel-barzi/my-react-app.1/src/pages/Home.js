import log from '../utils/coolog'

function Home() {
    // const log = require('../utils/coolog')
    // import log from '../utils/coolog' // ERROR fails!

    log.info('Home -> render')

    return <h2>hola home</h2>
}

export default Home