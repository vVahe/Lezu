import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white py-4">
            <p style={{ fontFamily: 'Inconsolata' }} className="m-0">
                All rights reserved - vVahe &copy; 2019
            </p>
            <i className="fa fa-github m-0 fa-1x mr-2"></i>
            <a
                className="text-white"
                style={{ fontFamily: 'Inconsolata' }}
                href="https://github.com/vVahe/Lezu"
            >
                Visist the Lezu project on Github
            </a>
        </div>
    );
};

export default Footer;
