import React, { useEffect, useState,useRef } from 'react'
import { useNavigate ,NavLink} from 'react-router-dom'
import stylesr from './css/Click.module.css';
import imgPhone from './image/images.png'; // صورة للهاتف
import imgPrinter from  './image/printer.png'; // صورة للطابعة
import Cookies from 'js-cookie';

function Click() {
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [report, setReport] = useState('');
  
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
        
        const username = Cookies.get('username'); // الحصول على قيمة username من الكوكيز
    
        const data = {
          device: selectedDevice.device,
          image: selectedDevice.image,
          Department: selectedDepartment.Department,
          report: report,
          username: username // إضافة username إلى البيانات المرسلة
        };
    
        fetch('http://localhost:8083/test', {
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
          {/* <div className={stylesr.flexx}> */}
          <div className={stylesr.dropdown}>
            <button type="button" className={stylesr.dropbtn}>
              {selectedDevice ? (
                <>
                  <img src={selectedDevice.image} alt={selectedDevice.device} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                  {selectedDevice.device}
                </>
              ) : 'اختر جهاز'}
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
            </div>
          </div>



          <div className={stylesr.dropdown}>
            <button type="button" className={stylesr.dropbtn}>
              {selectedDepartment ? (
                <>
                  <div  style={{ width: '30px', height: '30px', marginRight: '10px' }} >
                  {/* {selectedDepartment.Department} */}
                    </div>
                  {selectedDepartment.Department}
                </>
              ) : 'اختر القسم'}
            </button>
            <div className={stylesr.dropdownContent}>
              <div onClick={() => handleDepartmentChange('قسم الفيروسات')}>
                {/* <img src={imgPhone} alt="Phone" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الفيروسات
              </div>
              <div onClick={() => handleDepartmentChange('قسم المناعة')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم المناعة 
              </div>


              <div onClick={() => handleDepartmentChange('قسم الجزيئات الحيوية')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الجزيئات الحيوية   
                </div>
              <div onClick={() => handleDepartmentChange('قسم الدرن')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الدرن
                </div>
              <div onClick={() => handleDepartmentChange('قسم الموارد البشرية')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الموارد البشرية
                </div>

              <div onClick={() => handleDepartmentChange('قسم المخزون ')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم المخزون              </div>
              <div onClick={() => handleDepartmentChange('قسم الشؤون الهندسية-الصيانة العامة')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الشؤون الهندسية-الصيانة العامة
                </div>
              <div onClick={() => handleDepartmentChange('قسم الشؤون الهندسية-صيانة طبية')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الشؤون الهندسية-صيانة طبية
                </div>
              <div onClick={() => handleDepartmentChange('قسم الصحة الاكترونيه')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الصحة الاكترونيه            
                  </div>
              <div onClick={() => handleDepartmentChange('رئيس الفنيين')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                رئيس الفنيين 
              </div>
              <div onClick={() => handleDepartmentChange('نائب مدير المختبر')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                نائب مدير المختبر
              </div>


              <div onClick={() => handleDepartmentChange('قسم الجودة')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الجودة
                </div>
              <div onClick={() => handleDepartmentChange('قسم علم امراض الدم')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم علم امراض الدم
                </div>


              <div onClick={() => handleDepartmentChange('قسم علم امراض الانسجة')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم علم امراض الانسجة  
                            </div>
              <div onClick={() => handleDepartmentChange('قسم الكيمياء الحيوية والهرمونات')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الكيمياء الحيوية والهرمونات   
                           </div>
              <div onClick={() => handleDepartmentChange('مدير المختبر الاقليمي')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                مدير المختبر الاقليمي
              </div>
              <div onClick={() => handleDepartmentChange('قسم الامن الصحي')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الامن الصحي              </div>
              <div onClick={() => handleDepartmentChange('قسم الامن والسلامة')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم الامن والسلامة      
                        </div>
              <div onClick={() => handleDepartmentChange(' قسم التدريب')}>
                {/* <img src={imgPrinter} alt="Printer" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                قسم التدريب        
                      </div>
             
            </div>
          </div>
          {/* </div> */}
          
          <textarea 
            value={report}
            onChange={handleReportChange}
            placeholder="اكتب التقرير هنا..." 
            style={{ width: '100%', height: '150px', padding: '10px', fontSize: '16px', borderRadius: '5px' }} 
          />
          
          
          <button type="submit" className={stylesr.btn}>click</button>
        </form>
      </div>
    );
  }
  
  export default Click;