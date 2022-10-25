{
    const names = ['pedro', 'maria', 'juana', 'jaime', 'peter']

    const res = names.arrToObj()

    console.assert(res instanceof Object && !(res instanceof Array))
    console.assert(res.length === 5)
    console.assert(res[0] === 'pedro')
    console.assert(res[1] === 'maria')
    console.assert(res[2] === 'juana')
    console.assert(res[3] === 'jaime')
    console.assert(res[4] === 'peter')
    
    console.assert(names instanceof Array)
    console.assert(names.length === 5)
    console.assert(names[0] === 'pedro')
    console.assert(names[1] === 'maria')
    console.assert(names[2] === 'juana')
    console.assert(names[3] === 'jaime')
    console.assert(names[4] === 'peter')
    
    //result = {0:'pedro', 1:'maria', 2:'juana', 3:'jaime', 4:'peter' length: 5}
    
}