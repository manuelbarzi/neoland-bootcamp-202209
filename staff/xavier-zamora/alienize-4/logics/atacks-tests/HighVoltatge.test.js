//CASE succes when atack and defend alien are objects (happy)
describe('highVoltatge()', () => {
    it('succes when atack and defend alien are object', () => {
    let atackAlien = new BRAETHORP
    let defendAlien = new BRAETHORP

    let res = highVoltatge(atackAlien, defendAlien)
    
    expect(res).toBe(35)
})
})

//CASE succes when atack or defend aliens aren't objects (unhappy) 
describe('highVoltatge()', () => {
    it('succes atack and defend alien are not object', () => {
    let atackAlien = "5"
    let defendAlien = new BRAETHORP


    let _error

    try{
        highVoltatge(atackAlien, defendAlien)
    }catch (error) {
        _error = error
    } 
    
    expect(_error).toBeInstanceOf(TypeError)
})
})