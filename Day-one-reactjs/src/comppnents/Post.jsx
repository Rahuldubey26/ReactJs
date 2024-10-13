import classes  from './Post.module.css';

export default function Post(props) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}Name</p>
            <p className={classes.text}>{props.body}Description</p>
        </li>
    );
}