import { useEffect, useState } from "react"
import { PostPreview } from "./PostPreview"

export const PostIndex = () => {
    // STATE // 
    const [posts, setPosts] = useState([])

    // HOOKS //
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(setPosts)
    }, [])

    
    return (
        <div className = "postIndexDiv">
            { 
                posts.map((post) => {
                    return <PostPreview post = { post } key = {post.id} />
                })
            }
        </div>
    )
}