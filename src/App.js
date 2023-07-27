import './App.css';
import NavBar from './componants/NavBar';
import TextForm from './componants/TextForm';
import About from './componants/About';
import React, { useState } from 'react'
import Alert from './componants/Alert';

function App() {
  const [mode, setMode] = useState('light') // Wheather dark mode is enable or not.
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.remove("primary");
    document.body.classList.remove("success");
    document.body.classList.remove("danger");
    document.body.classList.remove("warning");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#06052a';
      showAlert("Dark mode has been enabled", "success");

      // Bad Way to empress our website to user.

      // setInterval(() => {
      //   document.title = "My First is Amzing Now."
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <NavBar title="Nikhil" About_us="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the heading to enter below" mode={mode} />
      </div>
    </>
  );
}

export default App;