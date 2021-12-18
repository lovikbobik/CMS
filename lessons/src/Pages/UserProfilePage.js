import React from "react";
// import "./ProfilePage.css";
import User from "../components/Profile/User";
import Layout from "../components/Layout";

function ProfilePage() {
    return (
        <div className="app">
            <Layout>
                <User/>
            </Layout>
        </div>
    );
}

export default ProfilePage;