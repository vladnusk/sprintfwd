import './style.css'
import { useState, useEffect } from 'react'
// redux
import { getTodoList, addTodo } from '../../redux/slices/todo'
import { useDispatch, useSelector } from '../../redux/store'
// components
import Card from '../../components/Card'
import TodoItem from '../../components/TodoItem'

export default function TodoList() {
  const dispatch = useDispatch()
  const { todoList } = useSelector((state) => state.todo);
  const [value, setValue] = useState('')

useEffect(()=>{
  dispatch(getTodoList())
},[dispatch])

function handleAddTodo(){
  if(value){
    dispatch(addTodo({value, id: Math.random(), isActive: true}))
    setValue('')
  }
}

  return (
    <Card>
    <h1>Todo list</h1>
    <div className="todo-page">
    <div className='test'>
      <input className='set-todo' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAddTodo}>+</button>
      </div>
      <ul>
        {todoList.map((todo, index) => <TodoItem key={todo.id} index={index} todo={todo} />)}
      </ul>
      </div>
    </Card>
  )
}
