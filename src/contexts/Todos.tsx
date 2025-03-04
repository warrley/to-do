import { createContext, ReactNode, useEffect, useState } from "react";
import { TodoItem } from "../types/Todos";

type TodoType = {
  todos: TodoItem[];
  handleAdd: (text: string) => void;
  handleDelete: (id: number) => void;
  handleChecked: (id: number) => void;
  showModal: boolean;
  setShowModal: (f:boolean) => void;
}

export const TodosContext = createContext({} as TodoType);

const getInitialTodo = () => {
  const savedTodo = localStorage.getItem("todos");
  return savedTodo ? JSON.parse(savedTodo) : [];
}

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoItem[]>(getInitialTodo);
  const [showModal, setShowModal] = useState(false);

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
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])
  
    return (
        <TodosContext.Provider value={{ todos, handleAdd, handleDelete, handleChecked, showModal, setShowModal }}>
            {children}
        </TodosContext.Provider>
    )
}