import React from 'react'
import './Course.css'
import { motion } from 'framer-motion'
const Course = ({ course }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      whileTap={{ scale: 0.99 }}
      className='course_card noselect'
    >
      <img src={course.image} alt={course.name} />
      <div className='course_type'>
        <i className='fas fa-folder'></i>
        <p className='course_type_text'>{course.type}</p>
      </div>
      <h1 className='course_name'>{course.name}</h1>
      <p className='course_description'>{course.description}</p>

      <div className='course_author'>
        <img src={course.authorimage} alt={course.author} />
        <h1 className='course_author_name '>
          <span className='light_text'>By </span> {course.author}
        </h1>
      </div>
    </motion.div>
  )
}

export default Course
