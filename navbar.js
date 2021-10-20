import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className = 'header'>
            <h1 className = 'logo'> icons </h1>
            <ul className = 'navbar'>
               <li>
                   <Link smooth to = '#'>Home</Link>
               </li>
               <li>
                   <Link smooth to = '#about'>About</Link>
               </li>
               <li>
                   <Link smooth to = '#portfolio'>Portfolio</Link>
               </li>
               <li>
                   <Link smooth to = '#'>Contact</Link>
               </li>
            </ul>
           <div className = 'icons'>
               <a className = 'socmedia' href = '#'><FaGithub/></a>
               <a className = 'socmedia' href = '#'><FaLinkedin/></a>
           </div>
        </div>
    )
}

export default Navbar
