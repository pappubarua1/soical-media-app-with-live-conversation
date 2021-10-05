import Share from "../share/Share";
import './feed.css';
import Post from './../post/Post';
import { useEffect, useState } from 'react';
import axios from "axios";
export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/61534929458dfd9efcd2ea3b");
            setPosts(res.data);
        };
        fetchPosts();
    }, [])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(p => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}
