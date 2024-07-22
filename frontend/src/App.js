import React,{useState,useEffect, lazy, Suspense,startTransition } from 'react';

import { Routes,Route,BrowserRouter} from "react-router-dom";



import Navbars from './component/Navbars';
import Footer from './component/footer';


import Signup from './component/Signup'
import Signin from './component/Signin'
import Loading from './component/Loading.js';
import NotFound from './component/NotFound.js'
// import './component/css/Cards.css'
import './App.css';



const Home = lazy(()=> import('./component/Home.js'))
const Click = lazy(()=> import('./component/click.js'))
const IT = lazy(()=> import('./component/it/Employee.js'))




const App = ()=>{
 

  return (
    
    <BrowserRouter>
    
    <div className="App">
    
      
   
        <Routes>
      
        {/* <Route path="/" element={<Signup/>}/> */}
        <Route path="/SignupUser" element={<Signup/>}/>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signin" element={<Signin/>}/>

         <Route path="*" element={
          <div>
          <Navbars />
         <NotFound/>
         </div>
         }/>
          
        

          {/* Home */}
          <Route path="/home" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          <Navbars />
                    
           < Home />
          
          
          <Footer/>
          </div>
          </React.Suspense>
        }/>

          <Route path="/click" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          <Navbars />
                    
           < Click />
          
          
          {/* <Footer/> */}
          </div>
          </React.Suspense>
        }/>
          <Route path="/IT" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          {/* <Navbars /> */}
                    
           < IT />
          
          
          {/* <Footer/> */}
          </div>
          </React.Suspense>
        }/>
        
       

        </Routes>
        
    </div>
    
    {/* <Footer/> */}
    </BrowserRouter>
    
  );
}

export default App;