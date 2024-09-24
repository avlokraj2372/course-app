import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  const courses = props.courses;
  let category=props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  
  function fetchcourses(){
    if(category==="All"){
    let courseList = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        courseList.push(courseData);
      });
    });
    console.log(courseList);
    
    return courseList;
  }// Recalculate only when 'courses' changes
   else{
    return courses[category];
   }
  } 
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        fetchcourses().map((course) => (
          <Card 
            key={course.id} 
            course={course}
            likedCourses={likedCourses} 
            setLikedCourses={setLikedCourses}
          />
        ))
      }
    </div>
  );
}

export default Cards;
