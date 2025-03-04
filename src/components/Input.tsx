export const Input = ({ text, setText }: { text: string, setText: (t: string) => void}) => {
    return (
        <input type="text"
                 className="border border-black/20 rounded-md px-3 py-2 text-slate-700 outline-none"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
    )
}