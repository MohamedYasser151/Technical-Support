import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styleess from './cssemp/employee.module.css';
import img from '../image/icon.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyVerticallyCenteredModal = ({ show, onHide, doctorData }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: "#500c7f" }}>
        Report
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {doctorData.map((item, i) => (
          <div key={i}>{item.textarea}</div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} style={{ background: "#500c7f", border: "none" }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

function Employee() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedDoctorData, setSelectedDoctorData] = useState([]);
  const navigate = useNavigate();

  const onHide = () => setModalShow(false);

  useEffect(() => {
    fetch('https://technical-support-seven.vercel.app/services')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error('Expected data to be an array, but got:', data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const groupDataByUsername = (data) => {
    if (!Array.isArray(data)) {
      console.error('Expected data to be an array, but got:', data);
      return {};
    }
    
    const groupedData = {};
    data.forEach(item => {
      if (!groupedData[item.namedoctor]) {
        groupedData[item.namedoctor] = [item];
      } else {
        groupedData[item.namedoctor].push(item);
      }
    });
    return groupedData;
  };

  const groupedData = groupDataByUsername(data);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://technical-support-seven.vercel.app/removetest/${id}`);
      window.location.reload();
    } catch (err) {
      console.error("Error deleting record:", err);
    }
  };

  const handleShowReports = (doctorData) => {
    setSelectedDoctorData(doctorData);
    setModalShow(true);
  };

  // date

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric',hour: '2-digit', minute: '2-digit', second: '2-digit'  };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  

  return (
    <>
      <div className={styleess.nav}>
        <img src={img} alt="Icon" />
        <h5>Technical Support</h5>
      </div>
      <div className={styleess.bodyenplo}>
        <div className={styleess.tablee}>
          <h1 className={styleess.h1}>
            Technical Support
            <h1> IT</h1>
          </h1>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Department</th>
                <th>Device type</th>
                <th>Device image</th>
                <th>Reports</th>
                <th>Date</th>
                {/* <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {Object.keys(groupedData).map(namedoctor => (
                <React.Fragment key={namedoctor}>
                  <tr>
                    <td colSpan="6">{namedoctor}</td>
                  </tr>
                  {groupedData[namedoctor].map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.Department}</td>
                      <td>{item.nameimages}</td>
                      <td><img src={item.images} alt="Device" className={styleess.image} /></td>
                      <td>
                        <Button 
                          style={{ border: "none" }} 
                          onClick={() => handleShowReports(groupedData[namedoctor])}
                        >
                           Report
                        </Button>
                      </td>
                      <td>
                      {formatDate(item.report_date)}
                      </td>
                      <td>
                        {/* <Button onClick={() => handleRemove(item.id)}>Delete</Button> */}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <MyVerticallyCenteredModal 
        show={modalShow} 
        onHide={onHide} 
        doctorData={selectedDoctorData} 
      />
    </>
  );
}

export default Employee;
