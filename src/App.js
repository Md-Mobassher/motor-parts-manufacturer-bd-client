import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import Signup from './Login/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Shared/Footer';
import Users from './Pages/Dashboard/Users'
import Navbar from './Shared/Navbar';
import AddProduct from './Pages/Dashboard/AddProduct';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import { ToastContainer } from 'react-toastify';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div className=''>
      <Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='purchase' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
            <Route path='purchase/:toolId' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
            <Route path='myorder' element={<RequireAuth><MyOrder /></RequireAuth>}></Route>
        
  
            <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
              <Route index  element={<MyProfile></MyProfile>}></Route>
              <Route  path='addproduct' element={<AddProduct></AddProduct>}></Route>
              <Route  path='addreview' element={<AddReview></AddReview>}></Route>
              <Route  path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
              <Route  path='users' element={<Users></Users>}></Route>
            </Route>
            <Route path='blogs' element={<Blogs></Blogs>}></Route>
            <Route path='signup' element={<Signup></Signup>}></Route>
            <Route path='login' element={<Login></Login>}></Route>


            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
      </Navbar>
      


        
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
