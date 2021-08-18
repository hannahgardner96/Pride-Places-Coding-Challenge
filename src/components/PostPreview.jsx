import { useState } from "react"
import { PostModal } from "./PostModal"

export const PostPreview = ({ post, backgroundColor }) => {
    // STATE //
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className = "postPreviewDiv" style = {{backgroundColor:  backgroundColor}}>
                <h3 className = "postTitle">{ post.title }</h3>
                <h5>Authored by user { post.userId }</h5>
                <button className = "viewButton" onClick = { () => setShowModal(true) } >VIEW</button>
            </div>
            <PostModal post = { post } showModal = { showModal } setShowModal = { setShowModal } backgroundColor = { backgroundColor }/>
        </>
        
    )
}