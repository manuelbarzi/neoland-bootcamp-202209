const title = <h1>hola mundo</h1>

const color1 = <li>red</li>
const color2 = <li>blue</li>
const color3 = <li>green</li>

const colors = <ul>{[color1, color2, color3]}</ul>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render([title, colors])