/* eslint-disable import/no-anonymous-default-export */
import updateAppointment from '../logic/updateFlow'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function UpdateFlow({ onUpdated, onClose, flow }) {
    const submitUpdateFlow = event => {
        event.preventDefault()
// type, kind, description, amount, date
        const { type: { value: type }, kind: { value: kind }, description: { value: description }, amount: { value: amount },  date: { value: date }, } = event.target

        try {
            updateAppointment(sessionStorage.token, flow.id, type, kind, description, Number(amount), new Date(date), error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onUpdated()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='bg-[#aaaa] absolute  top-0 right-0 h-full w-full flex flex-col justify-center items-center overflow-hidden' onClick={onClose}>
        <div className='p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white' onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size='1.5rem' onClick={onClose} className='cursor-pointer' />

            <form className='flex flex-col gap-2' onSubmit={submitUpdateFlow}>
                <div className=''>
                    <label htmlFor='type'></label>
                    <input
                        name='type'
                        className='font-semibold text-lg flex flex-row'
                        defaultValue={flow.type}
                        id='type'
                    />
                </div>

                <div className=''>
                    <label htmlFor='kind'></label>
                    <input
                        name='kind'
                        className='font-semibold text-lg flex flex-row'
                        defaultValue={flow.kind}
                        id='kind'
                    />
                </div>

                <div className=''>
                    <label htmlFor='description'></label>
                    <input
                        name='description'
                        className='font-semibold text-lg flex flex-row'
                        defaultValue={flow.description}
                        id='description'
                    />
                </div>

                <div className='' >
                    <input
                        name='amount'
                        className='font-semibold text-lg flex flex-row'
                        defaultValue={flow.amount}
                        id='amount'
                    />
                </div>

                <div>
                    <input
                        name='date'
                        type='datetime-local'
                        className='font-semibold text-lg '
                        defaultValue={flow.date.toISOString().substring(0, 23)}
                        id='date'
                        />
                </div>

                <button
                    className="px-2 py-1 bg-green-500 rounded-md border border-black font-bold text-white"
                    type="submit"
                >
                    Guardar cambios
                </button>
            </form>
        </div>
    </div>
}

// post && post.text -> post?.text
// type, kind, description, amount, date