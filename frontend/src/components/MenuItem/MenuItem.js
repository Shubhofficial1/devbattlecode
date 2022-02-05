import React from 'react'
import { motion } from 'framer-motion'
import './MenuItem.css'

const MenuItem = ({ item }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.99 }}
      className='menu_tabs'
    >
      <i className={`fas ${item.icon} icon`}></i>
      <p className='menu_tabs_name'>{item.title}</p>
    </motion.div>
  )
}

export default MenuItem
