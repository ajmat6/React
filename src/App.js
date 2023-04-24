// import logo from './logo.svg';
// import "./App.css";
import react, {useState} from 'react'
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState('light'); //Wheather dark mode is enabled or not

  // changeMode function:
  const changeMode = (e) => {
    if(mode === 'light') 
    {
      setmode('dark');
      //Because this changeMode function is in App.js, therfore its body is whole website body so we can change its background color from here easily.
      document.body.style.backgroundColor = '#282c34';
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    } 
  }

  return (
    <>
      {/* If props values are not passed, then it will take defaultProps values */}
      {/* passing mode in the navbar. */}
      <Navbar title="TextAnalyzer" aboutme="About Us" mode={mode} changeMode={changeMode} /> 
      <div className="container">
        <TextForm heading="Enter the text" mode={mode}/> 
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
