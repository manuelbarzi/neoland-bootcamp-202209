const title = React.createElement('h1', null, 'lista de la compra')

const item1 = React.createElement('li', null, 'Manzanas')
const item2 = React.createElement('li', null, 'Peras')
const item3 = React.createElement('li', null, 'Limones')

const lista = React.createElement('ul', null, item1, item2, item3)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render([title, lista])