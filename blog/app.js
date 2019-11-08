let Header = () => {
    return <div className="blog-header">
        <h1>Blog Title</h1>
    </div>
}
let Article = () => {
    return <div className="article-container">
    <div className="article-img">
        <img src="placeholder.png" height="100px" />
    </div>
    <div className="article-text">
        <h2>Article Title</h2>
        <p>Insert super awesome description regarding what the article is about and whatnot.</p>
    </div>
</div>
}
let Footer = () => {
    return <div className="footer">Here is the blog footer!</div>
}

let Blog = () => {
    return <div>
        <Header />
        <Article />
        <Footer />
    </div>
  
}


ReactDOM.render(<Blog />, document.getElementById('root'))