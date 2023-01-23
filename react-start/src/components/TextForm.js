import React,{useState} from "react"


export default function TextForm(props){
    const [text, setText]= useState('Enter the test here...');
    const handleUpClick =()=>{
        setText(text.toUpperCase());
    }
    const handleUpClickLower =()=>{
        setText(text.toLowerCase());
    }
    const handleUpClickCamel =()=>{
       setText(text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 1 ? word.toLowerCase() : word.toUpperCase();
          }).replace(/\s+/g, ' '));
        }
    const handleOnChange =(event)=>{
        setText(event.target.value);

   }
   
    // text = "new text "; wrong way to change;
    // setText = "new text"; right way;
    return( 
      <>
      <div className="container">
      <h1 className="my-3">
        {props.heading}
      </h1>
     <textarea className="form-control " value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
     <button className="btn btn-primary my-3" onClick={handleUpClick}> Convert to Upper Case</button>
     <button className="btn btn-primary mx-2" onClick={handleUpClickLower}> Convert to lower Case</button>
     <button className="btn btn-primary mx-2" onClick={handleUpClickCamel}> Convert to Camel Case</button>


    </div>
   <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words & {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} Minutes of read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
   </div>
      </>
      )
}
