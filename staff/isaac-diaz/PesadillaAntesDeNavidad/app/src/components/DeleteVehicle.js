import deleteVehicle from '../logic/deleteVehicle'
import Button from './Button'

export default function({ onDeleted, onClose, vehicleId }) {
    const confirmDeleteVehicle = event => {
        event.preventDefault()

        try {
            deleteVehicle(sessionStorage.token, vehicleId)
                .then(() => {

                    onDeleted()
                    retrieveVehicles()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden' onClick={onClose}>
        <div className='flex flex-col items-end p-5 rounded-xl' onClick={(event) => event.stopPropagation()}>
            <p>Tou are deleting vehicle with id ${vehicleId} <br /> Are you sure? </p>
            <div className='gap-2'>
                <Buttton onClick={onClose}>Cancel</Buttton>
                <Button onClick={confirmDeleteVehicle}>Delete</Button>
            </div>
        </div>
    </div>
}