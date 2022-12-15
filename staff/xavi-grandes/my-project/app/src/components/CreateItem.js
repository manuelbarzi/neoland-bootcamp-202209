import log from '../utils/coolog'
import createItem from '../logic/createItem'


export default function ({onClose, listId, onItemCreated }) {
    log.info('CreateList -> render')

  const submitCreateItem = (event) => {
    event.preventDefault();

    const { title: {value: title} } = event.target
  
    try {
      createItem(listId, title)
      .then(() => {
          alert('You create a new product')
          //Change with show alert 
          onItemCreated()
      })
      .catch(error => alert(error.message))

    } catch (error){
      alert(error.message)
    }
 } 

  return (
    <section className="absolute top-0 z-30 h-[100vh] w-full bg-blue-200">
      <form className='mt-4 flex flex-col items-center' onSubmit={submitCreateItem}>
        <input className='w-4/5 h-[3rem] rounded-xl pl-4 text-xl' type="text" id="title" name="title" placeholder="Insert title"></input>
        <button className='self-end mr-[2.5rem] mt-4 w-[8.5rem] h-[3rem] bg-green-500 rounded-xl text-xl text-white'>Create</button>
      </form>
      <button className='absolute top-[5rem] left-[2.5rem] self-end w-[8.5rem] h-[3rem] bg-white rounded-xl text-xl' onClick={onClose}>Cancel</button>
    </section>
  );
}