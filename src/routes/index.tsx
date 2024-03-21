import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultTemplate from '../components/DefaultTemplate';

import Dashboard from '../pages/Dashboard';
import CoinDetail from '../pages/CoinDetail';
import NotFound from '../pages/NotFound';

const defaultRoutes: {element: JSX.Element, path: string}[] = [
    {element: <Dashboard />, path: '/'},
    {element: <CoinDetail />, path: '/coin/:id'},
    {element: <NotFound />, path: '*'}
]

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            {defaultRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={<DefaultTemplate>{route.element}</DefaultTemplate>} />
            ))}
        </Routes>
        </BrowserRouter>
    );
}