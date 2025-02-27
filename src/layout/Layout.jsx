import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;