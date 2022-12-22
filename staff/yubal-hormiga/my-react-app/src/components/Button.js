/* eslint-disable import/no-anonymous-default-export */
export default function ({ children, className, onClick }) {
    return <button className={`border border-black dark:border-white rounded-xl ${className} p-1`} onClick={onClick}>{children}</button>
}