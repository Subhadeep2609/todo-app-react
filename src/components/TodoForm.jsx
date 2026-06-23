import { useState } from "react"


const TodoForm = ({add}) => {
     const [val,setVal] = useState("")

     function handleAdd(){
        add(val)
        setVal("")
     }

  return (
     <div>
        <input value={val} type="text" placeholder="Enter a task" className="border border-black px-4 py-2 rounded-lg me-4" 
        onChange={(e)=> setVal(e.target.value)} 
        onKeyDown={(e)=>{
            if(e.key === "Enter"){
                handleAdd()
                }
                }} />
        <button className="text-xl bg-green-400 hover:bg-green-600 text-white px-4 py-1 rounded-xl" onClick={handleAdd}>Add</button>
      </div>
  )
}

export default TodoForm