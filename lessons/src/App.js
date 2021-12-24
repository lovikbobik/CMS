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
import UserPage from "./Pages/UserProfilePage";
import NotificationsPage from "./Pages/NotificationsPage";
import NotificationsMentions from "./components/Notifications/NotificationsMentions";
import ExplorePage from "./Pages/ExplorePage";
import ProfileReplies from "./components/Profile/SubItems/ProfileReplies";
import ProfileMedia from "./components/Profile/SubItems/ProfileMedia";
import ProfileLikes from "./components/Profile/SubItems/ProfileLikes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" exact element={<StartPage/>}/>
                <Route path="/login" exact element={<LoginPage/>}/>
                <Route path="/registration" exact element={<RegistrationPage/>}/>

                <Route path="/home" exact element={<HomePage/>}/>
                <Route path="/profile" exact element={<ProfilePage/>}/>
                <Route path="/user/:username" exact element={<UserPage/>}/>

                <Route path="/notifications" exact element={<NotificationsPage/>}/>
                <Route path="/notifications/mentions" exact element={<NotificationsMentions/>}/>

                <Route path="/explore" exact element={<ExplorePage/>}/>

                <Route path="/profile/replies" exact element={<ProfilePage children={<ProfileReplies/>}/>}/>
                <Route path="/profile/media" exact element={<ProfilePage children={<ProfileMedia/>}/>}/>
                <Route path="/profile/likes" exact element={<ProfilePage children={<ProfileLikes/>}/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App;
