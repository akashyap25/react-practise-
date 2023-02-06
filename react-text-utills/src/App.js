import './App.css';
import React, {useState} from'react';
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type) =>{
     setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if(mode==='light'){
       setMode('dark');
       document.body.style.backgroundColor= 'rgba(26, 26, 26, 0.772)';
       //rgb(152, 158, 236)
       showAlert('Dark Mode ', 'Sucessfully enabled')
    } else {
      setMode('light');
      document.body.style.backgroundColor='rgb(221, 222, 246)';
      showAlert('Light Mode ', 'Sucessfully enabled' );
    }
  }
  return (
    <>
    <NavBar title='Text-Utils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
          <Router>
            <Routes>
                <Route path="/" element={<TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>}>
                </Route>
            </Routes>
          </Router>
        </div>
    </>
  );
}

export default App;
