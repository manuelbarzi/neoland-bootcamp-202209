import { useState, useEffect } from 'react'
import alert from '../img/alert.png';

function Alert({ message }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, []);

    return <main className="fixed h-full w-full top-0 flex flex-col pointer-events-none" >
        <div className="flex font-alata h-full flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center relative">
                <img
                    className={`square opacity-0 duration-300 pointer-events-none ${show ? 'opacity-100 ' : ''}`}
                    src={alert}
                    alt="alertErrorMoney" />
                <p className={`text-rose-300 -mt-[4rem] text-2xl  z-10 square opacity-0 duration-300 pointer-events-none ${show ? 'opacity-100 ' : ''}`}>{message}</p>
            </div>
        </div>
    </main>

}

export default Alert