import { TodoItem } from "../types/Todos";
import { Item } from "./Item"

type ItemProps = {
    todos: TodoItem[];
    handleAdd: (todoText: string) => void
}

export const LeftArea = ({ todos, handleAdd }: ItemProps) => {
    return (
        <div className="flex-[2]">
            <Item todos={todos} handleAdd={handleAdd} />
        </div>
    )
}