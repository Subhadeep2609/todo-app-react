import { MdDelete } from "react-icons/md";

const TodoList = ({todo,delTodo}) => {

    function handleDel(id){
        delTodo(id)
        console.log(id)
    }

  return (
    <div className="mt-4">
        {
          todo.map((item)=>(
            <div key={item.id} className="bg-gray-300 hover:bg-gray-500 hover:text-white mb-4 w-[50vw] text-center py-1 flex justify-between px-2" >{item.title} <button className="ml-6 bg-red-300 hover:text-white hover:bg-red-600 px-2 rounded" onClick={()=>handleDel(item.id)}><MdDelete /></button></div>
          ))
        }
      </div>
  )
}

export default TodoList