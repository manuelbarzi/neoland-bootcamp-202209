function ButtonLogReg({ children, className, onClick }) {
    return <button className={`p-0 bg-green-500 text-white border border-[black] rounded-2xl ${className} p-1`} onClick={onClick}>{children}</button>
}

export default ButtonLogReg