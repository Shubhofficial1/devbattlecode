import React from 'react'
import './SearchItem.css'
import { motion } from 'framer-motion'

const SearchItem = ({ course }) => {
  return (
    <motion.div whileTap={{ scale: 0.99 }} className='searchitem-container'>
      <img src={course.image} alt={course.name} className='searchitem-image' />
      <div className='searchitem-detail'>
        <p className='searchitem-name'>{course.name}</p>
        <p className='searchitem-author'>By {course.author}</p>
      </div>
    </motion.div>
  )
}

export default SearchItem
