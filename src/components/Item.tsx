import { Edit, Trash2 } from "lucide-react"
import { useContext, useState } from "react";
import { TodosContext } from "../contexts/Todos";
import { TodoItem } from "../types/Todos";
import { Input } from "./Input";
import { Button } from "./Button";

export const Item = () => {
    const { todos, handleEdit, handleChecked, handleDelete, showModal, setShowModal, } = useContext(TodosContext);
    const [item, setItem] = useState<TodoItem | null>(null);
    const [text, setText] = useState("");

    const openModal = (item: TodoItem) => {
        setItem(item);
        setShowModal(true);
    }

    return (
        <div>
            {todos.map(item => (
                <div key={item.id} onClick={() => handleChecked(item.id)} className={`flex justify-between border-b px-3 p-2 duration-300 cursor-pointer select-none ${item.checked ? 'bg-green-100' : 'bg-slate-500/5 hover:bg-green-100'}`}>
                    <h1 className={`font-medium text-lg ${item.checked ? 'line-through text-green-300' : 'text-slate-600'}`}>{item.label}</h1>
                    <div className="flex gap-5 items-center">
                        <span className="text-blue-500" onClick={(e) => { e.stopPropagation(); openModal(item) }}><Edit className="hover:stroke-yellow-400 transition-all duration-300" size={24}/></span>
                        <span className="text-blue-500" onClick={(e) => { e.stopPropagation(); handleDelete(item.id) } }><Trash2 className="hover:stroke-red-700 transition-all duration-300"/></span>
                    </div>
                </div>
            ))}
            {showModal && 
                <>
                    <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowModal(false)}></div>

                    <div className="flex flex-col items-center gap-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-600 text-white w-[40%] p-6 rounded-lg z-50">
                        <span onClick={() => setShowModal(false)} className="cursor-pointer hover:scale-125 text-xl font-bold text-red-600 absolute right-2 top-1 ">X</span>
                        <h1 className="text-xl font-bold">Edit Todo: {item?.label}</h1>
                        <form className="flex flex-col w-full gap-2" onSubmit={(e) => { e.preventDefault(); if(item && item.id !== undefined){handleEdit(item.id, text, setText)} }}>
                            <label>What's new title?</label>
                            <Input setText={setText} text={text}/>
                            <Button label="Confirm"></Button>
                        </form>
                    </div>
                </>
            }
        </div>
    )
}