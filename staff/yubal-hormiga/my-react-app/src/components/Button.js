function Button({ children, className, ...restProps }) { //* restProps es para que todos los props que tienen el mismo nombre 
    return <button {...restProps} className={`border border-[black] rounded-xl ${className} p-1`}>{children}</button>
}

export default Button