function Button({ children, className }) {
    return <button className={`border border-[black] rounded-xl ${className}`}>{children}</button>
}

export default Button