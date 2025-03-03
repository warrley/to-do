import { Header } from "./components/Header";
import { LeftArea } from "./components/Left";
import { RightArea } from "./components/Right";

export const App = () => {
  return (
    <div className="bg-white w-full max-w-6xl mx-auto rounded-lg">
      <Header />
      <div className="flex h-[70vh] max-h-[700px]">
        <LeftArea />
        <RightArea />
      </div>
    </div>
  )
}

export default App;