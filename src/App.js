import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Changelog from './Components/Changelog/Changelog';
import PasswordProtect from './Components/PasswordProtect/PasswordProtect';
import Licenses from './Components/Licenses/Licenses.js';
import StyleGuide from './Components/StyleGuide/StyleGuide.js';
import Home from './Components/Home/Home.js';
import Blog from './Components/Blog/Blog.js';
import Login from './Components/Login/Login.js';
import ForgotPassword from './Components/Login/ForgorPassword.js';
import Next from './Components/Login/Next.js';
import Register from './Components/Login/Register.js';
import BlogMoreDetails from './Components/Blog/BlogMoreDetails.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/styleGuide' element={<StyleGuide/>}/>
            <Route path='/changelog' element={<Changelog/>}/>
            <Route path='/passwordProtect' element={<PasswordProtect/>}/>
            <Route path='/licenses' element={<Licenses/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/moreDetails/:id' element={<BlogMoreDetails/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot' element={<ForgotPassword/>}/>
            <Route path='/next' element={<Next/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<NotFound/>}/>
         </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
