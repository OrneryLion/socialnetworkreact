import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RouterPage from './components/RouterPage';




function App() {
  return (
      <div className='App'>
        <RouterPage/>
      </div>
  );
}

export default App;
