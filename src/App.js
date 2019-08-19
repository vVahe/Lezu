import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="container mx-auto">
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
