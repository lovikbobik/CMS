import React from "react";
import TwitterIcon from
        "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@mui/material";
import '../../styles/components/Sidebar/Sidebar.css';
import {NavLink} from "react-router-dom";
import { useModal } from 'react-hooks-use-modal';
import {Avatar} from "@material-ui/core";

function Sidebar() {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    return (
        <div className="sidebar">

            <NavLink to={"/home"} className="sidebar__nav">
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOption Icon={HomeRoundedIcon} text="Главная"/>
            </NavLink>

            <NavLink to={"/explore"} className="sidebar__nav">
            <SidebarOption Icon={TagRoundedIcon} text="Исследовать"/>
            </NavLink>

            <NavLink to={"/notifications"} className="sidebar__nav">
            <SidebarOption Icon={NotificationsNoneRoundedIcon} text="Уведомления"/>
            </NavLink>

            <SidebarOption Icon={MailOutlineIcon} text="Сообщения"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Закладки"/>
            <SidebarOption Icon={ListAltIcon} text="Списки"/>

            <NavLink to={"/profile"} className="sidebar__nav">
            <SidebarOption Icon={PermIdentityIcon} text="Профиль"/>
            </NavLink>

            <SidebarOption Icon={MoreHorizIcon} text="Ещё"/>

            <Button variant="outlined" className="sidebar__twit" fullWidth>
                        Твитнуть
            </Button>
            <div className="modal">
                <button onClick={open} className="modal__button">
                    <Avatar src={"https://anime-fans.ru/wp-content/uploads/2021/05/Samye-krasivye-fotki-anime-kartinki_22.jpg"}/>
                    <div className="modal__card">
                    <h4>Светка</h4>
                    <p>@lovikbobik</p>
                    </div>
                    <MoreHorizIcon/>
                </button>
                <Modal>
                    <div className="modal__content">
                        <div className="modal__user">
                        <h3>Светка Пипетка</h3>
                        <p>@lovikbobik</p>
                        </div>
                        <div className="modal__navigation">
                        <Button href="/" className="modalBtn">Выйти</Button>
                        <Button href="/registration" className="modalBtn">Новый аккаунт</Button>
                        </div>
                        <button onClick={close} className="modal__close">CLOSE</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Sidebar;