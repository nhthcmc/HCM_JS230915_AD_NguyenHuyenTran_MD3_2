import React, { useState } from 'react'
import './user.scss'
import { useSelector } from 'react-redux';

export default function User() {
    const [id, setId] = useState(null)
    const taskStore = useSelector(store => store.taskStore);

    return (
        <div className='user'>
            <div className='taskList'><span>Task List</span></div>
            <div className='list'>
                <table>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                    {
                        taskStore.data?.map((item) => {
                            return (
                                <tr>
                                    {/* <td>{item.id}</td> */}
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}
