import React, {useContext, useEffect, useState} from "react";
import '../../styles/components/Main/Main.css';
import Post from "../Post/Post";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import {useFetch} from "../../Hook/useFetch.hook";
import {AuthContext} from "../Auth/AuthContext";
import Layout from "../Layout";

function Bookmark() {
    const {request} = useFetch()
    const [post, setPost] = useState([])
    const {userId} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await request('/posts/bookmarks', 'POST', {userId});
            setPost(response);
        };
        fetchData();
    }, [setPost]);

    return (
        <Layout>
            <div className="main">
                <div className="main__header">
                    <h2>Главная </h2>
                    <AutoAwesomeOutlinedIcon className="main__auto"/>
                </div>
                {post.slice(0).reverse().map(items => (
                    <Post post={items.post}/>
                ))}
            </div>
        </Layout>
    )
}

export default Bookmark;
