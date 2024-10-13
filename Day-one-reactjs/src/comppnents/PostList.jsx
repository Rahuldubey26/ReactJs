import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';
import { useState } from 'react';

function PostList() {
    const [enteredBody, setenteredBody] = useState('');
    const [name,setname]=useState();
    function bodyHandler(event) {
        setenteredBody(event.target.value);
    }
    function bodyAuthorChange(event){
        setname(event.target.value);
    }
    return (
        <>
        <Modal>
            <NewPost 
            changeBodyHandler={bodyHandler} onAuthorChange={bodyAuthorChange} />
        </Modal>
            <ul className="classes.post">
                <Post author={name} body={enteredBody} />
                <Post author={name} body={enteredBody}></Post>
            </ul>
        </>
    )
}
export default PostList;