import React from 'react'
import Course from '../components/Course/Course'
import courses from '../data/courses'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <h3 className='course_toptext'>Latest Courses</h3>
      <div className='course_container'>
        {courses.map((course) => (
          <Course course={course} />
        ))}
      </div>

      {/* <h3 className='course_toptext'>Latest Courses</h3>

      <div className='course_container'>
        {courses.map((course) => (
          <Course course={course} />
        ))}
      </div>

      <h3 className='course_toptext'>Latest Courses</h3>

      <div className='course_container'>
        {courses.map((course) => (
          <Course course={course} />
        ))}
      </div>

      <h3 className='course_toptext'>Latest Courses</h3>

      <div className='course_container'>
        {courses.map((course) => (
          <Course course={course} />
        ))}
      </div> */}
    </div>
  )
}

export default Home
