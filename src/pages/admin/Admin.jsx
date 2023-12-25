import React, { useEffect, useState } from 'react'
import './admin.scss'
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm'
import { useSelector, useDispatch } from 'react-redux';
import { taskAction } from '../../store/slices/task.slice';
// import { Modal, Button } from 'antd';
import apis from '../../services/apis';

export default function Admin() {
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [id, setId] = useState(null)
    const userStore = useSelector(store => store.userStore)

    useEffect(() => {
        if (!userStore.data) {
            alert("Permission Denined")
            window.location.href = "/user"
            return
        }
        if (userStore.data.role != "admin") {
            // alert("Permission Denined")
            window.location.href = "/admin"
            return
        }
    }, [userStore.data])

    const dispatch = useDispatch()
    const taskStore = useSelector(store => store.taskStore);
    async function handleDeleteTask(taskId) {
        try {
            await apis.task.delete(taskId)
            dispatch(taskAction.delete(taskId))
            // Modal.confirm({
            //     title: 'Confirm',
            //     content: 'Delete this task?',
            //     onOk: () => {
            //     }
            // })
        } catch (err) {
            alert("Error")
        }
    }

    return (
        <>
            {
                userStore.data?.role == "admin" && (
                    <div className='admin'>
                        <div className='button'>
                            <button
                                // type="primary"
                                // style={{ background: "green", color: "white" }}
                                onClick={() => {
                                    setShowCreateForm(!showCreateForm)
                                }}>Create Task</button>
                            {showCreateForm && <CreateForm />}
                            {showUpdateForm && <UpdateForm id={id} />}
                        </div>
                        <div className='taskList'><span>Task List</span></div>
                        <div className='list'>
                            <table>
                                <tr>
                                    {/* <th>Id</th> */}
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                                {
                                    taskStore.data?.map((item) => {
                                        return (
                                            <tr>
                                                {/* <td>{item.id}</td> */}
                                                <td>{item.name}</td>
                                                <td>{item.status}</td>
                                                <td>
                                                    <button
                                                        // type='primary'
                                                        onClick={() => {
                                                            setId(item.id);
                                                            setShowUpdateForm(!showUpdateForm);
                                                        }}>
                                                        Update
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        // type="primary" danger
                                                        onClick={() => {
                                                            handleDeleteTask(item.id)
                                                        }}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                )
            }
        </>
    )
}