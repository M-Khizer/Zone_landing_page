import React, { useState } from 'react'

const Navbar = () => {
    
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

return (
    <div className='navbar'>
        
        {isSidebarOpen && (
        <div className="sidebar">
            <div className='sidebar-logo'>
                <h2>ZONE<span>.</span></h2>
            </div>

            <div className='sidebar-links'>
                <a href="#">Home</a>
                <a href="#">Components</a>
                <a href="#">Pages</a>
                <a href="#">Docs</a>
            </div>

            <div className='sidebar-btn'>          
                <button >Buy Now</button>
            </div>
        </div>
      )}

        <div className='box-1'>
            <h2>ZONE<span>.</span></h2>
        </div>
        

        <div className='box-2'>
            <a href="#">Home</a><a href="#">Components</a><a href="#">Pages</a><a href="#">Docs</a>
        </div>

        <div className='box-3'>
            <span class="material-symbols-outlined">search</span>
            <span class="material-symbols-outlined">settings</span>
            <button className='btn'>Buy Now</button>
        </div>

        <div className="hamburger" onClick={toggleSidebar}>
            <span class="material-symbols-outlined">search</span>
            <span class="material-symbols-outlined">settings</span>
            <span class="material-symbols-outlined">menu</span>
        </div>

    </div>
  )
}

export default Navbar