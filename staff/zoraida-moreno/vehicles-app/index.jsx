log.on = true
log.info('start app')

//log.level = 'INFO'
log.debug('wtf')
log.info('wtf')
log.warn('wft')
log.error('wft')
log.fatal('wtf')

let user = null

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)