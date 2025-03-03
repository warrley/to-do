import { Trash2 } from "lucide-react"
import { ItemProps } from "./Left";

export const Item = ({ todos, setTodos }: ItemProps) => {
    const handleDelete = (id: number) => {
        const items = todos.filter(index => index.id !== id);
        setTodos(items);        
    }

    const handleChecked = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        ));
    };

    return (
        <div>
            {todos.map(item => (
                <div key={item.id} onClick={() => handleChecked(item.id)} className={`flex justify-between border-b px-3 p-2 duration-300 cursor-pointer ${item.checked ? 'bg-green-100' : 'bg-slate-500/5 hover:green-10'}`}>
                    <h1 className={`font-medium text-lg ${item.checked ? 'line-through text-green-300': 'text-slate-600'}`}>{item.label}</h1>
                    <span className="text-blue-500" onClick={(e) => { e.stopPropagation(); handleDelete(item.id) } }><Trash2 className="hover:stroke-red-700 transition-all duration-300"/></span>
                </div>
            ))}
        </div>
    )
}