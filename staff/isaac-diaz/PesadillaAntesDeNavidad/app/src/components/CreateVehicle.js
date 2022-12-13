import { useNavigate } from 'react-router-dom'
import createVehicle from '../logic/createVehicle'
import Button from './Button'


export default function({ onCreated, onClose }) {
    const navigate = useNavigate()
    const submitCreateVehicle = event => {
        event.preventDefault()

        const { brand: { value: brand }, model: { value: model }, type: { value: type }, license: { value: license }, licenseDate: { value: licenseDate }, kms: { value: kms } } = event.target

        try {
            createVehicle(sessionStorage.token, brand, model, type, license, licenseDate, kms)
            .then(() => {   
                // event.target.reset()

                onCreated()
                navigate('/stadistics')

                 })
            .catch(error => alert(error.message))
                 
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <form className='flex flex-col items-center justify-center gap-2' onSubmit={submitCreateVehicle}>
            <label htmlFor='brand'>Brand</label>
            <input name="brand" type="text" id="brand" placeholder='input your brand'></input>
            <label htmlFor='model'>Model</label>
            <input name="model" type="text" id="model" placeholder='input your model'></input>
            <label htmlFor='type'>Type</label>
            <select name='type' id='type'>
                <option value='turism'>turism</option>
                <option value='motorcycle'>motorcycle</option>                
            </select>
            <label htmlFor='license'>Lisence</label>
            <input name="license" type="text" id="license" placeholder='input your lisece'></input>
            <label htmlFor='licenseDate'>LisenceDate</label>
            <input name="licenseDate" type="date" id="licenseDate" placeholder='input your license date'></input>
            <label htmlFor='kms'>Kms</label>
            <input name="kms" type="text" id="kms" placeholder='input kms'></input>
            <Button className='duration-700 ease-in-out hover:scale-125'>Create</Button>
            <button className='duration-700 ease-in-out hover:scale-125' onClick={onClose} type="button">X</button>
        </form>
    </div>
}