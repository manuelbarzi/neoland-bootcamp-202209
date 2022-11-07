//const title = document.createElement('h1')
const title = React.createElement('h1', null, 'hola mundo')

//document.body.append(title)
const rootElem = document.getElementById('root')
const root = ReactDOM.createRoot(rootElem)
root.render(title)

// const MiReact = {}
// MiReact.createElement = function() {
//     console.log('hola')
//     return {
//         render: function(){
//             console.log('pinta')
//         }
//     }
// }
