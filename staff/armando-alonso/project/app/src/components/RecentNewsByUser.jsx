import log from '../utils/coolog'
import getSessionPosts from '../logic/getSessionPosts'
import retrievePublicNews from '../logic/retrievePublicNews'
import DeletePublication from '../components/DeletePublication'
import { useEffect, useState } from 'react'
import { CiEdit, CiEraser } from "react-icons/ci"

const News = ({ onNavigateToEdit, onPublicationIdToEdit, updatePublicationsState }) => {

    const [news, setNews] = useState()
    
    const [publicationIdToEdit, setPublicationIdToEdit] = useState()

    const [publicationIdToDelete, setPublicationIdToDelete] = useState()

    const [updateState, setupdateState] = useState()

  useEffect(() => {
            try {
              getSessionPosts(sessionStorage.userId)
                  .then(posts => {
                    setupdateState(updatePublicationsState)
                    console.log(news)
                    setNews(posts)
                    })
                  .catch(error => alert(error.message))
            } catch (error) {
                alert(error.message)
            }
}, [updatePublicationsState])


const handleEditPublication = publicationId => {
  log.info('Button Edit -> render')

  window.publicationId = publicationId

  setPublicationIdToEdit(publicationId)

  onPublicationIdToEdit(publicationIdToEdit)

  onNavigateToEdit()

  setupdateState(updatePublicationsState)

}

const openDeletePublication = publicationId => setPublicationIdToDelete(publicationId)

const closeDeletePublication = publicationId => setPublicationIdToDelete()

const handlePublicationDeleted = () => {
  try {
      getSessionPosts(sessionStorage.userId)
          .then(posts => {
            setNews(posts)
            setPublicationIdToDelete()})
          .catch(error => alert(error.message))
  } catch (error) {
      alert(error.message)
  }
}

  return (
    <>
    <div className="flex flex-col w-full bg-[#FFF]">
      <div className="flex justify-center rounded bg-[#3E5062] shadow-lg">
        <div className="w-full p-2 flex flex-col">
          <h5 className="flex bg-[#3E5062] text-white text-m justify-center">NOTICIAS RECIENTES</h5>
        </div>
      </div>
    

      {news && news.slice(news.length-7).reverse().map(post => 
      <div key={post.id} className="flex flex-col w-full">
        <div className="flex w-full justify-center">
          <img
            className="w-full p-2 md:h-16 object-cover md:w-20 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div className="w-full p-2 flex">
          <div className="flex flex-col basis-5/6">
            <h5 className="flex text-gray-900 text-m">{post.title}</h5>
            <p className="flex text-gray-600 text-xs">{post.resume}</p>
            </div>
           {post.user === sessionStorage.userId && <div className="flex flex-wrap basis-1/6 justify-end">
            <button onClick={() => handleEditPublication(post.id)}><CiEdit /></button>
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => openDeletePublication(post.id)}><CiEraser /></button>
          </div>}
          </div>
        </div>
      </div>
      )}

      {publicationIdToDelete && <DeletePublication publicationId={publicationIdToDelete} onDeleted={handlePublicationDeleted} onClose={closeDeletePublication} />}
    </div>
    </>
  );
};

export default News;
