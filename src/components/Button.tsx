export const Button = ({ label }: {label: string}) => {
    return (
        <button className="bg-sky-600 py-2 rounded-md text-white font-medium flex-1 px-3 hover:bg-sky-700 transition-all" type="submit">
            {label}
        </button>
    )
}