import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../../Hook/useFetch.hook";
import axios from "axios";
import Post from "../Post/Post";
import Layout from "../Layout";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

function TweetItem() {
    const {request} = useFetch()
    const params = useParams()
    const [postId, setPost] = useState({
    })

    useEffect(async () => {
        try {
            const response = await axios(`/posts/${params.id}`)
            setPost(response.data)
        } catch (e) {
        }
    }, [setPost])
    return (
        <Layout>
        <div className="main__header">
            <h2>Главная </h2>
            <AutoAwesomeOutlinedIcon className="main__auto"/>
        </div>
            <Post post = {postId}/>
        </Layout>
    );
}

export default TweetItem;