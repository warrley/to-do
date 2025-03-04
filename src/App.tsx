import { useContext } from "react";
import { Header } from "./components/Header";
import { LeftArea } from "./components/Left";
import { RightArea } from "./components/Right";
import { TodosContext } from "./contexts/Todos";

export const App = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className={`px-6 select-none`}>
        <div className="bg-white w-full max-w-6xl mx-auto rounded-lg ">
          <Header/>
          <div className="flex h-[70vh] max-h-[700px] flex-col lg:flex-row">
            {todos.length > 0 ? 
              <LeftArea />  
              : 
              <div className="flex-[2] flex items-center justify-center">
                <p className="text-2xl lg:text-3xl font-bold text-slate-700">Start by adding a todo</p>
              </div>
            }
            <RightArea />
          </div>
      </div>
    </div>
  )
}

export default App;