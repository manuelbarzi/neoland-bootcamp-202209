import log from '../utils/coolog'
import AppoimentForm from '../components/AppoimentForm'
import AppoimentLists from '../components/AppoimentLists'
import { useState } from 'react'

function Pension() {
    log.info('Appoiment -> render')
    const [appoiments, setAppoiments] = useState([]) // Para recoger los datos del Formulario


    return <>
        <div className=''>
            < AppoimentForm
                appoiments={appoiments} //*Props
                setAppoiments={setAppoiments} //*Props
            />
            < AppoimentLists
                appoiments={appoiments} //*Props
            />
        </div>
    </>

}

export default Pension