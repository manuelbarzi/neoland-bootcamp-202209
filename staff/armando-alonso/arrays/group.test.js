// Case happy pass 

{

    const inventory = [
        { name: 'asparagus', type: 'vegetables', quantity: 5 },
        { name: 'bananas', type: 'fruit', quantity: 0 },
        { name: 'goat', type: 'meat', quantity: 23 },
        { name: 'cherries', type: 'fruit', quantity: 5 },
        { name: 'fish', type: 'meat', quantity: 22 }
      ];

    const check = function(n) {
        let property = n.type

        return property


    }

    let result = inventory.group(check)

    console.assert(result.fruit[0] === [{ name: 'bananas', type: 'fruit', quantity: 0 }])
    console.assert(result.fruit[1] === { name: 'cherries', type: 'fruit', quantity: 5 })
    console.assert(result.meat[0] === { name: 'goat', type: 'meat', quantity: 23 })
    console.assert(result.meat[1] === { name: 'fish', type: 'meat', quantity: 22 })
    console.assert(result.vegetables[0] === { name: 'asparagus', type: 'vegetables', quantity: 5 })

}