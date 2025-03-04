import { TodoItem } from "../types/Todos";
import { Item } from "./Item"

export type ItemProps = {
    todos: TodoItem[];
    handleChecked: (id: number) => void;
    handleDelete: (id: number) => void;
}

export const LeftArea = () => {
    return (
        <div className="flex-[2]">
            <Item />
        </div>
    )
}