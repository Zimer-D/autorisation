import HomePage from 'autorisation/HomePage';
import LoginPage from 'autorisation/LoginPage';
import RegisterPage from 'autorisation/RegisterPage';
import {  Route, Router, Routes} from 'react-router-dom'

import './App.css';

function App() {
  return (
 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/register' element={<RegisterPage/>}/>
 </Routes>
  );
}

export default App;
