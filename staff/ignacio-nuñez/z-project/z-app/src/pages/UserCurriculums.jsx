import { useEffect, useState, useContext } from "react"
import NavBar from "../components/NavBar"
import { format } from 'timeago.js'
import retrieveUserOffers from "../logic/retrieveUserOffers"
import DeleteOffer from "../components/DeleteOffer"
import { Link } from "react-router-dom"
import createOffer from "../logic/createOffer"
import Button from "../components/Button"
import PublishOffer from "../components/PublishOffer"
import errorHandling from "../utils/errorHandling"
import { Context } from "../components/Context"

function UserCurriculums() {
    const [offers, setOffers] = useState([])
    const [offerToDelete, setOfferToDelete] = useState()
    const [offerToCreate, setOfferToCreate] = useState()
    const [offerToPublish, setOfferToPublish] = useState()

    const { showAlert } = useContext(Context)

    useEffect(() => {
        retrieveOfferHandler()
    }, [])

    const onDeleteOffer = () => {
        retrieveOfferHandler()
        setOfferToDelete()
    }

    const onDeleteOfferClose = () => setOfferToDelete()

    const onDeleteOfferClick = (id, userId) => setOfferToDelete({ id, userId })

    const onPublishOffer = () => {
        retrieveOfferHandler()
        setOfferToPublish()
    }

    const onPublishOfferClose = () => setOfferToPublish()

    const onPublishOfferClick = (id, userId, published) => setOfferToPublish({ id, userId, published })

    const retrieveOfferHandler = () => {
        try {
            retrieveUserOffers(sessionStorage.token)
                .then(offers => setOffers(offers))
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)
                })
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }

    const onCreateOffer = () => {
        retrieveOfferHandler()
        setOfferToCreate()
    }

    const onCreateOfferClick = () => {
        try {
            if (offers.length >= 3) throw new Error('Upgrade your account to premium to have more than 3 offers')

            const title = 'My New Offer'
            const description = 'Put a Description'

            createOffer(sessionStorage.token, { title, description })
                .then(() => onCreateOffer())
                .catch(error => {
                    const { errorMessage, type } = errorHandling(error)
                    showAlert(errorMessage, type)
                })
        } catch (error) {
            const { errorMessage, type } = errorHandling(error)
            showAlert(errorMessage, type)
        }
    }


    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />
        <div className="flex items-center flex-col">
            <div className="w-full flex items-center flex-col mt-28">
                <div onClick={onCreateOfferClick} className="flex justify-center items-center font-semibold text-lg border-2 shadow-sm shadow-slate-600 w-5/6 h-20 z-10 rounded-xl bg-emerald-300 cursor-pointer">
                    <span className="ml-2">Create new Offer</span>
                </div>
                <h1>hola</h1>
                <section className="flex items-center flex-col w-5/6">
                    {offers.map(offer => {
                        return <article key={offer.id} className=" shadow-sm shadow-slate-600 bg-emerald-200 flex flex-col mt-3.5 border-2 p-4 w-full rounded-xl">
                            <Link to={`/offers/${offer.id}`} className="flex justify-between z-10">
                                <h2 className='font-semibold'>{offer.title}</h2>
                                <img className="w-1/5 text-xs" src={offer.photo} alt="company logo" />
                            </Link>
                            <p className="text-xs">{format(offer.createDate)}</p>
                            <hr className="w-full border-black mt-3.5" />
                            <div className='z-10 flex justify-between gap-4 mt-2'>
                                <Button className="text-md bg-red-400 w-1/2" onClick={() => onDeleteOfferClick(offer.id, offer.user.id)}>Delete</Button>
                                <Button className="text-md bg-green-400 w-1/2" onClick={() => onPublishOfferClick(offer.id, offer.user.id, offer.published)}>{offer.published ? 'Unpublish' : 'Publish'}</Button>
                            </div>
                        </article>
                    })}
                </section>
                {offerToDelete &&
                    <DeleteOffer
                        className="inset-x-[8.3%] inset-y-1/3 absolute"
                        offerToDelete={offerToDelete}
                        onDeleteOffer={onDeleteOffer}
                        onDeleteOfferClose={onDeleteOfferClose} />}
                {offerToPublish &&
                    <PublishOffer
                        className="inset-x-[5%] inset-y-1/3 absolute"
                        offerToPublish={offerToPublish}
                        onPublishOffer={onPublishOffer}
                        onPublishOfferClose={onPublishOfferClose} />}

            </div>
        </div>
    </main>
}

export default UserCurriculums