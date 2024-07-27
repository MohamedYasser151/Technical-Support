import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import img from './image/5.jpg'
import img1 from './image/6.jpg'
import style from './css/Department.module.css'
import Aos from 'aos'
import  "aos/dist/aos.css" 
function Department() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
     
  return (
    <div className={style.Department}>
        <div className={style.imgg} data-aos="fade-right">
            <h1>قسم المناعة</h1>

        </div>
        <div className={style.imgg1} data-aos="fade-left">
            <h1>hello</h1>

        </div>
        <div className={style.imgg2}  data-aos="fade-right">
            <h1>hello</h1>

        </div>
        <div className={style.imgg2}  data-aos="fade-left">
            <h1>hello</h1>

        </div>
         <NavLink className="btnlink" to="/home">
<button>
    
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Home</span>
</button>
</NavLink>

    </div>
  )
}

export default Department
