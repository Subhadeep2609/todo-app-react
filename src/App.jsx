import { useState } from "react"

const App = ()=>{
  const [val,setVal] = useState("")
  const [todo,setTodo] = useState([])

  function add(){
    setTodo([...todo,{title:val,id:Date.now()}])
    setVal("")
  }



  return (
    <div className="flex items-center flex-col mt-8">
      <h1 className="text-3xl text-red-500 font-bold italic mb-4">Todo App</h1>
      <div>
        <input value={val} type="text" placeholder="Enter a task" className="border border-black px-4 py-2 rounded-lg me-4" onChange={(e)=> setVal(e.target.value)}/>
        <button className="text-xl bg-green-400 hover:bg-green-600 text-white px-4 py-1 rounded-xl" onClick={add}>Add</button>
      </div>

      <div className="mt-4">
        {
          todo.map((item)=>(
            <div key={item.id} className="bg-gray-300 hover:bg-gray-500 hover:text-white mb-4 w-[50vw] text-center p-1 flex justify-between p-2" >{item.title} <button className="ml-6 bg-red-300 hover:text-white hover:bg-red-600 px-2 rounded">Del</button></div>
          ))
        }
      </div>
    </div>
  )
}

export default App