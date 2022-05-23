import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken');
  };

    const navItems = <>
        <li><Link to='/'  className='rounded-lg'>Home</Link></li>
        {
            user && <li><Link to='/dashboard' className='rounded-lg'>Dashboard</Link></li>
        } 
        {/* {
            user && <li><NavLink to='/purchase'  className='rounded-lg'>Purchase</NavLink></li>
        }  
        {
            user && <li><NavLink to='/myorder'  className='rounded-lg'>My Orders</NavLink></li>
        }    */}
         
        
        <li><NavLink to='/blogs' className='rounded-lg'>Blogs</NavLink></li>
        <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>

        <li>{user ? <button className="btn btn-ghost rounded-lg" onClick={logout} >Sign Out</button> : <NavLink to="/login" className='btn btn-ghost rounded-lg'>Login</NavLink>}</li>
    </>


    return ( 
       <section className='relative z-10'>
         <div className="navbar px-16 mx-auto bg-base-100 fixed top-0">
            <div className="navbar ">
                <Link to='/' className="flex-1 px-2 mx-2 text-2xl font-semibold ">Motor Parts BD</Link>
                <div className=" hidden lg:flex">
                  <ul className="menu menu-horizontal p-0">
                      {navItems}
                  </ul>  
              </div>
              <div className="dropdown dropdown-end flex-end block lg:hidden">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
          
       </section>
    );
};

export default Navbar;