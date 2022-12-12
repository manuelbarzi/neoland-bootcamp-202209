import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { getLiteralForKind } from '../utils/getLiteralForKind'
import { getLiteralForType } from '../utils/getLiteralForType'

function FlowList({ flows }) {
  return <>
    {flows.map((flow) => {
      const type = getLiteralForType(flow.type)
      const kind = getLiteralForKind(flow.kind)

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
            <p className=' font-semibold text-lg '>{flow.date}</p>
          </div>


          <div className=''>
            <div className='flex flex-col self-end gap-1'>
              <button className='bg-green-400  rounded-md p-1' type='button'><AiOutlineEdit size='1rem' /></button>

              <button className='bg-red-600  rounded-md p-1' type='button'><AiOutlineDelete size='1rem' /></button>
            </div>
          </div>

        </div>

      )
    })}
  </>
}

export default FlowList