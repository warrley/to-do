import { useState } from "react";
import { Button } from "./Button"
import { Input } from "./Input";

export const FormAddTodo = ({ handleAdd }: { handleAdd: (text: string) => void }) => {
    const [text, setText] = useState("");

    return (
        <form className="flex flex-col gap-2" onSubmit={e => {
            e.preventDefault();
            handleAdd(text)
            console.log(text);
        }}>
            <label className="font-medium">Add a todo</label>
            <Input setText={setText} text={text}/>
            <Button label="Add to list" />
        </form>
    )
}