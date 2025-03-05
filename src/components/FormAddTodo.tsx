import { useContext, useState } from "react";
import { Button } from "./Button"
import { Input } from "./Input";
import { TodosContext } from "../contexts/Todos";
import { useAuth } from "../firebase/AuthContext";

export const FormAddTodo = () => {
    const { handleAdd } = useContext(TodosContext);
    const [text, setText] = useState("");
    const { user } = useAuth();

    return (
        <form
            className={`flex flex-col gap-2 ${user ? "opacity-100" : "opacity-40"}`}
            onSubmit={e => {
            e.preventDefault();
            handleAdd(text);
            setText('');
            console.log(text)
            }}>
            <label className="font-medium">Add a todo</label>
            <Input disabled={!user} setText={setText} text={text}/>
            <Button disabled={!user} label="Add to list" />
        </form>
    )
}