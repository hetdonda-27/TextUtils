import React from "react";
import { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert Uppercase", "Success");
    }

    const handleDownClick = () => {
        let LText = text.toLowerCase();
        setText(LText)
        props.showAlert("Convert LowerCase", "Success");
    }

    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("copied to Clipboard", "Success");
    }

    const clearText = () => {
        setText("")
        props.showAlert("clear text", "Success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea class="form-control" value={text} onChange={handleOnChange} style={{
                        background: props.mode === 'light' ? 'white' : '#343a40',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} id="myBox" rows="8"></textarea>
                </div>

                <p className="my-2">Length: {text.split(" ").join("").length}</p>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            </div>
        </>
    )
}