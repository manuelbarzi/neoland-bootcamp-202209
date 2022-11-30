function Button({ children, className, onClick }) {
    return <button className={`border border-sky-700 font-semibold hover:bg-sky-300 rounded ${className} p-2`} onClick={onClick}>{children}</button>
}

export default Button