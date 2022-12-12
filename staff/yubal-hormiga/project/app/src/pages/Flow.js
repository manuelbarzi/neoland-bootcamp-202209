import { useState } from 'react'
import FlowHeader from '../components/FlowHeader'
import FlowModal from '../components/FlowModal'
import FlowList from '../components/FlowList'

function Flow() {

  const [pension, setPension] = useState()
  const [isValidPension, setIsValidPension] = useState(false)
  const [modal, setModal] = useState(false)

  const [flowsChange, setFlowsChange] = useState()

  const handleNewExpense = () => {
    setModal(true)
  }

  const handleNewFlow = () => {
    // console.log(flow) //*Comprobamos que reocoge los datos
    setFlowsChange(Date.now())

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
        <>
          <main>
            <div className='my-1'>
              <button className='font-medium py-1 px-5 my-2 bg-green-600 text-white  hover:bg-gray-700 rounded-md cursor-pointer' type='button' onClick={handleNewExpense}>Agregar un nuevo apunte</button>
            </div>
          </main>
        </>
      )}

      {modal && <FlowModal
        setModal={setModal}
        onNewFlow={handleNewFlow}
      />}
      <  FlowList
        flowsChange={flowsChange}
      />
    </div>
  </>
}

export default Flow