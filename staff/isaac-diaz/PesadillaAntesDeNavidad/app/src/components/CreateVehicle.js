import createVehicle from '../logic/createVehicle'
import Button from './Button'


export default function({ onCreated, onClose }) {
    const submitCreateVehicle = event => {
        event.preventDefault()

        const { brand: { value: brand }, model: { value: model }, type: { value: type }, lisence: { value: lisence }, lisenceDate: { value: lisenceDate }, kms: { value: kms } } = event.target

        try {
            createVehicle(sessionStorage.token, brand, model, type, lisence, lisenceDate, kms, error => {
                if(error) {
                    alert(error.message)

                    return
                }

                event.target.reset()

                onCreated()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='flex flex-col items-center justify-center gap-2 bg-pink-600'>
        <form className='flex flex-col gap-2' onSubmit={submitCreateVehicle}>
            <label htmlFor='text'>Marca</label>
            <input></input>
            <label>Modelo</label>
            <input></input>
            <label>Type</label>
            <input></input>
            <label>Lisence</label>
            <input></input>
            <label>LisenceDate</label>
            <input></input>
            <label>Kms</label>
            <input></input>
            <Button>Create</Button>
            <button onSubmit={onClose}>X</button>
        </form>
    </div>
}