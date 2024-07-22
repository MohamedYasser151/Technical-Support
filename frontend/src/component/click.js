import React,{useState} from 'react';
import stylesr from './css/Click.module.css';
import imgPhone from './image/images.png'; // صورة للهاتف
import imgPrinter from  './image/printer.png'; // صورة للطابعة
import Cookies from 'js-cookie';

function Click() {
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [report, setReport] = useState('');
  
    const handleDeviceChange = (device, image) => {
      setSelectedDevice({ device, image });
    };
  
    const handleReportChange = (e) => {
      setReport(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const username = Cookies.get('username'); // الحصول على قيمة username من الكوكيز
    
        const data = {
          device: selectedDevice.device,
          image: selectedDevice.image,
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
          setReport('');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };
    
  
    return (
    
    <div className={stylesr.allclick} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh", flexDirection: "column", }}>
        <form className={stylesr.arddds} onSubmit={handleSubmit}>
          <div className={stylesr.dropdown}>
            <button type="button" className={stylesr.dropbtn}>
              {selectedDevice ? (
                <>
                  <img src={selectedDevice.image} alt={selectedDevice.device} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                  {selectedDevice.device}
                </>
              ) : 'اختر جهاز'}
            </button>
            <div className={stylesr.dropdownContent}>
              <div onClick={() => handleDeviceChange('هاتف', imgPhone)}>
                <img src={imgPhone} alt="Phone" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                هاتف
              </div>
              <div onClick={() => handleDeviceChange('طابعة ', imgPrinter)}>
                <img src={imgPrinter} alt="Printer" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                طابعة 
              </div>
            </div>
          </div>
          <textarea 
            value={report}
            onChange={handleReportChange}
            placeholder="اكتب التقرير هنا..." 
            style={{ width: '100%', height: '150px', padding: '10px', fontSize: '16px', borderRadius: '5px', marginTop: '20px' }} 
          />
          <button type="submit" className={stylesr.btn}>click</button>
        </form>
      </div>
    );
  }
  
  export default Click;