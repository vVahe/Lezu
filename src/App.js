import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setLoggedInUser } from './store/actions/authActions';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
    componentDidMount() {
        // check for token
        if (localStorage.getItem('jwtToken')) {
            // set auth token header auth
            setAuthToken(localStorage.getItem('jwtToken'));
            // decode token
            const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
            // set logged in user
            this.props.setLoggedInUser(decodedToken);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <div className="container mx-auto">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { setLoggedInUser }
)(App);
