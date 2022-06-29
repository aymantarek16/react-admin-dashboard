import React from 'react';
import './main-layout.scss';
import { Outlet } from 'react-router-dom';
import SiderBar from '../components/sidebar/SideBar';
import TopNav from '../components/topnav/TopNav';


const mainLayout = () => {
  return (
    <>
    <SiderBar/>
    <div className="main">
        <div className="main__content">
            <TopNav/>
            <Outlet/>
        </div>
    </div>

    </>
  )
}

export default mainLayout