import History from "../components/History"
const Trasaction = () => {
  return (
    <div className="h-full overflow-auto hide-scrollbar">
        <div className="inner-layout">
            <h1 className="text-black font-bold">Trasactions</h1>
            <div className="mt-3">
                <History/>
            </div>
            </div>
    </div>
    
  )
}

export default Trasaction