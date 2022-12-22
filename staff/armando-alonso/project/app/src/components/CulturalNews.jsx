import getPublicSanidadPosts from '../logic/getPublicSanidadPosts'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CulturalNews = () => {


    const [news, setNews] = useState()
    
    const [posts, setPosts] = useState()

  useEffect(() => {
            try {
                getPublicSanidadPosts(sessionStorage.userId, (error, news) => {
                    if (error) {
                        alert(error.message)
    
                        return
                    }

                setNews(news)
                setPosts(news)

                })
            } catch (error) {
                alert(error.message)
            }

}, [])

  return (
    <>
    <div  className="w-full bg-gray-300 rounded border-t-4 border-[#CA649E]">
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-1 justify-center"
        id="tabs-tab3"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a href="#tabs-home3" className="w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 text-[#CA649E] hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3" aria-selected="true">Sanidad</a>
        </li>
        <li className="nav-item" role="presentation">
          <a href="#tabs-profile3" className="w-full block font-bold text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 text-[#7FCACE] hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-profile-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="false"
          >
            Seguridad
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-messages3"
            className="nav-link w-full block font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messages3"
            role="tab"
            aria-controls="tabs-messages3"
            aria-selected="false"
          >
            Cultura
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContent3">
        <div className="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
        
        
        <div className="flex flex-col bg-gray-300">
        {news && news.slice(news.length-1).reverse().map(notice => 
          <div className=" bg-white">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
            </a>
            <div className="p-6">
            <Link to={`/article/${notice.id}`}><h5 className="text-gray-900 text-xl font-medium mb-2">{notice.title}</h5></Link>
              <p className="text-gray-700 text-base mb-4">
                {notice.resume}
              </p>
            </div>
          </div>)}

           {/* Este código es para una de las tres noticias restantes de CULTURA */}
           {posts && posts.slice(news.length-4).slice(0, 3).reverse().map(post => 
           <div className="flex flex-col w-full ">
              <div className="flex w-full justify-center">
                <img
                  className="w-full rounded-lg p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div className="w-full p-2 flex flex-col justify-center">
                <Link to={`/article/${post.id}`}><h5 className="text-gray-900 text-m">{post.title}</h5></Link>
                  <p className="text-gray-600 text-xs">Dec 10, 2021 | Sanidad</p>
                </div>
              </div>
            </div>)}

            {/* Este código es para una de las tres noticias restantes de CULTURA */}


            {/* Este código es para una de las tres noticias restantes de CULTURA */}



        </div>


        </div>
        <div className="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">

          <div className="flex flex-col justify-center bg-white">
            <div className="rounded-lg shadow-lg bg-white">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://indiehoy.com/wp-content/uploads/2018/10/thanos-avengers.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>

             {/* Este código es para una de las tres noticias restantes de CULTURA */}

             <div className="flex flex-col w-full">
              <div className="flex w-full justify-center">
                <img
                  className="w-full rounded-lg p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div className="w-full p-2 flex flex-col justify-center">
                  <h5 className="text-gray-900 text-m">Card title for notices</h5>
                  <p className="text-gray-600 text-xs">Dec 10, 2021 | Sanidad</p>
                </div>
              </div>
            </div>

            {/* Este código es para una de las tres noticias restantes de CULTURA */}

            <div className="flex flex-col w-full">
              <div className="flex w-full justify-center">
                <img
                  className="w-full rounded-lg p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div className="w-full p-2 flex flex-col justify-center">
                  <h5 className="text-gray-900 text-m">Card title for notices</h5>
                  <p className="text-gray-600 text-xs">Dec 10, 2021 | Sanidad</p>
                </div>
              </div>
            </div>

            {/* Este código es para una de las tres noticias restantes de CULTURA */}

            <div className="flex flex-col w-full">
              <div className="flex w-full justify-center">
                <img
                  className="w-full rounded-lg p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div className="w-full p-2 flex flex-col justify-center">
                  <h5 className="text-gray-900 text-m">Card title for notices</h5>
                  <p className="text-gray-600 text-xs">Dec 10, 2021 | Sanidad</p>
                </div>
              </div>
            </div>

          </div>



        </div>
        <div className="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">

          {/* Este código es la noticia de cabecera para CULTURA */}

          <div className="flex flex-col justify-center bg-white">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/04/iron-man-2684327.jpg?itok=ElxS4408" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>

            {/* Este código es para una de las tres noticias restantes de CULTURA */}

            <div className="flex flex-col w-full">
              <div className="flex w-full justify-center">
                <img
                  className="w-full rounded-lg p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div className="w-full p-2 flex flex-col justify-center">
                  <h5 className="text-gray-900 text-m">Card title for notices</h5>
                  <p className="text-gray-600 text-xs">Dec 10, 2021 | Sanidad</p>
                </div>
              </div>
            </div>

            {/* Este código es para una de las tres noticias restantes de CULTURA */}

            <div className="flex flex-col w-full">
              <div className="flex w-full justify-center">
                <img
                  className="w-full rounded-lg p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div className="w-full p-2 flex flex-col justify-center">
                  <h5 className="text-gray-900 text-m">Card title for notices</h5>
                  <p className="text-gray-600 text-xs">Dec 10, 2021 | Sanidad</p>
                </div>
              </div>
            </div>

            {/* Este código es para una de las tres noticias restantes de CULTURA */}

            <div className="flex flex-col w-full">
              <div className="flex w-full justify-center">
                <img
                  className="w-full rounded-lg p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div className="w-full p-2 flex flex-col justify-center">
                  <h5 className="text-gray-900 text-m">Card title for notices</h5>
                  <p className="text-gray-600 text-xs">Dec 10, 2021 | Sanidad</p>
                </div>
              </div>
            </div>



          </div>


        </div>
      </div>
      </div>
    </>
  );
};

export default CulturalNews;
