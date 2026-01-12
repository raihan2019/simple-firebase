import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
const root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default root;