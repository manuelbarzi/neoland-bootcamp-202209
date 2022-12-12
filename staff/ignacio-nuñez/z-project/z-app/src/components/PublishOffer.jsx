import { useEffect } from 'react'
import updateOffer from '../logic/updateOffer'
import Button from './Button'

function PublishOffer({ className, offerToPublish, onPublishOffer, onPublishOfferClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style = ''
    })

    const isPublishedParraf = offerToPublish.published ? 'You want to unpublish this offer?': 'You want to publish this offer?'

    const isPublishedButton = offerToPublish.published ? 'Yes, unpublish': 'Yes, publish'

    const confirmPublishOffer = () => {
        try {
            const published = !offerToPublish.published

            updateOffer(sessionStorage.token, offerToPublish.id, offerToPublish.userId, { published })
                .then(() => onPublishOffer())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const closePublishOffer = () => {
        onPublishOfferClose()
    }

    return <div className="z-20 fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={closePublishOffer}>
        <div onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-[90%] h-[18%] bg-white border-2 p-6 rounded-xl ${className ? className : ""}`}>
            <p className='font-semibold text-lg'>{isPublishedParraf}</p>
            <div className='flex justify-between gap-4 mt-5'>
                <Button className="text-md bg-emerald-200 w-1/2" onClick={closePublishOffer}>Cancel</Button>
                <Button className="text-md bg-green-400 w-1/2" onClick={confirmPublishOffer}>{isPublishedButton}</Button>
            </div>
        </div>
    </div>
}

export default PublishOffer