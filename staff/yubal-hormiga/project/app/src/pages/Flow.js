import { useState } from 'react'
import FlowHeader from '../components/FlowHeader'
import { AiFillPlusCircle } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import FlowModalExpesive from '../components/FlowModalExpesive'
import FlowModalIncome from '../components/FlowModalIncome'


function Flow() {

  const [pension, setPension] = useState()
  const [isValidPension, setIsValidPension] = useState(false)
  const [modalExpensive, setModalExpensive] = useState(false)
  const [modalIncome, setModalIncome] = useState(false)

  const handleNewExpense = () => {
    setModalExpensive(true)
  }

  const handleNewIncome = () => {
    setModalIncome(true)
  }

  return <>
    <div>
      <FlowHeader
        pension={pension}
        setPension={setPension}
        isValidPension={isValidPension}
        setIsValidPension={setIsValidPension}
      />

      {isValidPension && (
        <div>
          <button className='bg-green-400  rounded-md p-1' type='button'><AiFillPlusCircle size='1rem' onClick={handleNewIncome} /></button>
          <button className='bg-red-600  rounded-md p-1' type='button'><GrFormSubtract size='1rem' onClick={handleNewExpense} /></button>
        </div>
      )}

      {modalExpensive && <FlowModalExpesive
                           setModalExpensive={setModalExpensive} />}

      {modalIncome && <FlowModalIncome
                           setModalIncome={setModalIncome} />}
    </div>
  </>
}

export default Flow