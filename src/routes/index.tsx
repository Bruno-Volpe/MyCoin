import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultTemplate from '../components/DefaultTemplate';

import Dashboard from '../pages/Dashboard';
import CoinDetail from '../pages/CoinDetail';
import NotFound from '../pages/NotFound';

import { routerPaths } from '../constants';


// Uses defaultTemplate to wrap the routes
const defaultRoutes: {element: JSX.Element, path: string}[] = [
    {element: <Dashboard />, path: routerPaths.dashboard},
    {element: <CoinDetail />, path: routerPaths.coinId()},
    {element: <NotFound />, path: routerPaths.notFound}
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