import { Button } from "./Button"
import { Input } from "./Input"

export const RightArea = () => {
    return (
        <div className="flex-1 px-3 py-2 flex flex-col justify-between border-l bg-slate-500/5">
            <form className="flex flex-col gap-2">
                <label className="font-medium">Add a todo</label>
                <Input />
                <Button label="Add to list" />
            </form>
            <div className="flex flex-col gap-2">
                <Button label="Log in"/>
                <Button label="Register"/>
            </div>
        </div>
    )
}