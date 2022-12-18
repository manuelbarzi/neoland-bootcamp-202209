import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser';
import updateUserEmail from '../logic/updateUserEmail';
import bgSetCredentials from '../img/bg-set-credentials.png';
import buttonOk from '../img/button-ok.png';
import buttonOkActive from '../img/button-ok-active.png';

function SetEmail({ onClose }) {

    const [user, setUser] = useState()
    const [hoverButtonOk, setHoverButtonOk] = useState(false)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))

        } catch (error) {
        }
    }, [])

    // FORM SUBMITS
    const handleUserEmailSubmit = (event) => {
        event.preventDefault();

        const { email: { value: newEmail } } = event.target

        try {
            updateUserEmail(newEmail, sessionStorage.token)
                .then(() => {
                    alert('The user email has been changed successfully')
                    user.email = newEmail
                    onClose()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    };
    return (
        <section className="bg-[#191919]/75 fixed left-0 top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
            <div className="flex flex-col justify-center" onClick={event => event.stopPropagation()}>
                <form className="flex w-full flex-col justify-center" onSubmit={handleUserEmailSubmit}>
                    <div className='flex '>
                        <span className='z-10 absolute ml-[8.7rem] mt-[0.3rem] text-white text-[1.05rem]'>Useremail</span>
                        <img
                            className=''
                            src={bgSetCredentials}
                            alt="setCredentials" />
                        <input
                            name='email'
                            type="email"
                            placeholder="Useremail"
                            id="updateEmail"
                            title="Please use @ and . on your email"
                            className="absolute ml-[3.55rem] mt-[4.3rem] z-10 pl-4 pr-4 h-9 w-[15rem] bg-inherit text-white text-center text-sm rounded-xl autofill:bg-black mr-1"
                            key={user}
                            defaultValue={user?.email}
                        />
                        <span className='z-20 absolute ml-[5rem] mt-[7.2rem] text-white text-[0.7rem]'>You can change your email at any time.</span>
                        <button
                            className='absolute z-10 ml-[7rem] mt-[10rem]'
                            onMouseEnter={() => setHoverButtonOk(true)}
                            onMouseLeave={() => setHoverButtonOk(false)}>
                            <img
                                className=''
                                src={hoverButtonOk ? buttonOkActive : buttonOk}
                                alt="ok" />
                        </button>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default SetEmail