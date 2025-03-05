import { useContext, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { LeftArea } from "./components/Left";
import { RightArea } from "./components/Right";
import { TodosContext } from "./contexts/Todos";
import { useAuth } from "./firebase/AuthContext";

export const App = () => {
  const { todos } = useContext(TodosContext);
  const [alert, setAlert] = useState(true);
  const [fade, setFade] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setAlert(false);
    } else {
      setAlert(true);
      setFade(false);
      setTimeout(() => setFade(true), 1500);
      setTimeout(() => setAlert(false), 2000);
    }
  },[user])

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
      {alert && 
        <>
          <div className="fixed inset-0 bg-black/60 z-40"></div>
          <div className={`${fade ? "opacity-0" : "opacity-100"} transition-opacity duration-500 h-96 flex flex-col items-center gap-4 text-white justify-center w-[80vw] lg:w-[40vw] bg-slate-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl z-50`}>
            <h1 className="text-5xl font-semibold">Hello</h1>
            <p className="text-5xl font-medium text-center">first, sign up</p>
          </div>
        </>
      }
    </div>
  )
}

export default App;