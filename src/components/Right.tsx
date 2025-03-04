import { FormAddTodo } from "./FormAddTodo"
import { FormLogin } from "./FormLogin"

export const RightArea = () => {

    return (
        <div className="flex-1 px-3 py-2 flex flex-col justify-between border-t lg:border-l  bg-slate-500/5 gap-2">
            <FormAddTodo />
            <FormLogin/>
        </div>
    )
}