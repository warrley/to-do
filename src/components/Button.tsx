export const Button = ({ label }: {label: string}) => {
    return (
        <button className="bg-sky-700 py-2 rounded-md text-white font-medium" type="submit">
            {label}
        </button>
    )
}