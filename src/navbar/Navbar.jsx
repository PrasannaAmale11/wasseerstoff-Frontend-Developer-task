import React from 'react'

import './navbar.css'
const Navbar = () => {
  return (
    <nav>
        {/* =========================Logo============================== */}
        <div className='logo'></div>
        <div className="white"></div>
        {/* =========================Header============================ */}
        <div className="nav_header">
        <h1 className='title'>ORION</h1>
        {/* ==========================Input/Search bar=================== */}
        <div className="nav_items">
        <div className="input_wrap">
        <input type="text" name="" id=""  className='search'/>
        <i class="uil uil-search search_icon"></i>
        </div>
        {/* ===============================Navbar titles================= */}
        <div className="nav_list">
            <ul className='nav_list_titles'>
                <li className='nav_ul'>Statistics</li>
                <li className='nav_ul'>Overview</li>
                <li className='nav_ul'>Dashboard</li>
                <li className='nav_ul'>Analytics</li>
            </ul>
        </div>
      
        </div>
        {/* =======================================Profile=================== */}
        <div className="profile">
            <div className="avatar">
            <i class="uil uil-user nav_avatar"></i>
            </div>
            <div className="sliders">
            <i class="uil uil-sliders-v-alt nav_slider"></i>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar