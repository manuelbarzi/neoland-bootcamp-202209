function Item(count, name) {
    console.log('<li>' + count + '. ' + name + '</li>')
}

function List(names) {
    console.log('<ul>')
    names.forEach((name, index) => Item(index + 1, name))
    console.log('</ul>')
}


List(['Peter', 'Anna', 'John', 'Mary'])
List(['Peter', 'Anna', 'John', 'Mary'])



VM5108:6 <ul>
VM5108:2 <li>1. Peter</li>
VM5108:2 <li>2. Anna</li>
VM5108:2 <li>3. John</li>
VM5108:2 <li>4. Mary</li>
VM5108:8 </ul>
VM5108:6 <ul>
VM5108:2 <li>1. Peter</li>
VM5108:2 <li>2. Anna</li>
VM5108:2 <li>3. John</li>
VM5108:2 <li>4. Mary</li>
VM5108:8 </ul>