import FlowForm from "./FlowForm"
import { useState } from "react"
function Flow({ totalFlows, isValidPension, setIsValidPension }) {
    const [pension, setPension] = useState()

    return (
        <headerm>
            {isValidPension ? <>
                <div className="flex justify-around" >
                    <p className='  font-semibold text-lg'>
                        <span>Presupuesto:</span>{pension}€
                    </p>
                    <p className='  font-semibold text-lg'>
                        <span>Ingresado:</span>{totalFlows.income}€
                    </p>
                    <p className='  font-semibold text-lg'>
                        <span>Gastado:</span>{totalFlows.spent}€
                    </p>
                    <p className='  font-semibold text-lg'>
                        <span>Disponible:</span>{pension - totalFlows.spent + totalFlows.income}€
                    </p>
                </div>
                <div className="flex justify-center  ">
                    <label for="file"></label>
                    <progress className="w-full h-4 " id="file" max="100" value="70"> 70% </progress>
                </div>
            </>
                :
                <FlowForm
                    pension={pension}
                    setPension={setPension}
                    setIsValidPension={setIsValidPension}
                />
            }
        </headerm >
    )
}
export default Flow