export default function Button({ children, className, onClick }) {
    return <button className={`border border-black bg-green-400 dark:border-white rounded-xl ${className} p-1`} onClick={onClick}>{children}</button>
}