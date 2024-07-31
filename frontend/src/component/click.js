import React, { useEffect, useState,useRef } from 'react'
import { useNavigate ,NavLink} from 'react-router-dom'
import stylesr from './css/Click.module.css';
import imgPhone from './image/10.png'; 
import imgPrinter from  './image/printer.png';
import img from  './image/8.png';
import img1 from  './image/9.png';
import img2 from  './image/10.png';
import img3 from  './image/11.png';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

function Click() {
  

    const [selectedDevice, setSelectedDevice] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [report, setReport] = useState('');
    const { t, i18n } = useTranslation();
  
    const handleDepartmentChange = (Department) => {
      setSelectedDepartment({ Department});
    };

    const handleDeviceChange = (device, image) => {
      setSelectedDevice({ device, image });
    };
  
    const handleReportChange = (e) => {
      setReport(e.target.value);
    };


  const navigate = useNavigate();

     useEffect(() => {
  
    const login = Cookies.get('login');
    if (login !== 'true') {
      
      navigate('/signin');
    }
  }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const username = Cookies.get('username'); 
    
        const data = {
          device: selectedDevice.device,
          image: selectedDevice.image,
          Department: selectedDepartment.Department,
          report: report,
          username: username,
          date: new Date().toISOString()
        };
    
        fetch('https://technical-support-seven.vercel.app/test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // Reset form after submission
          setSelectedDevice(null);
          setSelectedDepartment(null);
          setReport('');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };
    
  
    return (
    
    <div className={stylesr.allclick} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh", flexDirection: "column", }}>
        <form className={stylesr.arddds} onSubmit={handleSubmit}>
          <div className={stylesr.flexx}>
          <div className={stylesr.dropdown}>
            <button type="button" className={stylesr.dropbtn}>
              {selectedDevice ? (
                <>
                  <img src={selectedDevice.image} alt={selectedDevice.device} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                  {selectedDevice.device}
                </>
              ) : t('اختر الجهاز')}
            </button>
            <div className={stylesr.dropdownContent}>
              <div onClick={() => handleDeviceChange('هاتف', imgPhone)}>
                <img src={imgPhone} alt="هاتف" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                هاتف
              </div>
              <div onClick={() => handleDeviceChange('طابعة ', imgPrinter)}>
                <img src={imgPrinter} alt="طابعة" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                طابعة 
              </div>
              <div onClick={() => handleDeviceChange('كمبيوتر', img3)}>
                <img src={img3} alt="كمبيوتر" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                كمبيوتر 
              </div>
              <div onClick={() => handleDeviceChange('الاجهزه الطبيه', img1)}>
                <img src={img1} alt="الاجهزه الطبيه" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                الاجهزه الطبيه 
              </div>
              <div onClick={() => handleDeviceChange('الشبكه', img)}>
                <img src={img} alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                الشبكه
              </div>
            </div>
          </div>



          <div className={stylesr.dropdown}>
      <button type="button" className={stylesr.dropbtn}>
        {selectedDepartment ? (
          <>
            <div style={{ width: '30px', height: '30px', marginRight: '10px' }}>
              {/* {selectedDepartment.Department} */}
            </div>
            {selectedDepartment.Department}
          </>
        ) : t('اختر القسم')}
      </button>
      <div className={stylesr.dropdownContent}>
        <div onClick={() => handleDepartmentChange('قسم الفيروسات')}>
          قسم الفيروسات
        </div>
        <div onClick={() => handleDepartmentChange('قسم المناعة')}>
          قسم المناعة
        </div>
        <div onClick={() => handleDepartmentChange('قسم الجزيئات الحيوية')}>
          قسم الجزيئات الحيوية
        </div>
        <div onClick={() => handleDepartmentChange('قسم الدرن')}>
          قسم الدرن
        </div>
        <div onClick={() => handleDepartmentChange('قسم الموارد البشرية')}>
          قسم الموارد البشرية
        </div>
        <div onClick={() => handleDepartmentChange('قسم المخزون ')}>
          قسم المخزون
        </div>
        <div onClick={() => handleDepartmentChange('قسم الشؤون الهندسية-الصيانة العامة')}>
          قسم الشؤون الهندسية-الصيانة العامة
        </div>
        <div onClick={() => handleDepartmentChange('قسم الشؤون الهندسية-صيانة طبية')}>
          قسم الشؤون الهندسية-صيانة طبية
        </div>
        <div onClick={() => handleDepartmentChange('قسم الصحة الاكترونيه')}>
          قسم الصحة الاكترونيه
        </div>
        <div onClick={() => handleDepartmentChange('رئيس الفنيين')}>
          رئيس الفنيين
        </div>
        <div onClick={() => handleDepartmentChange('نائب مدير المختبر')}>
          نائب مدير المختبر
        </div>
        <div onClick={() => handleDepartmentChange('قسم الجودة')}>
          قسم الجودة
        </div>
        <div onClick={() => handleDepartmentChange('قسم علم امراض الدم')}>
          قسم علم امراض الدم
        </div>
        <div onClick={() => handleDepartmentChange('قسم علم امراض الانسجة')}>
          قسم علم امراض الانسجة
        </div>
        <div onClick={() => handleDepartmentChange('قسم الكيمياء الحيوية والهرمونات')}>
          قسم الكيمياء الحيوية والهرمونات
        </div>
        <div onClick={() => handleDepartmentChange('مدير المختبر الاقليمي')}>
          مدير المختبر الاقليمي
        </div>
        <div onClick={() => handleDepartmentChange('قسم الامن الصحي')}>
          قسم الامن الصحي
        </div>
        <div onClick={() => handleDepartmentChange('قسم الامن والسلامة')}>
          قسم الامن والسلامة
        </div>
        <div onClick={() => handleDepartmentChange('قسم التدريب')}>
          قسم التدريب
        </div>
      </div>
    </div>
          </div>
          
          <textarea 
            value={report}
            onChange={handleReportChange}
            placeholder={t("اكتب التقرير هنا" )}
            className={stylesr.textareaa} 
          />
          
          
          <button type="submit" className={stylesr.btn}>{t("ارسال")}</button>
        </form>
      </div>
    );
  }
  
  export default Click;