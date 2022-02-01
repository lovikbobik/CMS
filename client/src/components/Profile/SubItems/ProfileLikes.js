import React, {useContext, useEffect, useState} from "react";
import PostDefault from "../../Post/PostDefault";
import mainPostElements from "../../../Arrays/mainPostElements";
import Post from "../../Post/Post";
import {useFetch} from "../../../Hook/useFetch.hook";
import {AuthContext} from "../../Auth/AuthContext";


function ProfileReplies() {
    const {request} = useFetch()
    const {userId} = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const posts = async () => {
            const res = await request(`/auth/${userId}`)
            setPosts(res.posts)
        }
        posts()
    })
    return (
        <div>
            {posts.slice(0).reverse().map((item) => {
                if (item.isLiked) {
                    return (<Post post={item}/>)
                }
            })}
        </div>
    )
}

export default ProfileReplies;