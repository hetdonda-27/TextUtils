import './App.css';
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About'; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light'); 
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
    };

    const toggleMode = () => {
        if (mode === 'light') {
            setMode("dark");
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "Success");
            document.title = "TextUtils - Dark Mode";
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "Success");
            document.title = "TextUtils - Light Mode";
        }
    };

    return (
        <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3">
                <Routes>
                    <Route  exact path="/about" element={<About mode={mode}/>} />
                    <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
