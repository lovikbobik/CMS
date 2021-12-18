import React from "react";
import {Button} from "@material-ui/core";
import "../../styles/components/Auth/Registration.css"
import "../../styles/components/Auth/Login.css"

function RegistrationPage(){
    return(
        <div className="registration">
            <div className="login__formInput">
                <input placeholder={"Имя"} className="registration__pass"/>
                <input placeholder={"Телефон/Эл. почта"} className="registration__pass"/>
                <input placeholder={"Пароль"} type="password" className="registration__pass"/>
                <input placeholder={"Повторите пароль"} type="password" className="registration__pass"/>
            </div>
            <a href="/login" className="login__question">Уже есть аккаунт?</a>
            <Button href="/home" type="submit" className="loginButton">Создать</Button>
        </div>
    )
}

export default RegistrationPage;