import { useEffect, useState } from 'react'
import alert from '../img/alert.png';

function Alert({ message, onClose }) {
    const [start, setStart] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setStart(true);

            setTimeout(() => {
                onClose();
            }, 3000);
        }, 300);
    }, []);

    return <main className="fixed h-full w-full top-0 flex flex-col pointer-events-none" >
        <div className="flex font-alata h-full flex-col justify-center items-center -mt-[1rem]">
            <div className="flex flex-col justify-center items-center relative">
                <img
                    className={`square opacity-0 duration-300 pointer-events-none ${start ? 'opacity-100' : ''}`}
                    src={alert}
                    alt="alertErrorMoney" />
                <p className={`text-rose-300 opacity-0 -mt-[4rem] text-2xl  z-10 square ${start ? 'opacity-100' : ''} duration-300 pointer-events-none `}>{message}</p>
            </div>
        </div>
    </main>

}

export default Alert