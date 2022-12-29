const title = React.createElement('h1', null, 'hola mundo') // crea variable 

const color1 = React.createElement('li', null, 'red')
const color2 = React.createElement('li', null, 'blue')// crea variables
const color3 = React.createElement('li', null, 'green')


const colors = React.createElement('ul', null, color1, color2, color3)

const root = ReactDOM.createRoot(document.getElementById('root'))



root.render([title, colors, date])