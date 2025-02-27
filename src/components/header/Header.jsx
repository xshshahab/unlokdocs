import React from 'react'
import { Link, NavLink } from 'react-router'
import SocialLinks from './nav/SocialLinks'

const Header = () => {
    return (
        <nav
            className='flex justify-between p-4 px:16 bg-neutral-950 text-white items-center'
        >
            <Link to={"/"} >
                <h1 className='text-2xl font-bold'>Unlok<span className='text-orange-500'>Docs</span></h1></Link>

            <div id="center" className='max-w-xl flex items-center gap-4 rounded-3xl w-full px-6 border border-neutral-500 p-2'>
                <NavLink className="hover:text-orange-500" to="/pages/yt-links">YouTube</NavLink>
                <NavLink className="hover:text-orange-500" to="/pages/java">Java</NavLink>
                <NavLink className="hover:text-orange-500" to="/pages/frontend">Frontend</NavLink>
            </div>

            <div className='flex items-center gap-4'>
                <SocialLinks />
            </div>


        </nav>
    )
}

export default Header