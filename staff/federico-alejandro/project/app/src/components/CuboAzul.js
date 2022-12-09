import papelycarton from '../img/papelycarton.png'

function CuboAzul({ OnShow, onClose }) {
    const submitCuboAzul = event => {
        event.preventDefault()
        try {
            CuboAzul()
                .then(() => OnShow())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div onClick={onClose}>
        <section onSubmit={submitCuboAzul}>
            <img src={papelycarton} alt='papelycarton' />

        </section>
    </div>
}

export default CuboAzul