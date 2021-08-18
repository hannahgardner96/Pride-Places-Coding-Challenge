import ReactModal from 'react-modal'

export const PostModal = ({ post, showModal, setShowModal }) => {

    return (
        <ReactModal isOpen = { showModal } ariaHideApp = { false }>
            <div className = "modalDiv">
            <h3>{ post.title }</h3>
            <h5>Authored by user { post.userId }</h5>
            <h6>{ post.body }</h6>
            <button onClick = { () => setShowModal(false) }>Close</button>
        </div>
        </ReactModal>
    )
}