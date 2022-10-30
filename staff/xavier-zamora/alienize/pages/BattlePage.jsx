let totalTime = 30

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

    updateClock() {
        if (totalTime == 0) {
            this.finishTurn()
            totalTime = 30
        } else {
            totalTime -= 1
            this.setState({})
            this.updateTurn()
        }
    }

    componentDidMount() {
        setInterval(() => this.updateClock(), 1000)
    }

    selectFighter(key, index) {
        log('DEBUG', 'selectFighter(pages/BattlePages)', 'pages/BattlePage.jsx')
        try {
            if (index === 0 && hasTurn === false) {
                if (key === 0) selectAlienOne = 0
                if (key === 1) selectAlienOne = 1
                if (key === 2) selectAlienOne = 2
                if (key === 3) selectAlienOne = 3
                if (key === 4) selectAlienOne = 4
                this.finishTurn()
                this.updateTurn()
                this.setFirstTurn()
                hasTurn = true
                this.render()
            }
            if (index === 1 && hasTurn === true) {
                debugger
                if (key === 5) selectAlienTwo = 0
                if (key === 6) selectAlienTwo = 1
                if (key === 7) selectAlienTwo = 2
                if (key === 8) selectAlienTwo = 3
                if (key === 9) selectAlienTwo = 4
                this.finishTurn()
                this.updateTurn()
                this.setFirstTurn()
                hasTurn = false
                this.render
            }
        } catch (error) {
            log('ERROR', error, 'pages/BattlePage.jsx')
        }
    }

    validatePassives() {
        if (hasTurn === false && playerOneAlienFighter[selectAlienOne].passiveEfect === true) {
            if (playerOneAlienFighter[selectAlienOne].paralyzed === true) paralyzerAtack(playerTwoAlienFighter[selectAlienTwo], playerOneAlienFighter[selectAlienOne])
        }

        if (hasTurn === true && playerTwoAlienFighter[selectAlienTwo].passiveEfect === true) {
            if (playerTwoAlienFighter[selectAlienTwo].paralyzed === true) paralyzerAtack(playerOneAlienFighter[selectAlienOne], playerTwoAlienFighter[selectAlienTwo])
        }
    }

    updateTurn() { //THIS SUCCES WHEN THE TURN OVER, THEY UPDATE THE TURN
        log('DEBUG', 'updateTurn()', 'pages/BattlePage.jsx')
        this.setState({
            
        })
    }

    setFirstTurn() { //THIS FUNCTIONS COMPARE THE SPEED OF FIGTHERS AND SET THE TURN FOR FIRST ATACK
        if (playerOneAlienFighter[selectAlienOne].speed > playerTwoAlienFighter[selectAlienTwo].speed) {
            log('DEBUG', 'setFirstTurn() -> true', 'pages/BattlePage.jsx')
            hasTurn = true
        } else {
            log('DEBUG', 'setFirstTurn() -> false', 'pages/BattlePage')
            hasTurn = false
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
    }

    updatePlayersLife() { //THIS FUNCTION UPDATE THE LIFE OF THE PLAYERS FOR FINISH GAME
        let playerOneLife = 0
        let playerTwoLife = 0

        if (playerOneAlienFighter[selectAlienOne].healthPoints <= 0) {
            alert('tu alien se ha debilitado')
            selectAlienOne = selectAlienOne + 1
        }
        if (playerTwoAlienFighter[selectAlienTwo].healthPoints <= 0) {
            alert('tu alien se ha debilitado')
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

        if (turn === 0) this.setFirstTurn()

        this.updatePlayersLife()

        log('DEBUG', 'render()', 'pages/BattlePage')

        return <>
            <h2>turn: {turn}</h2>
            <h2>time: {totalTime}</h2>

            <h4>Player One</h4>
            <h6>{playerOneAlienFighter[selectAlienOne].name}</h6>
            <h5>{playerOneAlienFighter[selectAlienOne].healthPoints}</h5>

            <button onClick={() => {
                this.validatePassives()
                if (!hasTurn) {
                    alienAtack = playerOneAlienFighter[selectAlienOne]
                    alienDefense = playerTwoAlienFighter[selectAlienTwo]
                    playerOneAlienFighter[selectAlienOne].atackA(alienAtack, alienDefense)

                    this.finishTurn()
                    this.updateTurn()
                }
            }}>{playerOneAlienFighter[selectAlienOne].atack1}</button>

            <button onClick={() => {
                this.validatePassives()
                if (!hasTurn) {
                    alienAtack = playerOneAlienFighter[selectAlienOne]
                    alienDefense = playerTwoAlienFighter[selectAlienTwo]
                    playerOneAlienFighter[selectAlienOne].atackB(alienAtack, alienDefense)

                    this.finishTurn()
                    this.updateTurn()
                }
            }}>{playerOneAlienFighter[selectAlienOne].atack2}</button>
            <h6>{playerOneAlienFighter[selectAlienOne].atack3}</h6>
            <h6>{playerOneAlienFighter[selectAlienOne].atack4}</h6>

            {playerOneAlienFighter.map((fighter, index) => { return (<button key={index} onClick={() => this.selectFighter(index, 0)} >{fighter.name}</button>) })}

            <h4>Player Two</h4>
            <h6>{playerTwoAlienFighter[selectAlienTwo].name}</h6>
            <h5>{playerTwoAlienFighter[selectAlienTwo].healthPoints}</h5>

            <button onClick={() => {
                this.validatePassives()
                if (hasTurn) {
                    alienAtack = playerTwoAlienFighter[selectAlienTwo]
                    alienDefense = playerOneAlienFighter[selectAlienOne]
                    playerTwoAlienFighter[selectAlienTwo].atackA(alienAtack, alienDefense)

                    this.finishTurn()
                    this.updateTurn()
                }
            }}>{playerTwoAlienFighter[selectAlienTwo].atack1}</button>

            <button onClick={() => {
                this.validatePassives()
                if (hasTurn) {
                    alienAtack = playerTwoAlienFighter[selectAlienTwo]
                    alienDefense = playerOneAlienFighter[selectAlienOne]
                    playerTwoAlienFighter[selectAlienTwo].atackB(alienAtack, alienDefense)

                    this.finishTurn()
                    this.updateTurn()
                }
            }}>{playerOneAlienFighter[selectAlienOne].atack2}</button>
            <h6>{playerTwoAlienFighter[selectAlienTwo].atack3}</h6>
            <h6>{playerTwoAlienFighter[selectAlienTwo].atack4}</h6>

            {playerTwoAlienFighter.map((fighter, index) => { return (<button key={index = index + 5} onClick={() => this.selectFighter(index, 1)} >{fighter.name}</button>) })}
        </>
    }
}
