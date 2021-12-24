import React from 'react';
import {MoreHorizOutlined} from "@material-ui/icons";
import RecommendIcon from '@mui/icons-material/Recommend';
import Actual from "../Widgets/Actual";
import "../../styles/components/Explore/Explore.css"
import exploreElements from "../../Arrays/exploreElements";
import Post from "../Post/Post";

function Explore({recommendation}) {
    return (
        <div className={"explore"}>
            <Actual/>
            <div className={"explore__header"}>
                <div className={"explore__recommend"}>
                    <RecommendIcon className={"exploreRecIcon"}/>
                    <h2>{recommendation}</h2>
                </div>
                <MoreHorizOutlined className={"explore__moreIcon"}/>
            </div>

            {exploreElements.map((item, index) => {
                return (
                    <Post
                        name={item.name}
                        avatar={item.avatar}
                        verified={item.verified && true}
                        username={item.username}
                        date={item.date}
                        text={item.text}
                        image={item.image}
                        likeCount={item.likeCount}
                        commentCount={item.commentCount}
                        shareCount={item.shareCount}
                        retweetCount={item.retweetCount}
                        isLiked={item.isLiked}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default Explore;