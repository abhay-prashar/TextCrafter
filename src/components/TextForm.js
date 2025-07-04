import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success");
  }

  const copyText = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Texted Copied!", "success");
  }

  const removeEX=()=>{
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("All Extra Spaces Removed!", "success");
  }

  const handleClear = ()=>{
    setText('')
    props.showAlert("Cleared!", "success");
  }

  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speaking....!", "success");
}

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h2 className='mb-4'>{props.heading}</h2>
    <div className="mb-3">
      <textarea className="form-control" value ={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary me-2 mt-1" onClick={handleUpCase}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mt-1" onClick={handleLoCase}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mt-1 mx-1" onClick={copyText}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mt-1 mx-1" onClick={removeEX}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-secondary mx-2 mt-1" onClick={handleClear}>Clear</button>
    <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}>
      <h2>Text Summary</h2>
      <p>Words: {text.trim().split(" ").filter(Boolean).length}, Letters: {text.length}</p>
      <p>{text.trim().split(/\s+/).filter(Boolean).length*0.005} min</p>
      <h3>Preview</h3>
      <p>{text.length<1?'Nothing to Preview :)':text}</p>
    </div>
    </>
  )
}
