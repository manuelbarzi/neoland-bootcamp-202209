import { useEffect } from 'react'
import deleteOffer from '../logic/deleteOffer'

function DeleteOffer({ className, offerToDelete, onDeleteOffer, onDeleteOfferClose }) {
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
    
        return () => document.body.style = ''
    })

    const confirmDeleteOffer = () => {
        try {
            deleteOffer(offerToDelete.id, offerToDelete.userId, sessionStorage.token)
                .then(() => onDeleteOffer())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const closeDeleteOffer = () => {
        onDeleteOfferClose()
    }


    return <div className="z-20 fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={closeDeleteOffer}>
        <div onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-1/3 h-1/4 bg-white border-2 p-10 rounded-xl ${className ? className : ""}`}>
            <p className='font-semibold text-lg'>Are you sure that you want to delete this post?</p>
            <div className="mt-7 gap-3 flex items-center justify-between">
                <button className="bg-emerald-200 w-1/2 h-10 mt-2 rounded-lg" onClick={closeDeleteOffer}>Cancel</button>
                <button onClick={confirmDeleteOffer} className="bg-emerald-200 w-1/2 h-10 mt-2 rounded-lg">Yes, Delete</button>
            </div>
        </div>
    </div>
}

export default DeleteOffer