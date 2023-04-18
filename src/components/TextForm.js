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

  const handleOnChange = (e) => {
    console.log("Handle on change");
    settext(e.target.value);
  }

  const textareaClick = (e) => {
    settext(" ");
  }

  return (
    <form>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onClick={textareaClick}  onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={upperCase}>Convert to UpperCase</button>
    </form>
  )
}
