import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setLoggedInUser, logoutUser } from './store/actions/authActions';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Wordlist from './components/Wordlist/Wordlist';
import AddWord from './components/AddWord/AddWord';

// set auth token before any component renders
if (localStorage.getItem('jwtToken')) {
    setAuthToken(localStorage.getItem('jwtToken'));
}
class App extends Component {
    componentDidMount() {
        const token = localStorage.getItem('jwtToken');
        // check for token
        if (token) {
            // decode token
            const decodedToken = jwtDecode(token);
            // set logged in user
            this.props.setLoggedInUser(decodedToken);
            // check for expiration of token
            if (decodedToken.exp < Math.floor(new Date().getTime() / 1000)) {
                this.props.logoutUser();
                // TODO: clear any other state
                // redirect to landing page
                window.location.href = '/';
            }
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
                        <Route exact path="/word-list" component={Wordlist} />
                        <Route exact path="/add-word" component={AddWord} />
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
    { setLoggedInUser, logoutUser }
)(App);
