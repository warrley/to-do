export const Header = () => {
    return (
        <div>
            <header className="h-16 bg-slate-400/40 rounded-t-lg flex items-center px-6 w-full justify-between">
                <div className="flex gap-2">
                    <span className="bg-slate-800/80 rounded-full text-white h-6 w-6"></span>
                    <span className="bg-slate-800/80 rounded-full text-white h-6 w-6"></span>
                    <span className="bg-slate-800/80 rounded-full text-white h-6 w-6"></span>
                </div>
                <div className="flex ">
                    <p className="font-norma"><b>0</b>/0 todos completed</p>
                </div>
            </header>
            <p className="text-9xl absolute text-slate-700/50 font-bold text-center -mt-32 max-w-6xl w-full z-[-1]">TODO APP</p>
        </div>
    )
}