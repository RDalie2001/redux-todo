import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/todoSlice'


let todos = [
    {
        name: "Work",
        task: "I have to work on my CSS"
    }
]

const Todo = (props) => {
    todos = useSelector(state => state.todo);
    const dispatch = useDispatch();
  return (
    <div>
    {todos && todos.map((todo) => {
        return  <Card>
        <div className='container-fluid justify-content-start d-flex flex-column'>
        <div className='row justify-content-start'>
        <div className='col-md-auto d-flex justify-content-start'>
         {todo.name}
        </div>

        <div className='col-12 d-flex justify-content-end align-items-end'>
         <Button onClick={() => {
            dispatch(removeTodo({
                pos: todo.pos
            }))
         }} color="danger">Remove</Button>
        </div>
        </div>
        <div className='row'>
        <div className='col-md-auto justify-content-start'>
        {todo.task}
        </div>
        </div>
        </div>
        
    </Card>
    })}
    </div>

  )
}

export default Todo