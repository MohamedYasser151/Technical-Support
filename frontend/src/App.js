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
const  Chatbot = lazy(()=> import('./component/chatbot/chat.js'))
const  Pages = lazy(()=> import('./component/page.js'))
const  Department = lazy(()=> import('./component/Department.js'))




const App = ()=>{
 

  return (
    
    <BrowserRouter>
    
    <div className="App">
    
      
   
        <Routes>
      
        {/* <Route path="/" element={<Signup/>}/> */}
        <Route path="/SignupUser" element={<Signup/>}/>
        {/* <Route path="/" element={<Signin/>}/> */}
        <Route path="/signin" element={<Signin/>}/>

         <Route path="*" element={
          <div>
          <Navbars />
         <NotFound/>
         </div>
         }/>
          
         {/* chatbot */}
         <Route path="/chatbot" element={
          <React.Suspense fallback={<Loading/>}>
        <div>
         <Navbars   />
        <Chatbot />
        {/* <Footer/fu */}
        </div>
        </React.Suspense>
        } />

          {/* Home */}
          <Route path="/" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          {/* <Navbars /> */}
                    
           < Pages />
          
          
          {/* <Footer/> */}
          </div>
          </React.Suspense>
        }/>
          <Route path="/home" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          <Navbars />
                    
           < Home />
          
          
          {/* <Footer/> */}
          </div>
          </React.Suspense>
        }/>

          <Route path="/Reports" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          <Navbars />
                    
           < Click />
          
          
          {/* <Footer/> */}
          </div>
          </React.Suspense>
        }/>

        {/* Department */}
          <Route path="/Department" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          {/* <Navbars /> */}
                    
           < Department />
          
          
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
