import React, {Component} from "react";
import '../../styles/components/Profile/Profile.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Avatar, Button} from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import profileElements from "../../Arrays/profileElements";
import {NavLink} from "react-router-dom";
import ProfileTweets from "./SubItems/ProfileTweets"
import FollowWidget from "../Widgets/FollowWidget";
import FollowWidgetDetails from "../Widgets/FollowWidgetDetails";
import followElements from "../../Arrays/followElements";

function Profile({
                     avatar = profileElements.avatar,
                     name = profileElements.name,
                     tweetCount = profileElements.tweetCount,
                     poster = profileElements.poster,
                     username = profileElements.username,
                     verified = profileElements.verified,
                     text = profileElements.text,
                     location = profileElements.location,
                     link = profileElements.link,
                     date = profileElements.date,
                     following = profileElements.following,
                     followers = profileElements.followers,
                     children = <ProfileTweets/>
                 }
) {
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
                    <h2>{name} {verified &&
                    <VerifiedIcon className="profile__verified" fontSize="small"/>}</h2>
                    <p>{"@" + username}</p>
                </div>

                <div>
                    <p>{text}</p>
                </div>

                <div className="profile_description">
                    <span className="align"><LocationOnOutlinedIcon/> {location}</span>
                    <span className="align">
                        <LinkOutlinedIcon/>
                        <a className={"profile__link"} href={link}>Моя работенка</a>
                    </span>
                    <span className="align"><DateRangeOutlinedIcon/> {date}</span>
                </div>

                <div className="profile__followers">
                    <span> <b className="profile__black">{following + " "}</b> Кумиров </span>
                    <span className="follow__dist"> <b
                        className="profile__black">{followers + " "}</b>Подписчиков</span>
                </div>
            </div>
            <div className={"tabs"}>
                <div className={"tabs__header"}>
                    <NavLink className={"tabs__nav"} to={'/profile'}>Твиты</NavLink>
                    <NavLink className={"tabs__nav"} to={'/profile/replies'}>Твиты & ответы</NavLink>
                    <NavLink className={"tabs__nav"} to={'/profile/media'}>Медиа</NavLink>
                    <NavLink className={"tabs__nav"} to={'/profile/likes'}>Нравится</NavLink>
                </div>

                <div className={"tabs__content"}>
                    {children}
                </div>
                <div className="profile__explore">
                    <h2>За кем следовать</h2>
                    {followElements.map((item, index) => {
                            if (item.verified === false) {
                                return (
                                    <div className={"profile__widget"}>
                                    <FollowWidgetDetails  name={item.name}
                                                         username={item.username}
                                                         verified={item.verified}
                                                         avatar={item.avatar}
                                                         key={index}
                                    />
                                    </div>
                                )
                            }
                        }
                    )
                    }
                    <a className="profile__widgetMore" href="#">Показать еще</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;
