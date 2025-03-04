import { createContext, ReactNode, useState } from "react";
import { TodoItem } from "../types/Todos";

type TodoType = {
  todos: TodoItem[];
  handleAdd: (text: string) => void;
  handleDelete: (id: number) => void;
  handleChecked: (id: number) => void;
}

export const TodosContext = createContext({} as TodoType);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const handleAdd = (textTodo: string) => {
        setTodos([
          ...todos,
          {
            id: todos.length + 1,
            label: textTodo,
            checked: false
          }
        ])
      }
    
      const handleDelete = (id: number) => {
        const items = todos.filter(index => index.id !== id);
        setTodos(items);
      };
    
      const handleChecked = (id: number) => {
        setTodos(todos.map(todo => 
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        ));
      };

    return (
        <TodosContext.Provider value={{ todos, handleAdd, handleDelete, handleChecked }}>
            {children}
        </TodosContext.Provider>
    )
}