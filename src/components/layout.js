import React from 'react';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className="container">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout