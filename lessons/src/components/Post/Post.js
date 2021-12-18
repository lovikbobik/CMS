import React from "react";
import '../../styles/components/Post/Post.css';
import {Avatar} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function Post({
                  name,
                  date,
                  username,
                  verified,
                  text,
                  image,
                  avatar
              }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post_header">
                    <div className="post__headerText">
                        <h3>
                            <span className="post__headerSpecial">
                                {name}
                                {verified && <VerifiedIcon className="post__badge" fontSize="small"/>}
                                <span className="post__color">
                                @{username + " "}
                                    {date}
                                </span>
                        </span>
                            <span>
                        <MoreHorizOutlinedIcon className="post__more"/>
                        </span>
                        </h3>
                    </div>
                    <div className="post__description">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <img
                    src={image}
                    alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon className="post__chat"/>
                    <RepeatIcon className="post__repeat" />
                    <FavoriteBorderIcon className="post__favourite"/>
                    <PublishIcon className="post__chat" />
                </div>
            </div>
        </div>
    );
}

export default Post;