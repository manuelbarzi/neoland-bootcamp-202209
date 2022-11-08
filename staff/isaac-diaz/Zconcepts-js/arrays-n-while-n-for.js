fruits = ['apple', 'lemon', 'banana']
drinks = ['bezoya', 'estrella galicia', 'clara']
veggies = ['carrot', 'onion', 'garlic', 'olives', 'tomato']
(5) ['carrot', 'onion', 'garlic', 'olives', 'tomato']
cart = [fruits, drinks, veggies]
(3) [Array(3), Array(3), Array(5)]0: (3) ['apple', 'lemon', 'banana']1: (3) ['bezoya', 'estrella galicia', 'clara']2: (5) ['carrot', 'onion', 'garlic', 'olives', 'tomato']length: 3[[Prototype]]: Array(0)
i = 0

while (i < 3) {
    console.log(cart[i])

    i++ //i = i + 1
}
VM337:4 (3) ['apple', 'lemon', 'banana']
VM337:4 (3) ['bezoya', 'estrella galicia', 'clara']
VM337:4 (5) ['carrot', 'onion', 'garlic', 'olives', 'tomato']
2
i = 0

while (i < cart.length) {
    items = cart[i]

    j = 0
    
    while(j < items.length) {
        item = items[j]

        console.log(item)

        j++
    }

    i++ //i = i + 1
}
VM1118:11 apple
VM1118:11 lemon
VM1118:11 banana
VM1118:11 bezoya
VM1118:11 estrella galicia
VM1118:11 clara
VM1118:11 carrot
VM1118:11 onion
VM1118:11 garlic
VM1118:11 olives
VM1118:11 

/*
i = 0

while (i < cart.length) {
    items = cart[i]

    j = 0
    
    while(j < items.length) {
        item = items[j]

        console.log(item)

        j++
    }

    i++ //i = i + 1
}
*/


for (i = 0; i < cart.length; i++) {
    items = cart[i]

    for (j = 0; j < items.length; j++) {
        item = items[j]

        console.log(item)
    }
}
VM1668:28 apple
VM1668:28 lemon
VM1668:28 banana
VM1668:28 bezoya
VM1668:28 estrella galicia
VM1668:28 clara
VM1668:28 carrot
VM1668:28 onion
VM1668:28 garlic
VM1668:28 olives
VM1668:28 tomato