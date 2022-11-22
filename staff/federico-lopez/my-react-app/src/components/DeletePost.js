import deletePost from "../logic/deletePost";
import Button from "./Button";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ({ onDeleted, onClose, postId }) {
  const submitDeletePost = (event) => {
    event.preventDefault();

    deletePost(window.userId, postId, (error) => {
      if (error) {
        alert(error.message);

        return;
      }
      onDeleted();
    });
  };

  return (
    <div
      className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
      onClick={onClose}
    >
      <div
        className="bg-[white] p-5 rounded-xl flex flex-col items-end"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineCloseCircle
          size="1.5rem"
          onClick={onClose}
          className="cursor-pointer"
        />
        <p>
          You are deleting post with id {postId}
          <br /> Are you sure?
        </p>
        <form className="flex flex-col gap-2" onSubmit={submitDeletePost}>
          <Button>Delete</Button>
        </form>
      </div>
    </div>
  );
}

// post && post.text -> post?.text
