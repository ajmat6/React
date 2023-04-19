import React, {useState} from 'react' //Importing useState hook from the react.
// import PropTypes from 'prop-types'



export default function TextForm(props) {
  const [text, settext] = useState("Enter the text Here");
  // settext("ajmat kathat");

  const upperCase = (e) => {
    e.preventDefault();
    console.log("Convert to UpperCase clicked");
    settext(text.toUpperCase());
  }

  const lowerCase = (e) => {
    e.preventDefault();
    settext(text.toLowerCase());
  }

  const speak = (e) => {
    e.preventDefault();
    const voiceTaken = new SpeechSynthesisUtterance();
    voiceTaken.text = text;
    window.speechSynthesis.speak(voiceTaken);
  }

  const handleOnChange = (e) => {
    console.log("Handle on change");
    settext(e.target.value);
  }

  const textareaClick = (e) => {
    settext(" ");
  }

  return (
    <>
    <div className="container my-5">
      <form>
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onClick={textareaClick}  onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={upperCase}>Convert to UpperCase</button>
          <button type="submit" className="btn btn-primary mx-3" onClick={lowerCase}>Convert to LowerCase</button>
          <button type="submit" className="btn btn-primary mx-3" onClick={speak}>Play Sound of Entered Text</button>
      </form>
    </div>

    <div className="container my-3">
      <h2>Entered Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characers</p>
      <p>The Entered Text can be read in {text.split(" ").length * 0.008} Minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
