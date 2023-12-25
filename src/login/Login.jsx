import React from 'react'
import apis from '../services/apis'
import './login.scss'

export default function Login() {
    async function handleLogin(e) {
        e.preventDefault();
        try {
            let data = {
                username: e.target.username.value,
                password: e.target.password.value
            }
            let result = await apis.authen.login(data)
            localStorage.setItem('userRole', result.data.data.data.role)
            window.location.href = "/"

        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <div className='login'>
            <div className='signin'>
                <div className='title'>
                    <h2>Sign In</h2>
                </div>
                <div className='form'>
                    <form onSubmit={(e) => {
                        handleLogin(e)
                    }}>
                        <label>
                            <span>username</span>
                            <input type='text' name='username' placeholder='Username'>
                            </input>
                        </label>
                        <label>
                            <span>password</span>
                            <input type='password' name='password' placeholder='Password'>
                            </input>
                        </label>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}