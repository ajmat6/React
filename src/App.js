// import logo from './logo.svg';
// import "./App.css";
import react, {useState} from 'react'
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState('light'); //Wheather dark mode is enabled or not
  const [ModeText, setModeText] = useState("Enable Dark Mode")

  // changeMode function:
  const changeMode = (e) => {
    if(mode === 'light') setmode('dark');
    else setmode('light');
  }

  const modeText = (e) => {
    if(ModeText === 'Enable Dark Mode') setModeText('Enable Light Mode');
    else setModeText('Enable Dark Mode');
  }

  return (
    <>
      {/* If props values are not passed, then it will take defaultProps values */}
      {/* passing mode in the navbar. */}
      <Navbar title="TextChanger" aboutme="About Us" mode={mode} changeMode={changeMode} modeText={modeText}/> 
      <div className="container">
        <TextForm heading="Enter the text you want to convert into Upper Case"/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
