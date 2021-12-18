import React from "react";
import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";
import "./App.css"
import HomePage from "./Pages/HomePage";
import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage"
import RegistrationPage from "./Pages/RegistrationPage";
import UserPage from "./Pages/UserProfilePage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" exact element={<StartPage/>}/>
                <Route path="/login" exact element={<LoginPage/>}/>
                <Route path="/home" exact element={<HomePage/>}/>
                <Route path="/profile" exact element={<ProfilePage/>}/>
                <Route path="/user/:username" exact element={<UserPage/>}/>
                <Route path="/registration" exact element={<RegistrationPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
