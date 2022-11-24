function Button({ children, className, onClick }) {
    return <button className={`border border-[white] rounded-xl ${className} p-1`} onClick={onClick}>{children}</button>
}

export default Button