const playerOneAlienOne = new BRAETHORP //THIS IS THE FIRST PICK
const playerOneAlienTwo = new DELETEMAN
const playerOneAlienThree = new BRAETHORP
const playerOneAlienFour = new DELETEMAN
const playerOneAlienFive = new BRAETHORP

const playerTwoAlienOne = new BRAETHORP //THIS IS THE FIRST PICK
const playerTwoAlienTwo = new BRAETHORP
const playerTwoAlienThree = new BRAETHORP
const playerTwoAlienFour = new BRAETHORP
const playerTwoAlienFive = new BRAETHORP

const playerOneAlienFighter = [] //ARRAY OF PICKS
const playerTwoAlienFighter = []
let selectAlienOne = 0
let selectAlienTwo = 0

playerOneAlienFighter.push(playerOneAlienOne, playerOneAlienTwo, playerOneAlienThree, playerOneAlienFour, playerOneAlienFive) //THIS PUSH THE PICKS AT ARRAY
playerTwoAlienFighter.push(playerTwoAlienOne, playerTwoAlienTwo, playerTwoAlienThree, playerTwoAlienFour, playerTwoAlienFive)

const updateHealth = 0 //THIS UPDATE HEATLTH AFTER ATACKS
let turn = 0 //SET THE TURN
let hasTurn = false // CHANGE IF PLAYER ONE AND PLAYER TWO CAN ATACK

class BattlePage extends React.Component {
    constructor() {
        super()

        this.state = {
            turn: { turn } //THIS SET THE TURN VALUE FOR RENDER
        }
    }

    selectFighter(key, index){
        log('INFO', 'selectFighter()', 'pages/BattlePage.jsx')
        console.log(key)
    }

    update() { //THIS SUCCES WHEN THE TURN OVER, THEY UPDATE THE TURN
        log('INFO', 'update()', 'pages/BattlePage.jsx')
        this.setState({
            turn: { turn }
        })
    }

    setFirstTurn() { //THIS FUNCTIONS COMPARE THE SPEED OF FIGTHERS AND SET THE TURN FOR FIRST ATACK
        if (playerOneAlienFighter[selectAlienOne].speed > playerTwoAlienFighter[selectAlienTwo].speed) {
            console.log('DEBUG', 'setFirstTurn() -> true', 'pages/BattlePage.jsx')
            hasTurn = true
        } else {
            console.log('DEBUG', 'setFirstTurn() -> false', 'pages/BattlePage')
            hasTurn = false
        }
    }

    finishTurn() { //THIS SUCCES WHEN TURN IS FINISHED
        log('DEBUG', 'finishTurn()', 'Battle.jsx')
        turn = turn + 1
    }

    updatePlayersLife() { //THIS FUNCTION UPDATE THE LIFE OF THE PLAYERS FOR FINISH GAME
        debugger
        let playerOneLife = 0
        let playerTwoLife = 0

        if(playerOneAlienFighter[selectAlienOne].healthPoints <= 0){
            alert('tu alien se ha debilitado')
        }
        if(playerTwoAlienFighter[selectAlienTwo].healthPoints <= 0){
            alert('tu alien se ha debilitado')
        }

        for (let i = playerOneAlienFighter.length - 1; i >= 0; i--) {
            playerOneLife = playerOneLife + playerOneAlienFighter[i].healthPoints
        }
        for (let i = playerTwoAlienFighter.length - 1; i >= 0; i--) {
            playerTwoLife = playerTwoLife + playerTwoAlienFighter[i].healthPoints
        }
        if (playerOneLife <= 0 || playerTwoLife <= 0) {
            if (playerOneLife > playerTwoLife) {
                alert('player one wins')
            } else {
                alert('player two wins')
            }
        }
    }

    render() { //RENDER ALL THIS COMPONENTS

            if (turn === 0) this.setFirstTurn()

            this.updatePlayersLife()
        
            log('INFO', 'render()', 'pages/BattlePage')
    
        return <>
        <h2>turn: {turn}</h2>

        <h4>Player One</h4>
        <h6>{playerOneAlienFighter[selectAlienOne].name}</h6>
        <h5>{playerOneAlienFighter[selectAlienOne].healthPoints}</h5>
    
       <button onClick={() => {
            if (!hasTurn) {
                debugger
                let alienAtack = playerOneAlienFighter[selectAlienOne]
                let alienDefense = playerTwoAlienFighter[selectAlienTwo]
                playerOneAlienFighter[selectAlienOne].atackA(alienAtack, alienDefense)

                this.finishTurn()
                this.update()
                hasTurn = true
            }
        }}>{playerOneAlienFighter[selectAlienOne].atack1}</button>
        
        {/*<div>{playerOneAlienFighter.map((fighter, index) => {return(<button key={index} onClick={this.selectFighter(index, 0)} >{fighter.name}</button>)})}</div>*/}

        <h6>{playerOneAlienFighter[selectAlienOne].atack2}</h6>
        <h6>{playerOneAlienFighter[selectAlienOne].atack3}</h6>
        <h6>{playerOneAlienFighter[selectAlienOne].atack4}</h6>

        <h4>Player Two</h4>
        <h6>{playerTwoAlienOne.name}</h6>
        <h5>{playerTwoAlienOne.healthPoints}</h5>

        <button onClick={() => {
            if (hasTurn) {
                let alienAtack = playerTwoAlienFighter[selectAlienTwo]
                let alienDefense = playerOneAlienFighter[selectAlienOne]
                playerTwoAlienFighter[selectAlienTwo].atackA(alienAtack, alienDefense)
                
                this.finishTurn()
                this.update()
                hasTurn = false
            }
        }}>{playerTwoAlienFighter[selectAlienTwo].atack1}</button>

        <h6>{playerTwoAlienOne.atack1}</h6>
        <h6>{playerTwoAlienOne.atack2}</h6>
        <h6>{playerTwoAlienOne.atack3}</h6>
        <h6>{playerTwoAlienOne.atack4}</h6>
    </>
    }
}
