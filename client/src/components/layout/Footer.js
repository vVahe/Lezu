import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white mt-5 py-4 text-center">
            <p style={{ fontFamily: 'Inconsolata' }} className="m-0">
                All rights reserved - vVahe &copy; 2019
            </p>
            <i className="fa fa-github m-0 fa-1x mr-2"></i>
            <a
                className="text-warning"
                style={{ fontFamily: 'Inconsolata' }}
                href="https://github.com/vVahe/Lezu"
            >
                Click here to visist the Lezu project on Github
            </a>
        </div>
    );
};

export default Footer;
