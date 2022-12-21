export default function ({ children, className, onClick }) {
    return <button className={`border border-[black] rounded-xl ${className} p-1`} onClick={onClick}>{children}</button>
}