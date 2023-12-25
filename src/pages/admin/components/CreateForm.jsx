import React from 'react'
import { taskAction } from '../../../store/slices/task.slice';
import apis from '../../../services/apis';
import { useDispatch } from 'react-redux';

export default function CreateForm() {
    const dispatch = useDispatch()

    async function handleAddTask(e) {
        e.preventDefault();
        try {
            let newTask = {
                name: e.target.name.value,
                status: e.target.status.value,
            }
            let result = await apis.task.create(newTask)
            dispatch(taskAction.create(result.data.data))
            e.target.name.value = ""
            e.target.status.value = ""
        } catch (err) {
            alert("Error")
        }
    }
    return (
        <>
            <form onSubmit={(e) => {
                handleAddTask(e)
            }}>
                <caption>Create a new task!</caption>
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
                    name='create'
                >Create</button>
            </form>
        </>
    )
}
