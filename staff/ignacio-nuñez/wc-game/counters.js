const countersContainer = document.createElement('div')
countersContainer.className = 'flex justify-between p-8 w-[700px]'

let succesCounter = 0
const succesCount = document.createElement('p')
succesCount.className = 'border-solid border-black border-2  p-4 text-3xl text-green-600'
succesCount.innerText = succesCounter

let lifesCounter = 3
const actualLifes = document.createElement('p')
actualLifes.innerText = 'Lifes:' + ' ' + lifesCounter
actualLifes.className = 'border-solid border-black border-2  p-4 text-3xl'

let levelCounter = 1
const actualLevel = document.createElement('p')
actualLevel.innerText = 'Nivel:' + ' ' + levelCounter
actualLevel.className = 'border-solid border-black border-2  p-4 text-3xl'

let failCounter = 0
const failCount = document.createElement('p')
failCount.className = 'border-solid border-black border-2  p-4 text-3xl text-red-600'
failCount.innerText = failCounter

countersContainer.append(succesCount, actualLifes, actualLevel, failCount)


document.body.append(countersContainer)