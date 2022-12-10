import { AiFillCloseCircle } from 'react-icons/ai'

function FlowModalIncome({setModalIncome}) {
    const closeModalIncome = ()=>{
        setModalIncome(false)
    }
    return <>
        <div>
            <div>
                <h1> desde modal Income</h1>
            <button className='bg-red-400  rounded-md p-1' type='button'><AiFillCloseCircle size='1rem' onClick={closeModalIncome} /></button>
            </div>
        </div>

    </>

}

export default FlowModalIncome