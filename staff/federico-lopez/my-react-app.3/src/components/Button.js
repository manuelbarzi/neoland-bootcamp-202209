function Button({ children, className }) {
    return <button className={`border border-[black] rounded-xl ${className} p-1`}>{children}</button>
}

export default Button