export default function Button({ children, className, onClick }) {
    return <button className={`w-full bg-gray-400 border border-black dark:border-white rounded-xl ${className} p-1`} onClick={onClick}>{children}</button>
}