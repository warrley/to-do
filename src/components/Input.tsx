export const Input = ({ text, setText, type, disabled }: { text: string, setText: (t: string) => void, type?: string, disabled?: boolean;}) => {
    return (
        <input type={type ? type : text}
            className={`border ${disabled ? "border-red-600 bg-red-600/10" : "border-black/20"} rounded-md px-3 py-2 text-slate-700 outline-none shadow-sm`}
            disabled={disabled}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    )
}