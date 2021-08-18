import { useEffect, useState } from "react"
import { PostPreview } from "./PostPreview"

const backgroundColors = ["#DCA4F6", "#29B6F6", "#EF5350", "#FF98DA"]

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
        <>    
            <h1 className = "indexTitle">PRIDE PLACES INDEX</h1>
            <div className = "postIndexDiv">
                { 
                    posts.map((post) => {
                        return <PostPreview post = { post } key = {post.id} backgroundColor = { backgroundColors[Math.floor(Math.random() * backgroundColors.length)] }/>
                    })
                }
            </div>
        </>
    )
}