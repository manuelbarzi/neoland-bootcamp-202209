import log from '../utils/coolog'
import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import LandingNavbar from '../components/LandingNavbar'
import Carousel from '../components/Carousel'
import SearchBar from '../components/SearchBar'
import RecentNews from '../components/RecentNews'
import CulturalNews from '../components/CulturalNews'
import CategoryClosedPostsOne from '../components/CategoryClosedPostsOne'
import CategoryClosedPostsTwo from '../components/CategoryClosedPostsTwo'
import CarouselLastNews from '../components/CarouselLastNews'
import Advertiser from '../components/Advertiser'
import NewsAyuntamiento from '../components/NewsAyuntamiento'
import VideoGallery from '../components/VideoGallery'
import Footer from '../components/Footer'
import 'tw-elements'


function Home( {}) {
    log.info('Home -> render')

    const [user, setUser] = useState()
    const [news, setNews] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.userId)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
            } catch (error) {
                alert(error.message)
            }
    }, [])


    return (
        
        <main className="mx-auto bg-[#ECF0F5]">
            <nav>
            <LandingNavbar />
            </nav>
            <div className="flex flex-wrap container mx-auto">
                <section className="flex basis-9/12 p-5">
                    <Carousel />
                </section>
                <section className="flex flex-wrap basis-3/12 p-5 justify-center">
                    <SearchBar />
                    <RecentNews />
                </section>
                <section className="flex flex-wrap basis-9/12 p-5">
                    <article className="flex flex-wrap basis-1/2 p-5">
                        <CategoryClosedPostsOne />
                    </article>
                    <article className="flex flex-wrap basis-1/2 p-5">
                        <CategoryClosedPostsTwo />
                    </article>
                </section>
                <section className="flex flex-wrap basis-3/12 p-5 justify-center">
                    <Advertiser />
                </section>
                <section className="flex flex-wrap basis-9/12 p-5 justify-center">
                    <CarouselLastNews />
                </section>
                <section className="flex flex-wrap basis-3/12 p-5 justify-center">
                    <Advertiser />
                </section>
                <section className="flex flex-wrap basis-9/12 p-5">
                    <article className="flex flex-wrap basis-1/3 p-5">
                        <CulturalNews />
                    </article>
                    <article className="flex flex-wrap basis-1/3 p-5">
                        <CulturalNews />
                    </article>
                    <article className="flex flex-wrap basis-1/3 p-5">
                        <CulturalNews />
                    </article>
                </section>
                <section className="flex flex-wrap basis-3/12 p-5 justify-center">
                    <Advertiser />
                </section>
                <section className="flex flex-wrap basis-9/12 p-5 justify-center">
                    <NewsAyuntamiento />
                </section>
                <section className="flex flex-wrap basis-3/12 p-5 justify-center">
                    <VideoGallery />
                </section>
            </div>  
            <footer className="flex flex-wrap basis-12/12 justify-center">
                <Footer />
            </footer>
        </main>
    )
}

export default Home
