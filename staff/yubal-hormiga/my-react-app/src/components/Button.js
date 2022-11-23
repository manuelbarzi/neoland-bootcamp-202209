function Button({ children, className, ...restProps }) {
    return <button {...restProps} className={`border border-[black] rounded-xl ${className} p-1`}>{children}</button>
}

export default Button