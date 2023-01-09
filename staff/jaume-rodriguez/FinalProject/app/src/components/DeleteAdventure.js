import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
import deleteAdventure from '../logic/deleteAdventure'
import buttonDelete from '../img/button-delete.png';
import buttonDeleteActive from '../img/button-delete-active.png';
import buttonCancel from '../img/button-cancel.png';
import bgDeleteAdventure from '../img/bg-delete-adventure.png';
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function DeleteAdventure({ adventureId, onDeleted, onClose }) {
    const { showAlert } = useContext(Context)
    const [user, setUser] = useState(null)
    const [hoverButtonDelete, setHoverButtonDelete] = useState(false)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))

        } catch (error) { }
    }, [])

    const confirmDeleteAdventure = event => {
        event.preventDefault()

        try {
            deleteAdventure(sessionStorage.token, adventureId, user.gold)
                .then(() => onDeleted())
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })

        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')
        }
    }

    return <div className="bg-[#191919]/75 fixed left-0 top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center" onClick={event => event.stopPropagation()}>
            <img
                className=''
                src={bgDeleteAdventure}
                alt="bgDelete" />
            <section className='flex flex row absolute justify-center mt-[7.2rem] gap-x-3'>
                <img
                    onClick={onClose}
                    className='cursor-pointer'
                    src={buttonCancel}
                    alt="cancel" />
                <img
                    onClick={confirmDeleteAdventure}
                    className='cursor-pointer'
                    onMouseEnter={() => setHoverButtonDelete(true)}
                    onMouseLeave={() => setHoverButtonDelete(false)}
                    src={hoverButtonDelete ? buttonDeleteActive : buttonDelete}
                    alt="deleteConfirm" />
            </section>
        </div>
    </div>
}

export default DeleteAdventure