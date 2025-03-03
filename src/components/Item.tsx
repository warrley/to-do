import { Trash2 } from "lucide-react"

export const Item = () => {
    return (
        <div className="flex justify-between border-b px-3 p-2 bg-slate-500/5">
            <h1 className="font-medium text-slate-600 text-lg">buy groceries</h1>
            <span className="text-red-700 "><Trash2/></span>
        </div>
    )
}