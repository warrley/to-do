import { Edit, Trash2 } from "lucide-react"
import { useContext, useState } from "react";
import { TodosContext } from "../contexts/Todos";
import { TodoItem } from "../types/Todos";

export const Item = () => {
    const { todos, handleChecked, handleDelete, showModal, setShowModal } = useContext(TodosContext);
    const [item, setItem] = useState<TodoItem | null>(null);

    const handleEdit = (todo: TodoItem) => {
        setShowModal(!showModal)
        setItem(todo);
    }

    return (
        <div>
            {todos.map(item => (
                <div key={item.id} onClick={() => handleChecked(item.id)} className={`flex justify-between border-b px-3 p-2 duration-300 cursor-pointer select-none ${item.checked ? 'bg-green-100' : 'bg-slate-500/5 hover:green-10'}`}>
                    <h1 className={`font-medium text-lg ${item.checked ? 'line-through text-green-300' : 'text-slate-600'}`}>{item.label}</h1>
                    <div className="flex gap-5 items-center">
                        <span className="text-blue-500" onClick={(e) => { e.stopPropagation(); handleEdit(item) }}><Edit className="hover:stroke-yellow-400 transition-all duration-300" size={24}/></span>
                        <span className="text-blue-500" onClick={(e) => { e.stopPropagation(); handleDelete(item.id) } }><Trash2 className="hover:stroke-red-700 transition-all duration-300"/></span>
                    </div>
                </div>
            ))}
            {showModal && 
                <>
                    <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowModal(false)}></div>

                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-600 text-white w-[40%] p-6 rounded-lg z-50">
                        <h1 className="text-xl font-bold">EDIT TODOS: {item?.label}</h1>
                        <button className="mt-4 bg-red-500 px-4 py-2 rounded" onClick={() => setShowModal(false)}>Fechar</button>
                    </div>
                </>
            }
        </div>
    )
}