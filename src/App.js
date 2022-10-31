import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
  return (
      <div className='App'>
        <div>
          <Router>
            <Routes>
              <Route path='/' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </Router>
        </div>
      </div>
  );
}

export default App;
