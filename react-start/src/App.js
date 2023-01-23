import './App.css';
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
    <NavBar title='React' />
    <div className="container">
    <TextForm heading='Enter the text to analyze' />
    </div>
    </>
  );
}

export default App;
