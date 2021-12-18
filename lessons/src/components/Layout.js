import React from "react";
import "../App.css"
import Sidebar from "./Sidebar/Sidebar";
import Actual from "./Widgets/Actual";
import "../styles/components/Layout.css"

function Layout({children}) {
    return (
        <>
            <div className="app">
                <Sidebar/>
                <main className="layout">{children}</main>
                <Actual/>
            </div>
        </>
    );
}

export default Layout;