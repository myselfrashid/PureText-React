import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }
    const handleClear = () =>{
        let newText = ('');
        setText(newText);
        props.showAlert('Text Cleared', 'success');
    }
    const handleCopyText = () =>{
        let copiedText = document.getElementById('myBox');
        copiedText.select();
        copiedText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copiedText.value);
        console.log('handle copy was clicked')
        props.showAlert('Copied to Clipboard', 'success');
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <div>
            <h1 style = {{color: props.mode==='dark'?'white':'black'}}>{props.Heading}</h1>
            <div className="mb-3 my-2" >
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#2a2d30':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <div>
            <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-secondary my-1 mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handleCopyText}>Copy to Clipboard</button>
            </div>
            <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>Text contains: {text.length} characters</p>
                <p>Text contains: {text.split(' ').length -1} word(s)</p>
            </div>
        </div>
    )
}
