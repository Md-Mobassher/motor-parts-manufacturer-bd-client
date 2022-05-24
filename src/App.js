import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import Signup from './Login/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div className=''>
      <Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='myorder' element={<RequireAuth><MyOrder /></RequireAuth>}></Route>
            <Route path='blogs' element={<Blogs></Blogs>}></Route>
            <Route path='signup' element={<Signup></Signup>}></Route>
            <Route path='login' element={<Login></Login>}></Route>


            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
      </Navbar>
      


        
      
    </div>
  );
}

export default App;
