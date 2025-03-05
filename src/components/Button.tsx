export const Button = ({ label, onClick }: {label: string, onClick?: () => void}) => {
    return (
        <button className="shadow-lg bg-sky-600 py-2 rounded-md text-white font-medium flex-1 px-3 hover:bg-sky-700 transition-all" onClick={onClick} type="submit">
            {label}
        </button>
    )
}