// import logo from './logo.svg';
// import "./App.css";
import react, {useState} from 'react'
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light'); //Wheather dark mode is enabled or not
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setalert(null); //null alert means no alert
    }, 2000);
  }

  // changeMode function:
  const changeMode = (e) => {
    if(mode === 'light') 
    {
      setmode('dark');
      //Because this changeMode function is in App.js, therfore its body is whole website body so we can change its background color from here easily.
      document.body.style.backgroundColor = '#282c34';
      showalert("Dark Mode Enabled!", "success");
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enabled!", "success");
    } 
  }

  return (
    <>
      {/* If props values are not passed, then it will take defaultProps values */}
      {/* passing mode in the navbar. */}
      <Navbar title="TextAnalyzer" aboutme="About Us" mode={mode} changeMode={changeMode} /> 
      <Alert alert={alert}/>
      <div className="container">
        {/* Passing showalert function as a prop in the Textform component */}
        <TextForm heading="Enter the text" mode={mode} showalert={showalert}/> 
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
