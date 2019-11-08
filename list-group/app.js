let ListGroupItem = () => {
    return <div className="list-item-container">
       <p>List Item</p> 
    </div>
}

let ListGroup = () => {
    return <div className="list-group-container">
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
    </div>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))