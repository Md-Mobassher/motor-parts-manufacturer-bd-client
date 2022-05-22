import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = ({children}) => {
  const [user] = useAuthState(auth);

  const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken');
  };

    let navItems = <>
        <li><NavLink to='/'  className='rounded-lg'>Home</NavLink></li>
        {
            user && <li><NavLink to='/purchase'  className='rounded-lg'>Purchase</NavLink></li>
        }
        
        <li><NavLink to='/dashboard' className='rounded-lg'>Dashboard</NavLink></li>
        <li><NavLink to='/blogs' className='rounded-lg'>Blogs</NavLink></li>
       
        <li>{user ? <button className="btn btn-ghost rounded-lg" onClick={logout} >Sign Out</button> : <NavLink to="/login" className='btn btn-ghost rounded-lg'>Login</NavLink>}</li>
    </>


    return ( 
       <section >
          <div className=" drawer drawer-end ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
    
              <div className="w-full navbar shadow-sm bg-base-100 fixed top-0 z-50 lg:px-20">
              <div className="flex-1 px-2 mx-2 text-2xl font-semibold ">Motor Parts BD</div>
                <div className="flex-none lg:hidden">
                  <label for="my-drawer-3" className="btn btn-square btn-ghost ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </div> 
                
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal ">
                        {navItems}
                  </ul>
                </div>
              </div>

          {children}
            </div> 
            <div className="drawer-side">
              <label for="my-drawer-3" className="drawer-overlay"></label> 
              <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {navItems}
              </ul>
              
            </div>
          </div>
       </section>
    );
};

export default Navbar;