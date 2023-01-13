import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
function App() {
    const [mode, setmode] = useState('light');

    const toggleMode = ()=>{
        if (mode==='light') {
            setmode('dark')
            document.body.style.backgroundColor = 'black'
        } else {
            setmode('light')
            document.body.style.backgroundColor = 'white'
        }
    }



    return(
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className='container'>
        <TextForm heading='Enter Your Text Below To Analyze'mode={mode}/>
    </div>
        



     </>
    );
}

export default App;
