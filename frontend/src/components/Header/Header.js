import React, { useState } from 'react'
import './Header.css'
import { Menu, MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/core.css'
import Modal from '../Modal/Modal'

const Header = () => {
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)

  const menuStyles = {
    backgroundColor: '#212022',
    border: 'none',
    marginTop: '15px',
    marginLeft: '-8px',
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
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setShow(true)
            }}
            className='header_input'
            placeholder='Search Courses '
            spellCheck='false'
          ></input>
          <button
            disabled={!input}
            onClick={() => {
              setShow(true)
            }}
            className='header_button'
          >
            <i className='fas fa-search header_searchicon'></i>
          </button>
          <Modal
            onClose={() => {
              setShow(false)
            }}
            show={show}
            input={input}
          />
        </div>
      </div>
      <div className='header_right'>
        <i className='fas fa-lg fa-bell header_bellicon'> </i>

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
