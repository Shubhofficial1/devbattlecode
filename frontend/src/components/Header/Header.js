import React from 'react'
import './Header.css'
import { Menu, MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/core.css'

const Header = () => {
  const menuStyles = {
    backgroundColor: '#212022',
    border: 'none',
    marginTop: '15px',
    borderRadius: '5px',
  }

  const menuItemStyles = {
    color: 'white',
    padding: '8px 20px',
    fontSize: '12px',
    borderRadius: '5px',
    backgroundColor: '#212022',
    hover: {
      color: 'white',
      backgroundColor: '#2d3035',
    },
    active: {
      backgroundColor: '#333',
    },
  }

  return (
    <div className='header'>
      <div className='header_left'>
        <i className='fas fa-bars fa-lg header_bars'></i>
        <div className='searchbar'>
          <input className='header_input' placeholder='Search Courses'></input>
          <button type='submit' className='header_button'>
            <i className='fas fa-search header_searchicon'></i>
          </button>
        </div>
      </div>
      <div className='header_right'>
        <i class='fas fa-lg fa-bell header_bellicon'> </i>

        <Menu
          menuStyles={menuStyles}
          menuButton={
            <img
              className='header_profile'
              src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
              alt='img'
            />
          }
        >
          <MenuItem styles={menuItemStyles}>Profile</MenuItem>
          <MenuItem styles={menuItemStyles}>My Courses</MenuItem>
          <MenuItem styles={menuItemStyles}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Header
