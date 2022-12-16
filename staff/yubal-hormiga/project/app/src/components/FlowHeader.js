import log from "../utils/coolog"
import FlowForm from "./FlowForm"
import { useState } from "react"
function Flow({ totalFlows, isValidPension, setIsValidPension }) {
    log.info('FlowHeader -> render')

    const [pension, setPension] = useState()
    setIsValidPension(true) //! ELIMINAR Y RECUPERAREMOS EL PRESUPUESTO
    return (
        <header>
            {isValidPension ?
                <>
                    <div className="flex justify-around" >
                        {/* <p className='  font-semibold text-lg'>
                            <span>Presupuesto:</span>{totalFlows.income}€
                        </p> */}
                        <p className='  font-semibold text-lg'>
                            <span>Ingresado:</span> {totalFlows.income}€
                        </p>
                        <p className='  font-semibold text-lg'>
                            <span>Gastado:</span> {totalFlows.spent}€
                        </p>
                        <p className='  font-semibold text-lg'>
                            <span>Disponible:</span> {totalFlows.income - totalFlows.spent}€
                        </p>
                    </div>
                    <div className="flex justify-center  ">
                        <label htmlFor="file"></label>
                        <progress className="w-full h-4 appearance-none " id="file" max={totalFlows.income} value={(totalFlows.income - totalFlows.spent)}></progress>
                    </div>
                </>
                :
                <FlowForm
                    pension={pension}
                    setPension={setPension}
                    setIsValidPension={setIsValidPension}
                />
            }
        </header>
    )
}
export default Flow