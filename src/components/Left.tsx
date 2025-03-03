import { TodoItem } from "../types/Todos";
import { Item } from "./Item"

export type ItemProps = {
    todos: TodoItem[];
    handleChecked: (id: number) => void;
    handleDelete: (id: number) => void;
}

export const LeftArea = ({ todos, handleChecked, handleDelete }: ItemProps) => {
    return (
        <div className="flex-[2]">
            <Item todos={todos} handleChecked={handleChecked} handleDelete={handleDelete} />
        </div>
    )
}