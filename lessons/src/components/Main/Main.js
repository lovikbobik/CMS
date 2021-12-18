import React from "react";
import '../../styles/components/Main/Main.css';
import Tweet from './Tweet.js';
import Post from "../Post/Post";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

function Main() {
    return (
        <div className="main">
            <div className="main__header">
                <h2>Главная </h2>
                <AutoAwesomeOutlinedIcon className="main__auto"/>
            </div>
            <Tweet />
            <Post name={"Vasia"} username={"Pupkin"} text={"Красиво жить не запретишь"} verified={true}
                  avatar={"https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"}
                  date={"Nov 19"} image={"https://s00.yaplakal.com/pics/pics_original/3/5/4/15632453.jpg"}/>
            <Post name={"Svetlana"} username={"loviki"} text={"Хочу кушать, очень сильно хочу кушать!!!!"}
                  verified={true} date={"Nov 25"} avatar={"https://klike.net/uploads/posts/2020-01/1578662816_1.jpg"}
                  image={"https://klike.net/uploads/posts/2020-01/1578662816_1.jpg"}/>
        </div>
    )
}

export default Main;
