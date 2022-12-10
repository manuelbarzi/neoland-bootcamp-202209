import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
function FlowModalIncome({setModalExpensive}) {
    const closeModalExpensive = ()=>{
        setModalExpensive(false)
    }

    
    //*States */
    const [name, setName] = useState('')
    const [expense, setExpense] = useState('')
    const [kind, setKind] = useState('')

    //*Eventos */
    const handleChangeName = event => setName(event.target.value)
    const handleChangeExpense = event => setExpense(Number(event.target.value))
    const handleChangeKind = event => setKind(event.target.value)


    return <>
        <div>
            <div>
            <button className='bg-red-400  rounded-md p-1' type='button'><AiFillCloseCircle size='1rem' onClick={closeModalExpensive} /></button>
            </div>
        </div>
        <form>
            <legend>Nuevo Gasto</legend>
            <div>
                <label htmlFor='name'className='text-center w-full font-semibold text-lg  placeholder-gray-500 ' >Nombre Gasto</label>
                <input id='name' className='text-center w-full font-semibold text-lg  placeholder-gray-500 ' type='text' placeholder='Nombre del gasto' value={name} onChange={handleChangeName} />  
            </div>

            <div>
                <label htmlFor='amount' className=' w-20 font-semibold text-lg'>Cantidad</label>
                <input id='amount' className='text-center w-full font-semibold text-lg  placeholder-gray-500 ' type='number' placeholder='Cantiad del gasto' value={expense}  onChange={handleChangeExpense}/>  
            </div>
            <div>
                <label htmlFor='amount'className=' w-20 font-semibold text-lg' >Categoria</label>
                <select id='kind'value={kind} onChange={handleChangeKind} >
                    <option value=''>--Seleccionar--</option>
                    <option value='food'>Comida</option>
                    <option value='supply'>Suministros</option>
                    <option value='medicine'>Medicamentos</option>
                    <option value='services'>Servicios</option>
                    <option value='others'>Otros</option>
                </select> 
            </div>
            <input type='submit' className='font-medium py-1 px-5 bg-green-600 text-white  hover:bg-gray-700 rounded-md cursor-pointer' value='Añadir Gasto' />

        </form> 
    </>

}

export default FlowModalIncome