import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoMatchPage from './components/NoMatch';
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/Home';
import LoginPage from './components/aouth/Login';
import RegistryPage from './components/aouth/Register';
import 'bootstrap/dist/css/bootstrap.css';
import DefaultLeyout from './components/containers/DefaultLeyout';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<DefaultLeyout/>} >
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegistryPage/>}/>
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
