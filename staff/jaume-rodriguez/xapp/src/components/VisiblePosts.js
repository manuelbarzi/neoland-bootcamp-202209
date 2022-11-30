import deletePost from '../logic/deletePost'
import updatePostVisibility from '../logic/updatePostVisibility'
import updatePostText from '../logic/updatePostText'

function VisiblePosts(props) {

    // TASK FUNCTIONS
    const handleUpdatePostText = (postId, newText) => {
        try {
            updatePostText(sessionStorage.token, postId, newText, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
                props.onUpdatePostStatus()
            });
        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleUpdatePostVisibility = (postId, newVisibility) => {
        try {
            updatePostVisibility(sessionStorage.token, postId, newVisibility, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
                props.onUpdatePostVisibility()
            });

        } catch (error) {
            alert(error.message);

            return;
        }
    }

    const handleDeletePost = (postId) => {
        try {
            deletePost(sessionStorage.token, postId, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
                props.onDeletePost()
            });

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <article
            className="w-full p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100">
            <textarea
                defaultValue={props.post.text}
                className="flex flex-col text-justify bg-cyan-50 p-4 text-sm border-sky-600 border bg-sky-200 text-black text-[14px] font-normal"
                onKeyUp={(event) => handleUpdatePostText(props.post.id, event.target.value)}
            >
            </textarea>
            <div className="flex flex-row mt-3">
                <select
                    className="text-black bg-inherit self-end font-normal text-base"
                    onChange={(event) => handleUpdatePostVisibility(props.post.id, event.target.value)}
                >
                    <option disabled selected hidden value=''>
                        {props.post.visibility === 'public' ? 'Público' :
                            props.post.visibility === 'private' ? 'Privado' : 'Estado'}
                    </option>
                    {props.post.visibility === 'public' ? <>
                        <option value="private">Privado</option>
                    </>
                        :
                        <>
                            <option value="private">Privado</option>
                        </>
                    }
                </select>
                <button
                    className="material-symbols-outlined self-center rounded cursor-pointer border-none mt-3 ml-auto text-sky-900"
                    onClick={() => handleDeletePost(props.post.id)}
                >delete
                </button>
            </div>
        </article>
    )
}

export default VisiblePosts