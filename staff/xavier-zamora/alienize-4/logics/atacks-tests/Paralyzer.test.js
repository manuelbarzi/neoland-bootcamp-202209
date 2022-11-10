//CASE succes when atack and defend alien are objects (happy)
describe('paralyzerAtack()', () => {
    it('succes when atack and defend alien are object', () => {
    let atackAlien = new BRAETHORP
    let defendAlien = new BRAETHORP

    let res = paralyzerAtack(atackAlien, defendAlien)    

    expect(res).toBe(true)
})
})

//CASE succes when atack or defend aliens aren't objects (unhappy) 
describe('paralyzerAtack()', () => {
    it('succes atack and defend alien are not object', () => {
    let atackAlien = "5"
    let defendAlien = new BRAETHORP


    let _error

    try{
        paralyzerAtack(atackAlien, defendAlien)
    }catch (error) {
        _error = error
    } 
    
    expect(_error).toBeInstanceOf(TypeError)
})
})