import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Post(props) {

    return (
        <div className="flex flex-col items-center justify-center mb-5">
            <div className="border  rounded-md shadow-sm flex flex-col justify-between content-center">
                <h2 className="pt-1 pl-1 pb-1 bg-teal-500 rounded-t-md text-white">{props.content.user}</h2>
                <p>{props.content.text}</p>
                <p>{new Date(props.content.date).toLocaleString()}</p>
                <button> <AiOutlineDelete /></button>
                <button> <AiOutlineEdit /> </button>
            </div>
        </div >
    )

}

export default Post