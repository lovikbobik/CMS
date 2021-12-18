import React from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile/Profile";

function HomePage() {
    return (
        <div>
            <Layout>
                {getProfilePage()}
            </Layout>
        </div>
    );
    function getProfilePage() {
        return (
            <Profile name={"Светка Пипетка"} username={"lovikbobik"}
                     avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIWBZht6iXQX4f0aT8wZ8UMbZBkwI1ijRHA&usqp=CAU"}
                     verified={true} date={"Нояб 24"} followers={45677} following={3} link={"Моя работа"}
                     location={"Владивосток"}
                     poster={"https://anime-fans.ru/wp-content/uploads/2021/05/Samye-krasivye-fotki-anime-kartinki_22.jpg"}
                     text={"Википедию создали философ и финансист: Ларри Сэнглер и Джимми Уэльс из США, " +
                     "которые, по собственному признанию, строили свой проект на утопической идее свободного доступа" +
                     " каждого ко всей сумме знаний человечества и пожертвованиях со всего мира."}
                     tweetCount={"0"}/>
        )
    }
}

export default HomePage;