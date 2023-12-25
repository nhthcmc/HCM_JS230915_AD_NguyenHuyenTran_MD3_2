import React, { useEffect } from 'react'
import RouteIndex from './routes/RouteIndex'
import api from './services/apis/index'
import { useDispatch } from 'react-redux'
import { taskAction } from './store/slices/task.slice'

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api.task.findAll()
      .then(res => {
        console.log(res);
        dispatch(taskAction.setData(res.data))
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  // dispatch(taskAction.setData(result?.data.data))

  return (
    <RouteIndex />
  )
}
