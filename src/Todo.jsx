import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from './redux/todoSlicer'

const Todo = () => {
 const dispactch = useDispatch()
 const data = useSelector(state => state.todo)
 useEffect(() => {
  dispactch(fetchTodo())
 }, [])
 console.log(data.data)
 return (
  <div>
   <h2>{data.data.title}</h2>
   <h2>{data.data.description}</h2>

  </div>

 )
}


export default Todo