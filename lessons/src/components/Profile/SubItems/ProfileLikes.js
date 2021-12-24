import React from "react";
import Post from "../../Post/Post";
import mainPostElements from "../../../Arrays/mainPostElements";


function ProfileReplies() {
    return (
        <div>
            {mainPostElements.map((item, index) => {
                if (item.isLiked === true) {
                    return (
                        <Post
                            name={item.name}
                            username={item.username}
                            avatar={item.avatar}
                            verified={item.verified && true}
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
                }
            })}
        </div>
    )
}

export default ProfileReplies;