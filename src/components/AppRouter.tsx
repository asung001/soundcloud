import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../router/route.js';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} element={route.element} path={route.path} />
            ))}
        </Routes>
    );
};

export default AppRouter;