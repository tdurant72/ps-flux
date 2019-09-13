import React, { useState, useEffect } from 'react'
import { getCourses } from "../api/courseApi";
import CoursesList from './CourseList';
import { Link } from "react-router-dom";
const CoursesPage = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
    }, [])

    return (
        <div>
            <h2>Courses</h2>
            <Link to="/course" className="btn btn-primary">Add Course</Link>
            <CoursesList courses={courses} />
        </div>
    )
}
export default CoursesPage;
