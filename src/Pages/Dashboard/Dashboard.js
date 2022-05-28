import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <section className='h-screen'>
            <div class="drawer drawer-mobile  ">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content  mt-8 ml-6">
                
                <Outlet></Outlet>
            </div>
            <div class="drawer-side shadow-xl">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-5 h-full w-48   text-base-content">
                    
                    <li><Link to="/dashboard">My Profile</Link></li>
                    { 
                       !admin && <>
                       
                           <li><Link to="/dashboard/addreview">Add a Review</Link></li>
                       </>
                    }   
                    {
                        admin && <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                            <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
                        </>
                    }
                    
                    
                </ul>

            </div>
            </div>
        </section>
    );
};

export default Dashboard;