var count = 0

function Item(name) {
    count++
    
    console.log('<li>' + count + '. ' + name + '</li>')
}

function List(names) {
    console.log('<ul>')
    //names.forEach(name => Item(name))
    names.forEach(Item)
    console.log('</ul>')
}


List(['Peter', 'Anna', 'John', 'Mary'])
List(['Peter', 'Anna', 'John', 'Mary'])



VM4921:10 <ul>
VM4921:6 <li>1. Peter</li>
VM4921:6 <li>2. Anna</li>
VM4921:6 <li>3. John</li>
VM4921:6 <li>4. Mary</li>
VM4921:12 </ul>
VM4921:10 <ul>
VM4921:6 <li>5. Peter</li>
VM4921:6 <li>6. Anna</li>
VM4921:6 <li>7. John</li>
VM4921:6 <li>8. Mary</li>
VM4921:12 </ul>