import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CoursesList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { Link } from "react-router-dom";
function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();

    return () => courseStore.removeChangeListener(onChange);
  }, []);
  function onChange() {
    setCourses(courseStore.getCourses());
  }
  return (
    <div>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CoursesList courses={courses} deleteCourse={deleteCourse} />
    </div>
  );
}
export default CoursesPage;
