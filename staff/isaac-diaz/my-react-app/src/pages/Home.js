import log  from '../utils/coolog'

function Home() {
    log.info('home -> render')

    return <h2>Hello Home</h2>
}

export default Home