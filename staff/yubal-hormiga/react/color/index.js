const title = React.createElement('h1', null, 'hola mundo')


const color1 = React.createElement('li', null, 'red')
const color2 = React.createElement('li', null, 'blue')
const color3 = React.createElement('li', null, 'green')

const colors = React.createElement('ul', null, color1, color2, color3)
const label = React.createElement('label', null, 'Formacion')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render([title, colors, label])