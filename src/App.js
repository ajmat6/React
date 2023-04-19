// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* If props values are not passed, then it will take defaultProps values */}
      <Navbar title="TextChanger" aboutme="About Us"/> 
      <div className="container">
        <TextForm heading="Enter the text you want to convert into Upper Case"/>
      </div>
    </>
  );
}

export default App;
