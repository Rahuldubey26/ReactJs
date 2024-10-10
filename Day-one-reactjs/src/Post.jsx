

export default function Post(props) {
    return (
        <div>
            <h2>{props.author}</h2>
            <h2>{props.body}</h2>
        </div>
    );
}