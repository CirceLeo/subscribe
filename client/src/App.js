import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BoxesPage from './components/BoxesPage';
import LoginPage from './components/LoginPage';
import CheckoutForm from './components/CheckoutForm';
import AdminBoxes from './components/AdminBoxes';
import UserBoxes from './components/UserBoxes';

function App() {
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   fetch("/hello")
  //   .then((r) => r.json())
  //   .then((data) => setCount(data.count))
  // }, [])

  const [user, setUser] = useState(null)

  fetch("http://localhost:3000/me")
  .then(res => {
    if (res.ok) {
      res.json.then(user => setUser(user))
    }
  }, [])


  return (
    <Router>
      <Routes>
        <Route path='/' element={<BoxesPage/>} />
        <Route path='/boxes' element={<BoxesPage/>} />
        <Route path='/login' element={<LoginPage goodLogin={setUser}/>} />
        <Route path='/editboxes' element={<AdminBoxes/>} />
        <Route path='/checkout' element={<CheckoutForm/>} />
        <Route path='/myboxes' element={<UserBoxes/>} />
      </Routes>
    </Router>
  );
}

export default App;
