//CASE succes when name = String, damage = int, defense = int, heath = int, target = Object (happy)
describe('altoVoltage()', () => {
    it('succes when atack and defend alien are object', () => {
    let atackAlien = new BRAETHORP
    let defendAlien = new BRAETHORP

    let res = altoVoltage(atackAlien, defendAlien)
    
    expect(res).toBe(35)
})
})

//CASE succes when name = int, damage = int, defense = int, heath = int, target = Object (unhappy) 
describe('altoVoltage()', () => {
    it('succes atack and defend alien are not object', () => {
    let atackAlien = "5"
    let defendAlien = new BRAETHORP


    let _error

    try{
        altoVoltage(atackAlien, defendAlien)
    }catch (error) {
        _error = error
    } 
    
    expect(_error).toBeInstanceOf(TypeError)
})
})