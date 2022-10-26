function TaskCard() {
    return (
        <article className="w-full p-4 flex justify-center flex-col mb-4 rounded border-solid border-sky-600 border-t border-b-4 border-x bg-sky-100">
            <p className="flex flex-col items-center bg-cyan-50 p-4 text-sm border-sky-600 border"
                contenteditable="true">

            </p>
            <button className="fa fa-trash-o self-center p-1 rounded cursor-pointer border-none mt-4 ml-56"></button>
        </article>
    );
}