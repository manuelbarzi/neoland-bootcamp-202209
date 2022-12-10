import FlowForm from "./FlowForm"
import FlowControl from "./FlowControl"
function Flow({ pension, setPension, isValidPension, setIsValidPension }) {

    return (
        <header>
            <h1>Control de Pensión</h1>
            {isValidPension ? 
                < FlowControl 
                 pension = {pension}
                />
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