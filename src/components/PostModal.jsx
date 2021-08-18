import ReactModal from 'react-modal'

export const PostModal = ({ post, showModal, setShowModal, backgroundColor }) => {

    return (
        <ReactModal isOpen = { showModal } ariaHideApp = { false } style = {{content: {backgroundColor: backgroundColor}}} >
            <div className = "modalDiv">
                <h3 className = "postTitle">{ post.title }</h3>
                <h5>Authored by user { post.userId }</h5>
                <h6>{ post.body }</h6>
                <button className = "closeButton" onClick = { () => setShowModal(false) }>Close</button>
            </div>
        </ReactModal>
    )
}