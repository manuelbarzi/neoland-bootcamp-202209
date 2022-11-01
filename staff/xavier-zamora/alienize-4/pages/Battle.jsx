let totalTime = 30 //SET THE TURN TIME

const playerOneAlienOne = new BRAETHORP //THIS IS THE FIRST PICK
const playerOneAlienTwo = new DELETEMAN
const playerOneAlienThree = new BRAETHORP
const playerOneAlienFour = new DELETEMAN
const playerOneAlienFive = new BRAETHORP

const playerTwoAlienOne = new BRAETHORP //THIS IS THE FIRST PICK
const playerTwoAlienTwo = new DELETEMAN
const playerTwoAlienThree = new BRAETHORP
const playerTwoAlienFour = new BRAETHORP
const playerTwoAlienFive = new BRAETHORP

const playerOneAlienFighter = [] //ARRAY OF PICKS
const playerTwoAlienFighter = []
let selectAlienOne = 0
let selectAlienTwo = 0

let alienAtack
let alienDefense

playerOneAlienFighter.push(playerOneAlienOne, playerOneAlienTwo, playerOneAlienThree, playerOneAlienFour, playerOneAlienFive) //THIS PUSH THE PICKS AT ARRAY
playerTwoAlienFighter.push(playerTwoAlienOne, playerTwoAlienTwo, playerTwoAlienThree, playerTwoAlienFour, playerTwoAlienFive)

const updateHealth = 0 //THIS UPDATE HEATLTH AFTER ATACKS
let turn = 0 //SET THE TURN
let hasTurn = false // CHANGE IF PLAYER ONE AND PLAYER TWO CAN ATACK

class BattlePage extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    validatePassives() {
        if (hasTurn === false && playerOneAlienFighter[selectAlienOne].passiveEfect === true) {
            if (playerOneAlienFighter[selectAlienOne].paralyzed === true) paralyzerAtack(playerTwoAlienFighter[selectAlienTwo], playerOneAlienFighter[selectAlienOne])
        }

        if (hasTurn === true && playerTwoAlienFighter[selectAlienTwo].passiveEfect === true) {
            if (playerTwoAlienFighter[selectAlienTwo].paralyzed === true) paralyzerAtack(playerOneAlienFighter[selectAlienOne], playerTwoAlienFighter[selectAlienTwo])
        }
    }

    finishTurn() { //THIS SUCCES WHEN TURN IS FINISHED
        log('DEBUG', 'finishTurn()', 'Battle.jsx')
        turn = turn + 1
        if(hasTurn){
            hasTurn = false
        }else{
            hasTurn = true
        }
        totalTime = 30
        hasActivateCard = false
    }   

    updatePlayersLife() { //THIS FUNCTION UPDATE THE LIFE OF THE PLAYERS FOR FINISH GAME
        let playerOneLife = 0
        let playerTwoLife = 0

        if (playerOneAlienFighter[selectAlienOne].healthPoints <= 0) {
            alert('your alien is fainted')
            selectAlienOne = selectAlienOne + 1
        }
        if (playerTwoAlienFighter[selectAlienTwo].healthPoints <= 0) {
            alert('your alien is fainted')
            selectAlienTwo = selectAlienTwo + 1
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

        this.updatePlayersLife()

        log('DEBUG', 'render()', 'pages/BattlePage')

        return <>
           <BattleActionsPage onValidatePassives={this.validatePassives} 
           onFinishTurn={this.finishTurn}
           onUpdateTurn={this.updateTurn}
           onSelectFighter={this.selectFighter}
           onUpdatePlayersLife={this.updatePlayersLife}/>
        </>
    }
}
