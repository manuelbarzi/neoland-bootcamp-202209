import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

function FlowList({ flows }) {
  return <>
    {flows.map((flows) => {
      return (
        <div className='mt-2 rounded-lg shadow-md flex gap-5 pb-1'>

          <div className='w-1/12 ' >
            <p className=' font-semibold text-lg text-left'>{flows.type}</p>
          </div>
          <div className='w-2/12 text-right'>
            <p className=' font-semibold text-lg text-left'>{flows.kind}</p>
          </div>

          <div className='w-full'>
            <p className='font-semibold text-lg flex flex-row'>Descripcion: <spam>{flows.description}</spam></p>
          </div>

          <div className='w-3/12 ' >
            <p className='font-semibold text-lg flex flex-row'>{flows.amount}€</p>
          </div>
          <div className='w-5/12'>
            <p className=' font-semibold text-lg '>{flows.date}</p>
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