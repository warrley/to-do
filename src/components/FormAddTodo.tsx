import { useContext, useState } from "react";
import { Button } from "./Button"
import { Input } from "./Input";
import { TodosContext } from "../contexts/Todos";

export const FormAddTodo = () => {
    const { handleAdd } = useContext(TodosContext);
    const [text, setText] = useState("");

    return (
        <form className="flex flex-col gap-2" onSubmit={e => {
            e.preventDefault();
            handleAdd(text);
            setText('');
        }}>
            <label className="font-medium">Add a todo</label>
            <Input setText={setText} text={text}/>
            <Button label="Add to list" />
        </form>
    )
}