import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UppperCase!", "success")
    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value);
    }

    const handledownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success")

    }

    const handleClickClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear the spacess!", "success")
    }

    const handleClickCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy the clipboard!", "success")
    }

    const handleClickRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove the space!", "success")
    }

    const [text, setText] = useState('Enter a text here');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='my-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handledownClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClickClear}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClickCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClickRemoveSpace}>Remove Spaces</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p><b>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    )
}
