import React from 'react'
import sidebarDataTop from '../../data/sidebarDataTop'
import sidebarDataMiddle from '../../data/sidebarDataMiddle'
import sidebarDataBottom from '../../data/sidebarDataBottom'
import MenuItem from '../MenuItem/MenuItem'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar noselect'>
      <h1 className='logo'>
        <i className='fas fa-dove icon'></i> Devbatttle
      </h1>
      <div className='menu'>
        {sidebarDataTop.map((item) => (
          <Link className='link' to={`${item.path}`}>
            <MenuItem item={item} />
          </Link>
        ))}
      </div>

      <div className='line_container'>
        <div className='line'></div>
      </div>

      <div className='menu'>
        {sidebarDataMiddle.map((item) => (
          <Link className='link' to={`${item.path}`}>
            <MenuItem item={item} />
          </Link>
        ))}
      </div>

      {/* <div className='menu_name noselect'>Projects</div>

      <div className='menu'>
        {sidebarDataBottom.map((item) => (
          <MenuItem item={item} />
        ))}
      </div> */}
    </div>
  )
}

export default Sidebar
