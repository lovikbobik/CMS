import React from 'react';
import {Avatar} from "@material-ui/core";
import {Button} from "@mui/material";
import { VerifiedRounded} from "@mui/icons-material";
import "../../styles/components/Widgets/FollowWidgetDetails.css";

export default function FollowWidgetDetails({avatar, name, username, verified}) {
    return (
        <div className={"followDetails"}>
            <Avatar src={avatar}/>

            <div className={"followDetails__info"}>
                <div className={"followDetails__username"}>
                    <h4 className={"followDetails__textWeight"}>{name}</h4>
                    {verified && <VerifiedRounded className={"follow__badge"}/>}
                </div>
                <p className={"textGray"}>{'@' + username}</p>
            </div>

            <Button className={"followDetails__button"}>Подписаться</Button>
        </div>
    )
}