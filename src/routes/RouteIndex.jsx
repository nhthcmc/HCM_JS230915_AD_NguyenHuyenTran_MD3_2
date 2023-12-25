import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../login/Login"
import Admin from "../pages/admin/Admin"
import User from "../pages/user/User"

export default function RouteIndex() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/user" element={<User />}></Route>
            </Routes>
        </BrowserRouter >
    )
}