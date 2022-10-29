// const title = document.createElement('h1')
// title.innerText = 'hola mundo'
const title = React.createElement('h1', null, 'hola mundo')

// document.body.append(title)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(title)