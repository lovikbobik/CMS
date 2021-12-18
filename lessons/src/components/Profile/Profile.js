import React from "react";
import '../../styles/components/Profile/Profile.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Avatar, Button} from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

function Profile({
                     name,
                     username,
                     tweetCount,
                     avatar,
                     poster,
                     verified,
                     text,
                     location,
                     date,
                     following,
                     followers,
                     link
                 }) {
    return (
        <div className="profile">

            <div className="profile__header">
                <ArrowBackIcon className="profile__icon"/>
                <div className="profile__headerText">
                    <h2>{name}</h2>
                    <p>{tweetCount + " Твитов"}</p>
                </div>
            </div>

            <div>
                <img className="profile__background"
                     src={poster}/>
            </div>

            <div className="profile__follow">
                <div>
                    <Avatar className="profile__avatar" src={avatar}/>
                </div>
                <Button variant="outlined" className="profile__button">Настроить профиль</Button>
            </div>

            <div className="profile__info">

                <div className="profile__user">
                    <h2>{name} {verified && <VerifiedIcon className="profile__verified" fontSize="small"/>}</h2>
                    <p>{"@" + username}</p>
                </div>

                <div>
                    <p>{text}</p>
                </div>

                <div className="profile_description">
                    <span className="align"><LocationOnOutlinedIcon/> {location}</span>
                    <span className="align">
                        <LinkOutlinedIcon/>
                        <a href="https://onlyfans.com/">{link}</a>
                    </span>
                    <span className="align"><DateRangeOutlinedIcon/> {date}</span>
                </div>

                <div className="profile__followers">
                    <span> <b className="profile__black">{following + " "}</b> Кумиров </span>
                    <span className="follow__dist"> <b
                        className="profile__black">{followers + " "}</b>Подписчиков</span>
                </div>
            </div>

        </div>
    )
}

export default Profile;
