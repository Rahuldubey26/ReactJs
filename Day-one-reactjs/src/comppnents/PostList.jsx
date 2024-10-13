import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from './Modal';

function PostList({isPosting,onStopPosting}) {
 
    return (
        <>
            {isPosting &&
                <Modal onClose={onStopPosting}>
                    <NewPost
                     onCancel={onStopPosting}/>
                </Modal>
            }
            <ul className={classes.post}>
                <Post author="Name" body="Text Body"></Post>
            </ul>
        </>
    )
}
export default PostList;