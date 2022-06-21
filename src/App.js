import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './components/admin';
import Navbar from './components/navbar';
import Customers from './components/customers';
import Messages from './components/messages';
import Settings from './components/settings';
import Help from './components/help';
import Password from './components/password';
import SignOut from './components/signout';
import Footer from './components/footer';



class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Admin />}>
            </Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/password" element={<Password />}></Route>
            <Route path="/signout" element={<SignOut />}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
