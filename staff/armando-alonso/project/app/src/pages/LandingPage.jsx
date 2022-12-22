import log from '../utils/coolog'
import OpenLandingNavbar from '../components/OpenLandingNavbar'
import Carousel from '../components/Carousel'
import SearchBar from '../components/SearchBar'
import TablonOpen from '../components/TablonOpen'
import CategoryPostsOne from '../components/CategoryPostsOne'
import CategoryPostsTwo from '../components/CategoryPostsTwo'
import CarouselLastNews from '../components/CarouselLastNews'
import Advertiser from '../components/Advertiser'
import NewsAyuntamiento from '../components/NewsAyuntamiento'
import VideoGallery from '../components/VideoGallery'
import Footer from '../components/Footer'
import 'tw-elements'




function Home( {}) {
    log.info('Home -> render')

    return (
        <main className="mx-auto bg-[#ECF0F5]">
            <nav>
                <OpenLandingNavbar />
            </nav>
            <div className="flex flex-wrap container mx-auto">
                <section className="flex basis-9/12 p-5">
                    <Carousel />
                </section>
                <section className="flex flex-wrap basis-3/12 p-5 justify-center">
                    <SearchBar />
                    <TablonOpen />
                </section>
                <section className="flex flex-wrap basis-9/12">
                    <article className="flex flex-wrap basis-1/2 p-5">
                        <CategoryPostsOne />
                    </article>
                    <article className="flex flex-wrap basis-1/2 p-5">
                        <CategoryPostsTwo />
                    </article>
                </section>
                <section className="flex flex-wrap basis-3/12 p-5 justify-center">
                    <Advertiser />
                </section>
                <section className="flex flex-wrap basis-9/12 p-5 justify-center">
                    <NewsAyuntamiento />
                </section>
                <section className="flex flex-wrap basis-3/12 p-5 justify-center">
                    <Advertiser />
                </section>
            </div>  
            <footer className="flex flex-wrap basis-12/12 justify-center">
                <Footer />
            </footer>
        </main>
    )
}

export default Home


{/* <h3>Hola {user? user.name : 'home'}</h3>

<LandingNavbar onNavigateToCreateNewsNavbar={onNavigateToCreateNews} />



<div className="container mx-auto p-8 flex flex-wrap">


{news && news.slice(news.length-4).reverse().map(notice => 
<div key={notice.id} className="flex flex-wrap basis-1/4 pb-8 gap-4 border-r-4">
<a href="#" className="flex items-center md:flex-row md:max-w-xl">
<img className="object-cover w-full h-24  md:w-48" src="https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/QJ3L6DP5JBH4JAUK2VDEHQBI4U.png" alt="" />
<div className="flex flex-col justify-between p-3">
    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{notice.title}</h5>
    <p className="mb-2 text-xs font-extralight text-gray-700 dark:text-gray-400">{notice.text}</p>
</div>
</a>
</div>
)}


<div className="flex gap-8 ">
<div className="flex basis-1/6 gap-4">
    <div className=" bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="h-92" src="https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/QJ3L6DP5JBH4JAUK2VDEHQBI4U.png" alt="" />
        </a>
        <div className="p-2">
            <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Terminan las obras del skatepark municipal</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

        </div>
    </div>
</div>

<Carousel />

<div className="flex basis-1/6 gap-8">
    <div className=" bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="h-92" src="https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/QJ3L6DP5JBH4JAUK2VDEHQBI4U.png" alt="" />
        </a>
        <div className="p-2">
            <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Terminan las obras del skatepark municipal</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

        </div>
    </div>
</div>

</div>

{news && news.slice(news.length-4).map(notice => 
<div key={notice.id} className="flex flex-row gap-4 p-2 basis-1/4">
    <div className=" bg-white rounded-lg">
        <a href="#">
            <img className="rounded-t-lg" src="https://www.purina.es/sites/default/files/2021-12/Welcoming_hero.jpg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notice.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{notice.text}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>
)}

</div> */}