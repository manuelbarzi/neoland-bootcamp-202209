import log from '../utils/coolog'
import { useState } from 'react'
import createFlow from '../logic/createFlow'
function FlowModalIncome({ setModal, onNewFlow }) {
    log.info('FlowModal -> render')

    const closeModal = () => {
        setModal(false)
    }

    //***States ***
    const [type, setType] = useState('')
    const [kind, setKind] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    //***Eventos***
    const handleChangeType = event => setType(event.target.value)
    const handleChangeKind = event => setKind(event.target.value)
    const handleChangeDescription = event => setDescription(event.target.value)
    const handleChangeAmount = event => setAmount(Number(event.target.value))
    const handleChangeDate = event => setDate(event.target.value)

    const submitCreateFlow = event => {
        event.preventDefault()
        // console.log('enviando')
        try {
            createFlow(sessionStorage.token, type, kind, description, amount, date)
                .then(() => onNewFlow())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
        //***Creamos un Objeto con todos los valores no hace falta añadir el valor ya que es el mismo.
        const flow = {
            type,
            kind,
            description,
            amount,
            date
        }

        onNewFlow(flow)

        setType('')
        setKind('')
        setDescription('')
        setAmount('')
        setDate('')
    }
    return <>
        <div className='shadow-md p-2 rounded-lg'>
            <div className=''>
                <button className='text-center my-1 px-6 py-1 rounded-sm font-medium border-2 border-cyan-900 text-white hover:text-white bg-cyan-900 hover:bg-white hover:text-sky-900 text-white cursor-pointer ' type='button' onClick={closeModal}>Cerrar Apunte</button>
            </div>
            <form className='flex flex-col shadow-md' onSubmit={submitCreateFlow}>
                <div className='flex gap-4 justify-between'>
                    <div className='flex shadow-md mb-3 p-1'>
                        <legend className='font-semibold text-lg'>Apunte</legend>
                        <div className='shadow-md '>
                            <label htmlFor='type' className='w-20 font-semibold text-lg'></label>
                            <select id='type' value={type} onChange={handleChangeType} >
                                <option value=''>--Seleccionar--</option>
                                <option value='income'>Ingreso</option>
                                <option value='expense'>Gasto</option>
                            </select>
                        </div>
                    </div>
                    <div className='shadow-md mb-3 p-1'>
                        <label htmlFor='kind' className=' w-20 font-semibold text-lg' >Categoria</label>
                        <select id='kind' value={kind} onChange={handleChangeKind} >
                            <option value=''>--Seleccionar--</option>
                            <option value='food'>Comida</option>
                            <option value='supply'>Suministros</option>
                            <option value='medicine'>Medicamentos</option>
                            <option value='services'>Servicios</option>
                            <option value='gift'>Regalo</option>
                            <option value='donation'>Donation</option>
                            <option value='other'>Otros</option>
                        </select>
                    </div>
                </div>
                <div className='my-2 shadow-md mb-3'>
                    <label htmlFor='description' className='text-center w-full font-semibold text-lg  placeholder-gray-500 '>Descripción</label>
                    {/* <textarea id='description' className='w-full text-center font-semibold text-lg  placeholder-gray-500 ' placeholder='Describe el gasto' value={description} onChange={handleChangeDescription} /> */}
                    <input id='description' className='text-center w-full font-semibold text-lg  placeholder-gray-500 ' type='text' placeholder='Describe el gasto' value={description} onChange={handleChangeDescription} />
                </div>

                <div className='flex justify-between'>
                    <div className='flex  shadow-md mb-3'>
                        <label htmlFor='amount' className=' w-20 font-semibold text-lg'>Cantidad</label>
                        <input id='amount' className='font-semibold text-lg text-center' type='number' placeholder='Importe' value={amount} onChange={handleChangeAmount} />
                    </div>

                    <div className='flex shadow-md mb-3'>
                        <label htmlFor='date' className='flex justify-start w-20 font-semibold text-lg'>Fecha</label>
                        <input type="date" className='w-full font-semibold text-lg text-center' value={date} onChange={handleChangeDate} />
                    </div>
                </div>
                <input type='submit' className='text-center my-1 px-6 py-1 rounded-sm font-medium border-2 border-cyan-900 text-white hover:text-cyan-900 hover:bg-white bg-cyan-900 cursor-pointer' value='Añadir Gasto' />

            </form>
        </div>
    </>
}
export default FlowModalIncome