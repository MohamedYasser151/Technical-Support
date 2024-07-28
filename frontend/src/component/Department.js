import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import img from './image/5.jpg'
import img1 from './image/8.jpg'
import style from './css/Department.module.css'
import Aos from 'aos'
import  "aos/dist/aos.css" 
import { useTranslation } from 'react-i18next';

function Department() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  const { t, i18n } = useTranslation();

     
  return (
    <div className={style.Department}>
        <div className={style.imgg} data-aos="fade-right">
            <h1>{t("قسم المناعة")}</h1>

        </div>
        <div className={style.imgg1} data-aos="fade-left">
            <h1>{t("قسم الدرن")}</h1>

        </div>
        <div className={style.imgg2}  data-aos="fade-right">
            <h1>{t("قسم الكيمياء الحيوية ")}</h1>

        </div>
        <div className={style.imgg3}  data-aos="fade-left">
            <h1>{t("قسم علم الانسجة")}</h1>

        </div>
        <div className={style.imgg4}  data-aos="fade-right">
            <h1>{t("قسم علم امراض الدم ")}</h1>

        </div>
        <div className={style.imgg5}  data-aos="fade-left">
            <h1>{t("قسم الفيروسات ")}</h1>

        </div>
        <div className={style.imgg6}  data-aos="fade-right">
            <h1>{t("قسم الصحة العامة")}</h1>

        </div>
        <div className={style.imgg7}  data-aos="fade-left">
            <h1>{t("قسم استقبال العينات ")}</h1>

        </div>
         <NavLink className="btnlink" to="/home">
<button>
    
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">{t("الرئيسية")}</span>
</button>
</NavLink>

    </div>
  )
}

export default Department
