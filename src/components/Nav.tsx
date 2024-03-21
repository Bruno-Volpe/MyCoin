import { useState } from 'react'
import { Link } from 'react-router-dom'

import MetaMask from './MetaMask'

import logo from '../assets/logo.png'

const Navbar = () => {
    const [, setActive] = useState("")

    const showLinkTree = () => {
        return (
            <>
                <li>
                    <MetaMask />
                </li>
            </>
        )
    }
    
    return (
        <nav
        className={
            `
            px-12
            w-full
            flex
            items-center
            py-5
            fixed
            top-0
            z-20
            bg-primary
            `
        }
        >
            <div className='w-full flex flex-col sm:flex-row justify-between items-center max-w-7x1 mx-auto'>
                <Link 
                to='/'
                className='flex items-center'
                onClick={() => setActive("")}
                >
                    <img src={logo} alt="logo" className="w-8 h-8 mr-4 object-contain" />
                    <p className="text-tertiary text-[32px] font-bold">My<span className="text-white-100" >Coin</span></p>
                </Link>

                <ul className='list-none gap-1 flex items-center mt-4 lg:mt-0 md:mt-0'>
                    {showLinkTree()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar