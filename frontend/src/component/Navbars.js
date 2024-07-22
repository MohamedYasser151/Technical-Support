import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap';
import {NavLink,useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import './css/Navbars.css';
import Img from './image/icon.png'
const  Navbars = ({size}) => {
  const [login, setLogin] = useState(false);
  const [filter ,setFilter] = useState('');
  const navigator = useNavigate ()
  const change = (event) =>{
    setFilter(event.target.value);
  } 



  
  // useTranslation
  const { t, i18n } = useTranslation();
  const changeEn = () =>{
    i18n.changeLanguage('en')
}
const changeFr = () =>{
    i18n.changeLanguage('ar')
}

  const handleClick = (e) =>{
    e.preventDefault();
    const lowercase = filter.toLowerCase();
    if(lowercase  === "product"){
      navigator("/product");
    }
    else if(lowercase  === "home"){
      navigator("/home");
    }
    else if(lowercase  === "support"){
      navigator("/support");
    }
    else if(lowercase  === "add to cart"){
      navigator("/cartitem");
    }
    else if(lowercase  === "men"){
      navigator("/productMen");
    }
    else if(lowercase  === "women"){
      navigator("/productWomen");
    }
    else if(lowercase  === "kids"){
      navigator("/productKids");
    }
    else{
      navigator('*')
    }
    
  }

  const handleRemove = () =>{
    Cookies.remove("login");
    setLogin(false);
    navigator("/Signin")
    window.location.reload()
  }

  return (
    
    <Navbar expand="lg" className=" navbar navbar-dark ">
      <Container fluid>
        <NavLink to="/home">
        <Navbar.Brand  className='icon' >
        <img
              alt=""
              src={Img}
              width="50"
              height="50"
              className="d-inline-block align-top br-5"
            />
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll " className="Toggle"  />
        <Navbar.Collapse id="navbarScroll ">
          <Nav className="mr-auto  mx-auto my-lg-0 " style={{ maxHeight: '100px'}} navbarScroll>
            <NavLink to="/home" className="NavLink"  >{t("Home")}</NavLink>
           
            <NavLink to="/support" className="NavLink">
            {t("Support")}
            </NavLink>
            <NavLink to="/click" className="NavLink">
            {t("click")}
            </NavLink>
            
            <NavLink  className="NavLink" onClick={handleRemove}>{t("Log out")}</NavLink>
            <NavLink className="NavLink" onClick={changeFr}>{t("Arabic")}</NavLink>
            <NavLink className="NavLink" onClick={changeEn}>{t("English")}</NavLink>
          </Nav>
          {/* <Form className="d-flex" onSubmit={handleClick}>
            <Form.Control
              type="search"
              placeholder={t("Search")}
              className="me-2 search"
              aria-label="Search"
              onChange={change}
            />
            <Button variant="outline-light" type='submit'>{t("Search")}</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Navbars;
