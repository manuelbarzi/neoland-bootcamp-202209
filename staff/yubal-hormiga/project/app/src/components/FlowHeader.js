import FlowForm from "./FlowForm"
function Flow({ pension, setPension, isValidPension, setIsValidPension }) {

    return (
        <header >
            {isValidPension ? <>
                <div className="flex justify-around">
                    <div className=' w-20 font-semibold text-lg'>
                        <p>
                            <span>Presupuesto:</span>{pension}
                        </p>
                    </div>
                    <div className=' w-20 font-semibold text-lg'>
                        <p>
                            <span>Gastado:</span>{pension}
                        </p>
                    </div>
                    <div className=' w-20 font-semibold text-lg' >
                        <p>
                            <span>Disponible:</span>{pension}
                        </p>
                    </div>
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
        </header >
    )
}
export default Flow