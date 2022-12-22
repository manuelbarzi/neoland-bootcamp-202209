import getOpenSanidadPosts from '../logic/getOpenSanidadPosts'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const OpenSanidadPosts = () => {


    const [news, setNews] = useState()
    
    const [posts, setPosts] = useState()

  useEffect(() => {
            try {
                getOpenSanidadPosts()
                  .then(posts => {
                    setNews(posts)
                    setPosts(posts)})
                  .catch(error => alert(error.message))
            } catch (error) {
                alert(error.message)
            }

}, [])

  return (
    <>
        <div className="flex flex-col bg-gray-300">
        {news && news.slice(news.length-1).reverse().map(notice => 
          <div key={notice.id} className=" bg-white">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
            </a>
            <div className="p-6">
            <Link to={`/openarticle/${notice.id}`}><h5 className="text-gray-900 text-xl font-medium mb-2">{notice.title}</h5></Link>
              <p className="text-gray-700 text-base mb-4">
                {notice.resume}
              </p>
            </div>
          </div>)}

           {/* Este código es para una de las tres noticias restantes de CULTURA */}
           {posts && posts.slice(news.length-4).slice(0, 3).reverse().map(post => 
           <div key={post.id} className="flex flex-col w-full ">
              <div className="flex w-full justify-center">
                <img
                  className="w-full rounded-lg p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div className="w-full p-2 flex flex-col justify-center">
                <Link to={`/openarticle/${post.id}`}><h5 className="text-gray-900 text-m">{post.title}</h5></Link>
                  <p className="text-gray-600 text-xs">{post.date} | {post.topic}</p>
                </div>
              </div>
            </div>)}
        </div>
    </>
  );
};

export default OpenSanidadPosts
