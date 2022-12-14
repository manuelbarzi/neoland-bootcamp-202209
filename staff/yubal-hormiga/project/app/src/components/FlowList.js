/* eslint-disable react/jsx-no-comment-textnodes */
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { getLiteralForKind } from '../utils/getLiteralForKind'
import { getLiteralForType } from '../utils/getLiteralForType'
import { useEffect, useState } from 'react'
import retrieveFlows from '../logic/retrieveFlows'
import UpdateFlow from './UpdateFlow'
import DeleteFlow from './DeleteFlow'

function FlowList({ flowsChange }) {
  const [flows, setFlows] = useState([])
  const [updateFlow, setUpdateFlow] = useState()
  const [flowIdToDelete, setFlowIdToDelete] = useState()

  useEffect(() => {
    retrieveFlowsHandler()
  }, [flowsChange])


  const retrieveFlowsHandler = () => {
    try {
      retrieveFlows(sessionStorage.token)
        .then(flows => setFlows(flows))
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }
  const handleUpdateClose = () => {
    setUpdateFlow()
  }

  const handleUpdated = () => {
    retrieveFlowsHandler()

    setUpdateFlow()
  }
  const openDeleteFlow = flowId => setFlowIdToDelete(flowId)

  const closeDeleteFlow = () => setFlowIdToDelete()

  const handleFlowDeleted = () => {
    try {
      retrieveFlows(sessionStorage.token)
      .then(appointments => {
        setFlowIdToDelete()
        setFlows(appointments)
      })
      .catch((error) => {
        alert(error.message)
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return <>
    {flows.map((flow) => {
      const type = getLiteralForType(flow.type)//? PARA PODER CAMBIAR LOS VALUES
      const kind = getLiteralForKind(flow.kind)//? PARA PODER CAMBIAR LOS VALUES

      return (
        <div className='mt-2 rounded-lg shadow-md flex gap-5 pb-1'>

          <div className='w-1/12 ' >
            <p className=' font-semibold text-lg text-left'>{type}</p>
          </div>

          <div className='w-2/12 text-right'>
            <p className=' font-semibold text-lg text-left'>{kind}</p>
          </div>

          <div className='w-full'>
            <p className='font-semibold text-lg flex flex-row'>Descripcion: <spam>{flow.description}</spam></p>
          </div>

          <div className='w-3/12 ' >
            <p className='font-semibold text-lg flex flex-row'>{flow.amount}€</p>
          </div>

          <div className='w-5/12'>                           
            <p className=' font-semibold text-lg '>{flow.date.toLocaleDateString()}</p> 
          </div>

          <div className=''>
            <div className='flex flex-col self-end gap-1'>
              <button onClick={()=>{ setUpdateFlow(flow)}} className='bg-green-400  rounded-md p-1' type='button'><AiOutlineEdit size='1rem' /></button>
              <button onClick={() => openDeleteFlow(flow.id)}className='bg-red-600  rounded-md p-1' type='button'><AiOutlineDelete size='1rem' /></button>
            </div>
          </div>

        </div>
      )
    })}
     {updateFlow && <UpdateFlow flow={updateFlow} onClose={handleUpdateClose} onUpdated={handleUpdated} />}
     {flowIdToDelete && <DeleteFlow flowId={flowIdToDelete} onDeleted={handleFlowDeleted} onClose={closeDeleteFlow} />}

  </>
}

export default FlowList