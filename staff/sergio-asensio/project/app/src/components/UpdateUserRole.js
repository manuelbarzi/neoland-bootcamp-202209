import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import retrieveUser from '../logic/retrieveUser'
import updateUserRole from '../logic/updateUserRole'

import { useContext } from 'react'
import Context from './Context'
import { errors } from 'com'

const { FormatError, AuthError, LengthError, NotFoundError } = errors

export default function UpdateUserRole({ onClose, onUpdated, user }){
    console.log(user)

    const submitUpdateRole = e => {

        const {role: { value: role } } = e.target


        try {
            updateUserRole(sessionStorage.token, user.id ,role)
                .then(() => onUpdated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
    onClick={onClose}>
    <div className="p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
        {/* <button size="1.5rem" onClick={onClose} className="cursor-pointer"> -X-</button> */}
        <form className="flex flex-col gap-2" onSubmit={submitUpdateRole}>
        <label htmlFor="inscription">Role</label>                
                <select className="text-black" id="role" name="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
        
            <button>Change Role</button>
        </form>
    </div>
</div>
}