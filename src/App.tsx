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

  return (
    <div className="px-6">
        <div className="bg-white w-full max-w-6xl mx-auto rounded-lg ">
          <Header />
          <div className="flex h-[70vh] max-h-[700px] flex-col lg:flex-row">
            <LeftArea todos={todos} handleAdd={handleAdd} />
            <RightArea handleAdd={handleAdd}/>
          </div>
      </div>
    </div>
  )
}

export default App;