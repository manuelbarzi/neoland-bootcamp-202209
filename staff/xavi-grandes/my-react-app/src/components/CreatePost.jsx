// import createPost from '../logic/createPost'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function ({ onCreated }) {
  const handleCreatePost = (event) => {
    event.preventDefault();

    onCreated();
  };

  return (
    <div className="absolute top-0 h-full w-full bg-[#aaaa] flex items-center justify-center">
      <div className="bg-[white] p-10 rounded-xl flex flex-col items-end">
        <AiOutlineCloseCircle size='1.5rem' className='cursor-pointer'/>
        <form className="bg-white flex flex-col gap-1.5" onSubmit={handleCreatePost}>
          <label htmlFor="text">Text</label>
          <textarea className="border border-black"
            type="text"
            name="text"
            id="text"
            placeholder="input a text"
          ></textarea>
          <label htmlFor="visibility">Visibility</label>
          <select id="visibility" name="visibility" className="border-b-2 border-gray-500 mb-4">
            <option value="public">public</option>
            <option value="private">private</option>
          </select>
          <button className="border border-black rounded-lg bg-blue-200 hover:bg-blue-300 cursor-pointer">Post</button>
        </form>
      </div>
    </div>
  );
}
