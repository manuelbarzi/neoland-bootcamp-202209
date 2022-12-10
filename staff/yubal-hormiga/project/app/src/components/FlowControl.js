
function FlowControl({pension}) {
    return <>
        <div>
            <p>File Progress</p>
        </div>
        <div>
            <p>
                <span>Presupuesto:</span>{pension}
            </p>
            <p>
                <span>Disponible:</span>{pension}
            </p>
            <p>
                <span>Gastado:</span>{pension}
            </p>
        </div>
    </>
}

export default FlowControl