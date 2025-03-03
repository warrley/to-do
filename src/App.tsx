import { useState } from "react";
import { Header } from "./components/Header";
import { LeftArea } from "./components/Left";
import { RightArea } from "./components/Right";
import { TodoItem } from "./types/Todos";
import { Todos } from "./data/todos";

export const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>(Todos);

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
    <div className="px-6">
        <div className="bg-white w-full max-w-6xl mx-auto rounded-lg ">
          <Header todos={todos}/>
          <div className="flex h-[70vh] max-h-[700px] flex-col lg:flex-row">
            <LeftArea todos={todos} handleChecked={handleChecked} handleDelete={handleDelete}/>
            <RightArea handleAdd={handleAdd}/>
          </div>
      </div>
    </div>
  )
}

export default App;