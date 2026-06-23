import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import toast from "react-hot-toast"

const App = ()=>{
 
  const [todo,setTodo] = useState(()=>{
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  function add(val){
    setTodo([...todo,{title:val,id:Date.now()}])
    toast.success("Todo added successfully...")
  }

  function delTodo(id){
    setTodo(todo.filter((todo)=>todo.id !== id))
    toast.success("Todo deleted successfully...")
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo))
  },[todo])


  return (
    <div className="flex items-center flex-col mt-8">
      <h1 className="text-3xl text-red-500 font-bold italic mb-4">Todo App</h1>
      <TodoForm add={add}/>
      <TodoList todo={todo} delTodo={delTodo}/>
      
    </div>
  )
}

export default App