export const Button = ({ label, onClick, disabled }: { label: string, onClick?: () => void, disabled?:boolean }) => {
    return (
        <button className={`${disabled ? "bg-red-500" : "bg-sky-600 hover:bg-sky-700"} shadow-lg  py-2 rounded-md text-white font-medium flex-1 px-3  transition-all`}
            onClick={onClick} type="submit"
            disabled={disabled}
        >
            {label}
        </button>
    )
}