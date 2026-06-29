import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import toast from "react-hot-toast"
import DeleteModal from "./components/DeleteModal"
import UpdateModal from "./components/UpdateModal"

const App = () => {

  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const [delModal, setDelModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const [editModal, setEditModal] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  // delete
  function handleDeleteModal(id) {
    setDelModal(true);
    setTodoToDelete(id);
  }


  function cancelDel() {
    setDelModal(false);
    setTodoToDelete(null);
  }

  function confirmDel() {
    setTodo(todo.filter((item) => item.id !== todoToDelete));
    setDelModal(false);
    setTodoToDelete(null);
    toast.success("Todo deleted successfully...")
  }

  //  edit

  function handleEditModal(todo) {
    setEditModal(true);
    setTodoToEdit(todo);
  }

  function cancelEdit() {
    setEditModal(false);
    setTodoToEdit(null);
  }

  function confirmEdit(newTitle) {
    setTodo(todo.map((todo) => (todo.id === todoToEdit.id ? { ...todo, title: newTitle } : todo)));
    setEditModal(false);
    setTodoToEdit(null);
    toast.success("Todo updated successfully...")
  }

  // add
  function add(val) {
    const title = val.trim();

    if (title === "") {
      toast.error("Todo cannot be empty");
      return;
    }

    const alreadyExists = todo.some(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );

  if (alreadyExists) {
    toast.error("Todo already exists");
    return;
  }
    setTodo([...todo, { title: val, id: Date.now() }])
    toast.success("Todo added successfully...")
  }



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo])


  return (
    <div className="flex items-center flex-col mt-8">
      <h1 className="text-3xl text-red-500 font-bold italic mb-4">Todo App</h1>
      <TodoForm add={add} />
      <TodoList todo={todo} delTodo={handleDeleteModal} editTodo={handleEditModal} />
      {delModal && <DeleteModal cancelDel={cancelDel} confirmDel={confirmDel} />}
      {editModal && <UpdateModal cancelEdit={cancelEdit} currentValue={todoToEdit.title} confirmEdit={confirmEdit} />}
    </div>
  )
}

export default App