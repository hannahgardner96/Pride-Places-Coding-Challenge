import { useState } from "react"
import { PostModal } from "./PostModal"

export const PostPreview = ({ post }) => {
    // STATE //
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className = "postPreviewDiv">
                <h3 className = "postTitle">{ post.title }</h3>
                <h5>Authored by user { post.userId }</h5>
                <button onClick = { () => setShowModal(true) } >View</button>
            </div>
            <PostModal post = { post } showModal = { showModal } setShowModal = { setShowModal } />
        </>
        
    )
}