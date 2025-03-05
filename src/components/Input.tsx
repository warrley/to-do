export const Input = ({ text, setText, type }: { text: string, setText: (t: string) => void, type?:string}) => {
    return (
        <input type={type ? type : text}
            className="border border-black/20 rounded-md px-3 py-2 text-slate-700 outline-none shadow-sm"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    )
}