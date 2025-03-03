import { Trash2 } from "lucide-react"
import {  useState } from "react"
import { Todos } from "../data/todos";
import { TodoItem } from "../types/Todos";

export const Item = () => {
    const [todos, setTodos] = useState<TodoItem[]>(Todos);

    return (
        <div>
            {todos.map(item => (
                <div className="flex justify-between border-b px-3 p-2 bg-slate-500/5 hover:bg-green-100 duration-300">
                    <h1 className="font-medium text-slate-600 text-lg">{item.label}</h1>
                    <span className="text-blue-500"><Trash2 className="hover:stroke-red-700 transition-all duration-300"/></span>
                </div>
            ))}
        </div>
    )
}