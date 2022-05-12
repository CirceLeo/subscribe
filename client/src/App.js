import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BoxesPage from './components/BoxesPage';
import LoginPage from './components/LoginPage';
import CheckoutForm from './components/CheckoutForm';
import AdminBoxes from './components/AdminBoxes';
import UserBoxes from './components/UserBoxes';
import Loading from './components/Loading';
import { useEffect, useContext} from "react";
import { UserContext } from "./context/user";

function App() {

  const [user, setUser] = useContext(UserContext)

  useEffect( () => {
    fetch("/me")
    .then(res => {
      if (res.ok) {
        console.log(res)
        res.json().then(user => setUser(user))
      }
      else {
        console.log("fetch failed")
      }
    })}, []) 


  return (
    // <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<BoxesPage/>} />
          <Route path='/boxes' element={<BoxesPage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/editboxes' element={<AdminBoxes/>} />
          <Route path='/checkout' element={<CheckoutForm/>} />
          <Route path='/myboxes' element={<UserBoxes/>} />
          <Route path="/loggingout" element={<Loading message={`Logging Out...`} destination={'/boxes'}/>} />
          <Route path="/subscribing" element={<Loading message={"Subscribed! Loading your subscriptions"} destination={'/myboxes'}/>} />
          <Route path="/updating" element={<Loading message={"Updating your changes..."} destination={'/editboxes'}/>} />
          <Route path="/creating" element={<Loading message={"Creating your box..."} destination={'/editboxes'}/>} />
          <Route path="/loggingin" element={<Loading message={"Logging in..."} destination={'/boxes'}/>} />
          <Route path="/signedup" element={<Loading message={"Creating your account..."} destination={'/boxes'}/>} />
        </Routes>
      </Router>
    // </UserProvider>


  );
}

export default App;
