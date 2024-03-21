import React from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants';

const NotFound: React.FC = () => {
    return (
        <div className='mx-auto text-center text-white-100' >
            <h1 className='mb-6 text-4xl' >404: Page Not Found</h1>
            <p className='text-1xl mb-6' >We're sorry, but the page you were looking for doesn't exist.</p>
            <Link to={routerPaths.dashboard} className="text-tertiary text-2xl">Go back to Home</Link>
        </div>
    );
}

export default NotFound;