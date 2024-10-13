import { useState } from 'react';
import classes from './NewPost.module.css'

function NewPost(props) {
    const [enteredBody, setenteredBody] = useState('');
    const [name, setname] = useState();
    function bodyHandler(event) {
        setenteredBody(event.target.value);
    }
    function bodyAuthorChange(event) {
        setname(event.target.value);
    }
    function SubmitHandler(event){
        event.preventDefault();
        const postData={
            body:enteredBody,
            author: name,
        }
        props.onCancel();
    }
    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea name="" id="body" required rows={3} onChange={bodyHandler}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={bodyAuthorChange} />
            </p>
            <p className={classes.action}>
               <button type='button' onClick={props.onCancel}>Cancel</button>
               <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;