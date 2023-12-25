import React from 'react'
import { taskAction } from '../../../store/slices/task.slice';
import apis from '../../../services/apis';
import { useDispatch, useSelector } from 'react-redux';

export default function UpdateForm(id) {
    const dispatch = useDispatch()
    let taskStore = useSelector(store => store.taskStore)
    let task = taskStore.data.find(s => s.id == id)
    async function handleUpdateTask(e) {
        e.preventDefault();
        try {
            let newTask = {
                name: e.target.name.value,
                status: e.target.status.value,
            }
            let result = await apis.task.update(id, newTask)
            dispatch(taskAction.update(result.data.data))
            e.target.name.value = ""
            e.target.status.value = ""
        } catch (err) {
            alert("Error")
        }
    }
    return (
        <>
            <form
                onSubmit={(e) => {
                    handleUpdateTask(e)
                }}>
                <caption>Update task</caption>
                <label>
                    <span>Name</span>
                    <input type='text' name='name'></input>
                </label>
                <label>
                    <span>Status</span>
                    <input type='text' name='status'></input>
                </label>
                <button
                    type='submit'
                    name='update'
                >Update</button>
            </form >
        </>
    )
}
