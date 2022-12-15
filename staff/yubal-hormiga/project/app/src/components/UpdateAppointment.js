/* eslint-disable import/no-anonymous-default-export */
import updateAppointment from '../logic/updateAppointment'
import { GrFormClose } from 'react-icons/gr'
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
        <div className='p-3 rounded-sm flex flex-col items-end bg-white dark:bg-black text-black dark:text-white border-2 border-sky-900' onClick={event => event.stopPropagation()}>
            <GrFormClose size='1.5rem' onClick={onClose} className='cursor-pointer' />

            <form className='flex flex-col gap-2  ' onSubmit={submitUpdateAppointment}>
                <div className=''>
                    <label htmlFor='title' className='font-semibold text-xl'>Cita</label>
                    <input
                        name='title'
                        className='font-semibold text-lg flex flex-row border-2 border-sky-200 text-center '
                        defaultValue={appointment.title}
                        id='title'
                    />
                </div>

                <div className='' >
                <label htmlFor='body' className='font-semibold text-xl'>Texto</label>
                    <input
                        name='body'
                        className='font-semibold text-lg flex flex-row border-2 border-sky-200 text-center '
                        defaultValue={appointment.body}
                        id='body'
                    />
                </div>

                <div>
                    <input
                        name='date'
                        type='datetime-local'
                        className='font-semibold text-lg flex flex-row border-2 border-sky-200 text-center '
                        defaultValue={appointment.date.toISOString().substring(0, 23)}
                        id='date'
                        />
                </div>

                <button
                    className="text-center my-1 px-6 py-1 rounded-sm font-medium border-2 border-cyan-900 text-white hover:text-cyan-900 bg-cyan-900 hover:bg-white cursor-pointer "
                    type="submit"
                >
                    Guardar cambios
                </button>
            </form>
        </div>
    </div>
}

// post && post.text -> post?.text