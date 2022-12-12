
function FlowForm({ pension, setPension, setIsValidPension }) {

    //*Eventos
    const handlePension = event => setPension(Number(event.target.value))

    const submitCreatePension = (e) => {
        e.preventDefault()

        setIsValidPension(true)
    }

    return <div>
        <form onSubmit={submitCreatePension}>
            <div>
                <label htmlFor="pension" className="mr-2 font-semibold text-lg">Pension</label>
                <input className="font-semibold text-lg text-center"
                    id="pension"
                    type='number'
                    placeholder="Introduce Pension"
                    value={pension}
                    onChange={handlePension}
                />
            </div>
            <input type='submit' className='font-medium py-1 px-5 my-2 bg-green-600 text-white  hover:bg-gray-700 rounded-md cursor-pointer' value='Añadir' />

        </form>
    </div>
}

export default FlowForm