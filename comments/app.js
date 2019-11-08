let ProfilePic = () => {
    return <div className="profile-pic">
    <img src="placeholder.png" height="100px" />
</div>
}

let CommentBody = () => {
    return <div className="comment-body">
        <h3>Sue Park</h3>
        <p>insert comment here</p>
    </div>
}

let Comment = () => {
    return <div className="comment-container">
        <ProfilePic />
        <CommentBody />
    </div>
}

let Comments = () => {
    return <div>
        <Comment />
        <Comment />
        <Comment />
    </div>
}

ReactDOM.render(<Comments />, document.getElementById('root'))