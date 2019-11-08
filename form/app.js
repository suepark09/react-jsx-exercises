let TextInput = () => {
    return <div>
            <input type="text" placeholder="Insert placeholder"></input>
        </div>
}

let YesNoRadio = () => {
    return <div className="radiobtn-container">
        <input type="radio" name="YesNo" value="Yes" /> Yes <br />
        <input type="radio" name="YesNo" value="No" /> No <br />
    </div>
}

let SubmitButton = () => {
    return <div>
        <input type="submit" value="Submit" />
    </div>
}

let Form = () => {
    return <div className="form-container">
        <form>
            <h1>Random Form</h1>
            <p>Full Name:</p>
            <TextInput />
            <p>Phone Number:</p>
            <TextInput />
            <p>Email:</p>
            <TextInput />
            <YesNoRadio />
            <SubmitButton />
        </form>
    </div>
}


ReactDOM.render(<Form />, document.getElementById('root'))