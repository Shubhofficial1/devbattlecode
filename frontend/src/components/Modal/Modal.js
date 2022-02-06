import React from 'react'
import './Modal.css'
import courses from '../../data/courses'
import SearchItem from '../SearchItem/SearchItem'
import { AnimatePresence, motion } from 'framer-motion'

const Modal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className='modal'
        onClick={props.onClose}
        key='modal'
      >
        <div
          className='modal-content'
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className='modal-header'>
            {/* <h5 className='modal-title'>Search Results</h5> */}
            <button onClick={props.onClose} className='button'>
              <i className='fas fa-x fa-times'></i>
            </button>
          </div>
          <div className='modal-body'>
            {courses
              .filter((val) => {
                if (props.input === '') {
                  return val
                } else if (
                  val.name.toLowerCase().includes(props.input.toLowerCase()) ||
                  val.author
                    .toLowerCase()
                    .includes(props.input.toLowerCase()) ||
                  val.type.toLowerCase().includes(props.input.toLowerCase())
                ) {
                  return val
                } else {
                  return null
                }
              })
              .map((course) => {
                return <SearchItem key={course.id} course={course} />
              })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal
