log('INFO', 'start app', 'index.jsx')

let user = null

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />) //ESTO ES LO QUE RENDERIZA EN PRIMER LUGAR

log('INFO', 'app start', 'index.jsx')