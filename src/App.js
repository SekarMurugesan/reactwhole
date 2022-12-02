import './App.css';
import React from 'react';
import {Route,NavLink, useNavigate, } from "react-router-dom";
import Forms from "./Component/Forms";
import Home from "./Component/Home";
import Article from "./Component/Article";
import News from "./Component/News";
import Videos from "./Component/Videos";
import Error from "./Component/Error";
import Blog from "./Component/Blog";
import Ho from "./Component/Ho";
import User from "./Component/User";
import CS from "./Component/CS";
import JS from "./Component/JS";
import JSII from "./Component/JSII";
import HT from "./Component/HT";
import Dummy from "./Component/Dummy";
import Text from "./Component/Text";
import News1 from "./Component/News1";
import News2 from "./Component/News2";
import Childtoparent from "./Component/Childtoparent"
import { Routes } from 'react-router-dom';
import { useState,createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Trial from './Component/Trial';
const Lazytrial=React.lazy(()=> import("./Component/Trial"));



export const vcontext= createContext();
function App() {
  const [news, setNews] = useState("Click to previous Page");
  const navigate = useNavigate();
  const [childtoparent, setchildtoparent] = useState(0);

  function Eve() { (setNews("Previous Page")); navigate(-1)};
  
 
 
  return (   
        
       <div className='bg container-fluid'>
         <div className='sticky-top'>
         <div className='con'>
           <NavLink to="/reactwhole" activeClassName="fas" className="con-le">Home</NavLink>
           <NavLink to="/news" activeClassName="fas" className="con-le">News</NavLink>
           <NavLink to="/article" activeClassName="fas" className="con-le">Article</NavLink>
           <NavLink to="/blog" activeClassName="fas" className="con-le">Blog</NavLink>
           <NavLink to="/text" activeClassName="fas" className="con-le">Text</NavLink>
           <NavLink to="/trial" activeClassName="fas" className="con-le">Trial</NavLink>
           <NavLink to="/ho/username" activeClassName="fas" className="con-le">Ho</NavLink>
           <NavLink to="/User" activeClassName="fas" className="con-le">Dynamic</NavLink>
           <NavLink to="/cs" activeClassName="fas" className="con-le">CS</NavLink>
           <NavLink to="/js" activeClassName="fas" className="con-le">JS</NavLink>
           <NavLink to="/jsii" activeClassName="fas" className="con-le">JSII</NavLink>
           <NavLink to="/ht" activeClassName="fas" className="con-le">HT</NavLink>
           <div className='con-re'>
           <NavLink to="/videos" activeClassName="fas" className="con-le">Videos</NavLink>
           <NavLink to="/contact" activeClassName="fas" className="con-le">Forms</NavLink>
           </div>
           </div>
           {childtoparent}
           <button className='cla' onClick={Eve}>{news}</button><Childtoparent setchildtoparent={(e)=>setchildtoparent(e)}/>
           
         </div>

         {/*navbar*/}
         {/*importence 2nd method of navbar creation*/}
    {/*<div className='d-flex fw-bold fs-3 flex-row bg-primary nav'>
  <div className='d-flex flex-row'><div className='p-2'>one</div><div className='p-2'>two</div><div className='p-2'>three</div></div>
  <div className='d-flex mx-auto'><div className='p-2'>four</div></div>
  <div className='d-flex'><div className='p-2'>five</div></div>
</div> */}     
  <nav className="navbar navbar-expand navbar-light bg-info navbarespn">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto container">
      <li className="nav-item">
        <div className="nav-link espnc" href="#"><b>ESPN cricinfo</b></div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Live scores
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{color:"black"}}>
          <div className='one'>
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a></div>
          <div className='two'>
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a></div>
          <div className='three'>
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a></div>
        </div>
      </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Series</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Teams</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Videos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Stats</a>
      </li>     
    </ul>
    <ul className="navbar-nav ms-auto rightside">
      <li className="nav-item">
        <a className="nav-link" href="#">Search</a>
      </li></ul>
  </div>
</nav>
           
        <vcontext.Provider value={"Robin"}>
        
        <Routes>
             <Route exact path="reactwhole" element={<Home />} ></Route>
             <Route path="news" element={<News />} ></Route>
             <Route path="article" element={<Article />} ></Route>
             <Route path="blog" element={<Blog />} >
                   <Route path="news1" element={<News1 />} />
                   <Route path="news2" element={<News2 />} />
             </Route>
             <Route path="text" element={<Text />} ></Route>
             {/*<Route path="text" element={<Trial />} ></Route>*/}
             <Route path="trial" element={<React.Suspense fallback="...loading"><Lazytrial /></React.Suspense>} ></Route>
             <Route exact path="/ho/:usernames" element={<Ho />} ></Route>
             <Route path="cs" element={<CS />} ></Route>
             <Route path="js" element={<JS />} ></Route>
             <Route path="jsii" element={<JSII />} ></Route>
             <Route path="ht" element={<HT />} ></Route>
             <Route path="user/:id" element={<User />} ></Route>              
             <Route path="videos" element={<Videos />} ></Route>
             <Route path="contact" element={<Forms/> } ></Route>
             <Route path="dummy" element={<Dummy />} ></Route>
             <Route path="*" element={<Error />} ></Route>
        </Routes>
       
        </vcontext.Provider>
       
      <div className='row footer '>
      <div className='col-3 '>
        <h5 className= 'footer-list '>Fruits</h5>        
        <NavLink to="/dummy" className= 'footer-list ' >Apple</NavLink>
        <NavLink to="/dummy" className=' footer-list '>Orange</NavLink>
        <NavLink to="/dummy" className=' footer-list ' >Mango</NavLink>
        <NavLink to="/dummy" className=' footer-list ' >Grapes</NavLink>  
      </div>
      <div className='col-3   '>
        <h5 className= 'footer-list '>Flower</h5>        
        <NavLink to="/dummy" className=' footer-list ' >Rose</NavLink>
        <NavLink to="/dummy" className=' footer-list '>Lily</NavLink>
        <NavLink to="/dummy" className=' footer-list ' >Orchid</NavLink>
        <NavLink to="/dummy" className=' footer-list' >Tulip</NavLink>  
      </div>
      <div className='col-3  '>
        <h5 className= 'footer-list '>Food grains</h5>        
        <NavLink to="/dummy" className=' footer-list ' >Rice</NavLink>
        <NavLink to="/dummy" className=' footer-list '>Wheat</NavLink>
        <NavLink to="/dummy" className='footer-list' >Millet</NavLink>
        <NavLink to="/dummy" className=' footer-list ' >Popcorn</NavLink>  
      </div>
      <div className='col-3 mr-5 '>
        <h5 className= 'footer-list ' >Vegetables</h5>        
        <NavLink to="/dummy" className=' footer-list' >Onion</NavLink>
        <NavLink to="/dummy" className=' footer-list'>Tomato</NavLink>
        <NavLink to="/dummy" className='footer-list ' >Potato</NavLink>
        <NavLink to="/dummy" className=' footer-list ' >Beans</NavLink>  
      </div>

       </div>
      
       </div>
  
      
    

  );
 
}

export default App;
