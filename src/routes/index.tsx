import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const defaultRoutes: {element: JSX.Element, path: string}[] = [
    {element: <Dashboard />, path: '/'},
]

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            {defaultRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
        </BrowserRouter>
    );
}