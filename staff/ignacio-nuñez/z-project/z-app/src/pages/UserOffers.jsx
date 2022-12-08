import { useContext, useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { format } from 'timeago.js'
import retrieveUserOffers from "../logic/retrieveUserOffers"
import DeleteOffer from "../components/DeleteOffer"
import UpdateOffer from "../components/UpdateOffer"
import { Context } from "../components/Context"
import retrieveOfferToUpdate from "../logic/retrieveOfferToUpdate"

function UserOffers() {
    const [offers, setOffers] = useState([])
    const [offerToDelete, setOfferToDelete] = useState()
    const [offerToUpdate, setOfferToUpdate] = useState()

    const { user } = useContext(Context)

    useEffect(() => {
        retrieveOfferHandler()
    }, [])

    const onDeleteOffer = () => {
        retrieveOfferHandler()
        setOfferToDelete()
    }

    const onUpdateOffer = () => {
        retrieveOfferHandler()
        setOfferToUpdate()
    }

    const onDeleteOfferClose = () => setOfferToDelete()

    const onUpdateOfferClose = () => setOfferToUpdate()

    const retrieveOfferHandler = () => {
        try {
            retrieveUserOffers(sessionStorage.token)
                .then(offers => setOffers(offers))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const onDeleteOfferClick = (id, userId) => setOfferToDelete({ id, userId })

    const onUpdateOfferClick = (id, userId) => {
        try{
            retrieveOfferToUpdate(id, userId, sessionStorage.token)
            .then(offer => setOfferToUpdate(offer))
            .catch(error => alert(error.message))
        } catch(error){
            alert(error.message)
        }
        
    }

    return <main className="min-h-screen bg-slate-100">
        <NavBar
        />
        <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mt-28">
                <div className="border-2 z-10 shadow-sm shadow-slate-600 p-6 w-96 h-20 bg-emerald-200 rounded-xl">
                    <span>My Work Offers</span>
                </div>
                <section>
                    {offers.map(offer => {
                        return <article key={offer.id} className=" shadow-sm shadow-slate-600 bg-emerald-200 flex flex-col mt-3.5 border-2 p-4 w-96 rounded-xl">
                            <div className="flex justify-between z-10">
                                <h2 className='font-semibold'>{offer.title}</h2>
                                <p>{format(offer.createDate)}</p>
                            </div>
                            <img src={offer.photo} alt="company logo" />
                            <p>{offer.description}</p>
                            <h2>Experiences Requireds: {!offer.experiences.length && 'Not Experiences Requireds'}</h2>
                            {offer.experiences.map(experience => {
                                return <section key={experience._id}>
                                    <h3>Position: {experience.position}</h3>
                                    <h4>Industry: {experience.industry}</h4>
                                    <span>{experience.years} years of experience</span>
                                </section>
                            })}
                            <div className="flex flex-col">
                                <h2>Languages: {!offer.languages.length && 'Not Languages Required'}</h2>
                                {offer.languages.map(language => {
                                    return <section key={language._id}>
                                        <span>{language.language}: </span>
                                        <span>{language.level}</span>
                                    </section>
                                })}
                                <h2>Studies: {!offer.studies.length && 'Not Studies Required'}</h2>
                                {offer.studies.map(study => {
                                    return <section key={study._id}>
                                        <h3>Title: {study.title}</h3>
                                    </section>
                                })}
                            </div>
                            <div className='z-10 flex justify-end gap-2'>
                                <button className="self-end border-2 p-2 rounded-xl text-xs" onClick={() => onUpdateOfferClick(offer.id, offer.user.id)}>Edit</button>

                                <button className="self-end border-2 p-2 rounded-xl text-xs" onClick={() => onDeleteOfferClick(offer.id, offer.user.id)}>Delete</button>
                            </div>
                        </article>
                    })}
                </section>
                {offerToDelete &&
                    <DeleteOffer
                        className="inset-x-1/3 inset-y-1/4 absolute"
                        offerToDelete={offerToDelete}
                        onDeleteOffer={onDeleteOffer}
                        onDeleteOfferClose={onDeleteOfferClose} />}
                {offerToUpdate && <>
                    <UpdateOffer
                        className="inset-x-1/3 inset-y-1/4 absolute"
                        userInfo={user}
                        offerToUpdate={offerToUpdate}
                        onUpdateOffer={onUpdateOffer}
                        onUpdateOfferClose={onUpdateOfferClose}
                    />
                </>}
            </div>
        </div>
    </main>
}

export default UserOffers