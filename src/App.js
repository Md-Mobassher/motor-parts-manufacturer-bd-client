import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto lg:px-12'>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Navbar>
      
    </div>
  );
}

export default App;
