import './style.css'
import { useState } from 'react'
import { useDispatch } from '../../redux/store'
import { deleteTodo, toggleComplete, updateTodo } from '../../redux/slices/todo'

export default function TodoItem({todo, index}) {
  const {isActive, id, value} = todo
  const [isEdit, setIsEdit] = useState(false)
  const [updatedValue, setUpdatedValue] = useState(todo.value)
  const dispatch = useDispatch()
  function handleUpdateTodo(){
    dispatch(updateTodo({id, value: updatedValue}))
    setIsEdit(false)
  }

  return (
    <li className={`todo-item ${!isActive ? 'completed' : ''}`}>
    {isEdit && (
      <div className='todo-item-wrapper'>
        <input className='edit-todo' type="text" value={updatedValue} onChange={(e) => setUpdatedValue(e.target.value)} />
        <button onClick={handleUpdateTodo}><img src="./icons/done.svg" alt="edit todo" /></button>
      </div>
    )}
    {!isEdit && (
    <div className='todo-item-wrapper'>
          <p>{`${index + 1}. ${value}`}</p>
          <div className="control-todo">
           <button className='complete-btn' onClick={() => dispatch(toggleComplete(id))}><img src="./icons/done.svg" alt="complete task" /></button>
           <button onClick={() => setIsEdit(true)}><img src="./icons/edit.svg" alt="edit task" /></button>
           <button className='delete-btn' onClick={() => dispatch(deleteTodo(id))}><img src="./icons/delete.svg" className="delete" alt="delete" /></button>
          </div>
    </div>
    )}
   
    </li>
  )
}
