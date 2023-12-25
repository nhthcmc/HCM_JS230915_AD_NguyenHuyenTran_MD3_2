import React, { useEffect } from 'react'
import RouteIndex from './routes/RouteIndex'
import api from './services/apis/index'
import { useDispatch, useSelector } from 'react-redux'
import { taskAction } from './store/slices/task.slice'

export default function App() {
  const dispatch = useDispatch();
  const taskStore = useSelector(store => store.taskStore)
  useEffect(() => {
    const fetch = async () => {
      let result = await api.task.findAll();
      console.log(result);
      dispatch(taskAction.setData(result?.data.data))
    }
    fetch();
  }, [])

  return (
    <RouteIndex />
  )
}
