import Button from "./Button"

function SearchPanel({ className, closeSearchPanel }) {

    const search = () => {

    }

    return <div className="z-20 fixed w-screen h-screen bg-[#aaaa] inset-y-0" onClick={closeSearchPanel}>
        <div onClick={event => event.stopPropagation()} className={`shadow-lg shadow-slate-400 w-[95%] h-[30%] bg-white border-2 p-6 rounded-xl ${className ? className : ""}`}>
            <div className="flex flex-col gap-2">
                <input className="outline-none p-1 w-full rounded-lg bg-slate-100" name='keyWord' id='keyWord' type="text" placeholder="Put a key word" />
                <input className="outline-none p-1 w-full rounded-lg bg-slate-100" type="text" name="location" id="location" placeholder="Location" />
            </div>
            <div className='flex justify-between gap-4 mt-5'>
                <Button className="text-md bg-emerald-200 w-1/2" onClick={closeSearchPanel}>Cancel</Button>
                <Button className="text-md bg-green-400 w-1/2" onClick={search}>Search</Button>
            </div>
        </div>
    </div>
}

export default SearchPanel