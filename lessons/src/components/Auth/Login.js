import React from "react";
import {Button} from "@material-ui/core";
import "../../styles/components/Auth/Login.css";

function Login() {
    return (
        <div className="login">
            <div className="login__formInput">
                <input placeholder={"Имя, телефон или почта"} autoComplete="off" className="login__pass"/>
                <input placeholder={"Пароль"} type="password" autoComplete="off" className="login__pass"/>
            </div>
            <div>
                <a href="#" className="login__question">Забыли пароль?</a>
            </div>
            <Button href="/home" type="submit" className="loginButton">Войти</Button>
        </div>
    )
}

export default Login;

