/* eslint-disable import/no-anonymous-default-export */
import updateAppointment from '../logic/updateAppointment'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export default function UpdateAppointment({ onUpdated, onClose, appointment }) {
    const submitUpdateAppointment = event => {
        event.preventDefault()

        const { title: { value: title }, body: { value: body }, date: { value: date } } = event.target

        try {
            updateAppointment(sessionStorage.token, appointment.id, title, body, date, error => {
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

            <form className='flex flex-col gap-2' onSubmit={submitUpdateAppointment}>
                <div className=''>
                    <label htmlFor='title'>Cita</label>
                    <input
                        name='title'
                        className='font-semibold text-lg flex flex-row'
                        defaultValue={appointment.title}
                        id='title'
                    />
                </div>

                <div className='' >
                    <input
                        name='body'
                        className='font-semibold text-lg flex flex-row'
                        defaultValue={appointment.body}
                        id='body'
                    />
                </div>

                <div>
                    <input
                        name='date'
                        type='datetime-local'
                        className='font-semibold text-lg '
                        defaultValue={appointment.date.toISOString().substring(0, 23)}
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