import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const TodoList = ({todo,delTodo,editTodo}) => {

    function handleDel(id){
        delTodo(id)
       
    }
    function handleUpdate(todo){
       editTodo(todo);
    }

  return (
    <div className="mt-4">
        {
          todo.map((item)=>(
            <div key={item.id} className="bg-gray-300 hover:bg-gray-500 hover:text-white mb-4 w-[50vw] text-center py-1 flex justify-between px-2" >{item.title} 
              <div>
                <button className="ml-6 bg-red-300 hover:text-white hover:bg-red-600 px-2 rounded" onClick={()=>handleUpdate(item)}><FiEdit /></button>
            <button className="ml-6 bg-red-300 hover:text-white hover:bg-red-600 px-2 rounded" onClick={()=>handleDel(item.id)}><MdDelete /></button>
              </div>
            </div>
          ))
        }
      </div>
  )
}

export default TodoList