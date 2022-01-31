import React, {useContext, useEffect, useState} from "react";
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
import FollowWidgetDetails from "../Widgets/FollowWidgetDetails";
import {useFetch} from "../../Hook/useFetch.hook";
import {AuthContext} from "../Auth/AuthContext";
function Profile({
                     avatar = profileElements.avatar,
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
    const {request} = useFetch()
    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await request('/users');
            setUser(response);
        };
        fetchData();
    }, [setUser]);
    const account = useContext(AuthContext)
    const [name, setName] = useState()
    useEffect(async () => {
        try {
            const response = await request(`/auth/${account.userId}`)
            setName(response.name)
        } catch (e) {
        }
    }, [setName])
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

                    <div className={"profile__widget"}>
                        {user.map(items => {
                                if (!items.verified) {
                                    return <FollowWidgetDetails item={items}/>
                                }
                            }
                        )}
                    </div>
                    <a className="profile__widgetMore" href="#">Показать еще</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;
