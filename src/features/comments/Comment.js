
const Comment = ({ comment }) => {
    const { text: commentText, } = comment;

    return (
        <p>
            {commentText}
            <br />
        </p>
    );
};

export default Comment;