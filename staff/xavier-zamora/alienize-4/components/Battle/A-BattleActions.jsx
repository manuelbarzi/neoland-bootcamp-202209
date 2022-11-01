let cardsInHand

class BattleActionsPage extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {
        setInterval(() => this.updateClock(), 1000)
    }


    updateClock() { //THIS IS THE OCLOK OF THE TURNS
        if (totalTime == 0) {
            this.finishTurn()
            totalTime = 30
        } else {
            totalTime -= 1
            this.setState({})
            this.updateTurn()
        }
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

    updateTurn() { //THIS SUCCES WHEN THE TURN OVER, THEY UPDATE THE TURN
        log('DEBUG', 'updateTurn()', 'pages/BattlePage.jsx')
        this.setState({

        })
    }

    updatePlayersLife = () => {
        this.props.onUpdatePlayersLife()
    }


    validatePassives = () => {

        this.props.onValidatePassives()
    }

    finishTurn = () => {

        this.props.onFinishTurn()
    }

    selectFighter(key, index) { //THIS CHANGE THE PLAYER WHEN PRESS THE BUTTON
        log('DEBUG', 'selectFighter(pages/BattlePages)', 'pages/BattlePage.jsx')
        try {
            let done = false

            if (index === 0 && hasTurn === false) {
                if (key === 0 && selectAlienOne != 0) selectAlienOne = 0, done = true
                if (key === 1 && selectAlienOne != 1) selectAlienOne = 1, done = true
                if (key === 2 && selectAlienOne != 2) selectAlienOne = 2, done = true
                if (key === 3 && selectAlienOne != 3) selectAlienOne = 3, done = true
                if (key === 4 && selectAlienOne != 4) selectAlienOne = 4, done = true

                if (done) {
                    this.finishTurn()
                    this.updateTurn()
                    this.setFirstTurn()
                    hasTurn = true
                }
            }
            if (index === 1 && hasTurn === true) {
                if (key === 5 && selectAlienTwo != 0) selectAlienTwo = 0, done = true
                if (key === 6 && selectAlienTwo != 1) selectAlienTwo = 1, done = true
                if (key === 7 && selectAlienTwo != 2) selectAlienTwo = 2, done = true
                if (key === 8 && selectAlienTwo != 3) selectAlienTwo = 3, done = true
                if (key === 9 && selectAlienTwo != 4) selectAlienTwo = 4, done = true

                if (done) {
                    this.finishTurn()
                    this.updateTurn()
                    this.setFirstTurn()
                    hasTurn = false
                }
            }
        } catch (error) {
            log('ERROR', error, 'pages/BattlePage.jsx')
        }
    }

    render() {

        if (turn === 0) this.setFirstTurn()

        return <>

            <h2>turn: {turn}</h2>
            <h2>time: {totalTime}</h2>

            <section>
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
                        this.updatePlayersLife()
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
                        this.updatePlayersLife()
                        this.updateTurn()
                    }
                }}>{playerOneAlienFighter[selectAlienOne].atack2}</button>
                <h6>{playerOneAlienFighter[selectAlienOne].atack3}</h6>
                <h6>{playerOneAlienFighter[selectAlienOne].atack4}</h6>

                {playerOneAlienFighter.map((fighter, index) => { return (<button key={index} onClick={() => this.selectFighter(index, 0)} >{fighter.name}</button>) })}

            </section>
            <CardsActions />

            <section>
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
                        this.updatePlayersLife()
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
                        this.updatePlayersLife()
                        this.updateTurn()
                    }
                }}>{playerOneAlienFighter[selectAlienOne].atack2}</button>
                <h6>{playerTwoAlienFighter[selectAlienTwo].atack3}</h6>
                <h6>{playerTwoAlienFighter[selectAlienTwo].atack4}</h6>

                {playerTwoAlienFighter.map((fighter, index) => { return (<button key={index = index + 5} onClick={() => this.selectFighter(index, 1)} >{fighter.name}</button>) })}
            </section>
            <CardsActionsToDelete />
        </>
    }
}