const card1 = new healthCard //SET CARDS
const card2 = new damageCard
const card1toDelete = new healthCard
const card2toDelete = new damageCard

let hasActivateCard = false //THIS IS FOR SEARCH IF CARD IS USED

let handCards = [card1, card2, card1, card2] //PLAYER ONE CARDS
let handCardsToDelete = [card2toDelete, card1toDelete, card2toDelete, card1toDelete]//PLAYER TWO CARDS
let handCardsName = [handCards[0].name, handCards[1].name, handCards[2].name, handCards[3].name]
let handCardsToDeleteName = [handCardsToDelete[0].name, handCardsToDelete[1].name, handCardsToDelete[2].name, handCardsToDelete[3].name]

function CardsActions() {

    return <section>
        <button onClick={() => {
        if (!hasTurn && handCards[0].disable === false) {
            if(hasActivateCard === false){
            handCards[0].efect(playerOneAlienFighter[selectAlienOne], playerTwoAlienFighter[selectAlienTwo])
            handCards[0].disable = true
            hasActivateCard = true
            playerOneAlienFighter[selectAlienOne].passiveEfect = true
            }else{ alert('can use one card for turn')}
        }

        }}>{handCardsName[0]}</button>
        <button onClick={() => {
        if (!hasTurn && handCards[1].disable === false) {
            if(hasActivateCard === false){
            handCards[1].efect(playerOneAlienFighter[selectAlienOne], playerTwoAlienFighter[selectAlienTwo])
            handCards[1].disable = true
            hasActivateCard = true
            playerOneAlienFighter[selectAlienOne].passiveEfect = true
            }else{ alert('can use one card for turn')}
        }
        }}>{handCardsName[1]}</button>
        <button>{handCardsName[2]}</button>
        <button>{handCardsName[3]}</button>
        <button>R</button>
    </section>
}

function CardsActionsToDelete(){
    return <section>
        <button onClick={() => {
        if (hasTurn && handCardsToDelete[0].disable === false) {
            if(hasActivateCard === false ){
            handCardsToDelete[0].efect(playerTwoAlienFighter[selectAlienTwo], playerOneAlienFighter[selectAlienOne])
            handCardsToDelete[0].disable = true
            hasActivateCard = true
            playerTwoAlienFighter[selectAlienTwo].passiveEfect = true
            }else{ alert('can use one card for turn')}
        }
        }}>{handCardsToDeleteName[0]}</button>
        <button onClick={() => {
        if (hasTurn && handCardsToDelete[1].disable === false) {
            if(hasActivateCard === false){
            handCardsToDelete[1].efect(playerTwoAlienFighter[selectAlienTwo], playerOneAlienFighter[selectAlienOne])
            handCardsToDelete[1].disable = true
            hasActivateCard = true
            playerTwoAlienFighter[selectAlienTwo].passiveEfect = true
            }else{alert('can use one card for turn')}
        }
        }}>{handCardsToDeleteName[1]}</button>
        <button>{handCardsToDeleteName[2]}</button>
        <button>{handCardsToDeleteName[3]}</button>
        <button>R</button>
    </section>

}